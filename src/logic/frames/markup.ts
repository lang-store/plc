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

    constructor(dragonet: Dragonet, language?: Language) {
        super(dragonet);

        if (language) {
            this.language = language;
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

    @action.bound saveName = (name: string) => this.language.name = name;

    @action.bound openConceptConstructor = () => this.showInitConcept = true;

    @action.bound doneConcept(concept: Concept) {
        this.language.concepts.push(concept);
        this.showInitConcept = false;
    }

    @action.bound cancelConcept = () => this.showInitConcept = false;
}
