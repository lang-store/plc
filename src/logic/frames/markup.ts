import { Frame, Concept, Language } from '../../models/models';
import { observable, action } from 'mobx';
import { Dragonet } from '../dragonet';

interface CodeSelect {
    categoryCode: string;
    methodCode: string;
}

export class InitMarkupFrame extends Frame {
    @observable language: Language = {
        name: '',
        concepts: []
    };

    @observable selectedCodes: CodeSelect[] = [];
    @observable showInitConcept = false;
    @observable showExplanation = false;
    @observable isRewrite = false;

    constructor(dragonet: Dragonet, language?: Language) {
        super(dragonet);

        if (language) {
            this.language = language;
            this.isRewrite = true;
        }
    }


    private get isNoneSelected(): boolean {
        return this.selectedCodes.length === 0;
    }


    get concepts(): Concept[] {
        if (this.isNoneSelected) {
            return this.language.concepts;
        }

        return this.language.concepts.filter(concept =>
            this.selectedCodes.find(sel => sel.categoryCode === concept.category && sel.methodCode === concept.method));
    }

    @action.bound refreshLanguage = async () => {
        if (!this.isRewrite) {
            return;
        }

        const { api } = this.dragonet;
        this.language = await api.getLanguage(this.language.id);
    }

    @action.bound addSelectedCode = (categoryCode: string, methodCode: string) => {
        const length = this.selectedCodes.length;
        const tmp = this.selectedCodes.filter(sel => !(sel.categoryCode === categoryCode && sel.methodCode === methodCode));
        if (tmp.length === length) {
            this.selectedCodes.push({ categoryCode, methodCode });
        } else {
            this.selectedCodes = tmp;
        }
    }

    @action.bound openConceptConstructor = () => this.showInitConcept = true;


    @action.bound saveLocalName = (name: string) => this.language.name = name;

    @action.bound showExplanationList = () => this.showExplanation = true;

    @action.bound hideExplanationList = () => this.showExplanation = false;

    @action.bound async updateLanguage() {
        if (!this.isRewrite) {
            return;
        }

        const { blizzard, api } = this.dragonet;
        await blizzard.doInBackground(api.putLanguage)(this.language);
    }

    @action.bound async saveNewLanguage() {
        const { api } = this.dragonet;
        const lang = await api.postLanguage({ name: this.language.name });

        for (const { name, category, method, examples } of this.language.concepts) {
            const savedContcept = await api.postConcept({ languageId: lang.id, name, category, method });

            for (const { example, notes } of examples) {
                await api.postExample({ conceptId: savedContcept.id, example, notes });
            }
        }
    }

    @action.bound deleteLanguage = async () => await this.dragonet.api.deleteLanguage(this.language.id);

    @action.bound async doneConcept(concept: Concept) {
        const { blizzard, api } = this.dragonet;
        concept.languageId = this.language.id;

        if (this.isRewrite) {
            await blizzard.doInBackground(api.postConcept)(concept);
        }

        await blizzard.doInBackground(this.refreshLanguage)();
        this.showInitConcept = false;
    }

    @action.bound cancelConcept = () => this.showInitConcept = false;
}
