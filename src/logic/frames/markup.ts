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


    @action.bound addSelectedCode = (categoryCode: string, methodCode: string) => {
        const length = this.selectedCodes.length;
        const tmp = this.selectedCodes.filter(sel => !(sel.categoryCode === categoryCode && sel.methodCode === methodCode));
        if (tmp.length === length) {
            this.selectedCodes.push({ categoryCode, methodCode });
        } else {
            this.selectedCodes = tmp;
        }
    }

    @action.bound saveLocalName = (name: string) => this.language.name = name;

    @action.bound openConceptConstructor = () => this.showInitConcept = true;

    @action.bound async saveLanguage() {
        const { blizzard, api } = this.dragonet;
        await blizzard.doInBackground(api.putLanguage)(this.language);
    }

    @action.bound async doneConcept(concept: Concept) {
        const { blizzard, api } = this.dragonet;

        concept.languageId = this.language.id;

        await blizzard.doInBackground(api.pushConcept)(concept);

        this.language.concepts.push(concept);
        this.showInitConcept = false;
    }

    @action.bound cancelConcept = () => this.showInitConcept = false;
}
