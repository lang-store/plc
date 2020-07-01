import { Frame, Concept, Language } from '../../models/models';
import { observable, action, computed } from 'mobx';
import { Dragonet } from '../dragonet';

interface CodeSelect {
    categoryCode: string;
    methodCode: string;
}

export class ComparisonFrame extends Frame {
    @observable languages: Language[] = [];
    @observable selectedCodes: CodeSelect[] = [];

    constructor(dragonet: Dragonet, languages: Language[]) {
        super(dragonet);

        if (languages) {
            this.languages = languages;
        }
    }

    private get isNoneSelected(): boolean {
        return this.selectedCodes.length === 0;
    }

    @action.bound getСoncepts(language: Language): Concept[] {
        if (this.isNoneSelected) {
            return language.concepts;
        }

        return language.concepts
            .filter(concept =>
                this.selectedCodes
                    .find(sel => sel.categoryCode === concept.category && sel.methodCode === concept.method)
            );
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

    generateConceptsToList(lengs: Language[]) {
        const langConcepts = lengs.map(language => language && this.getСoncepts(language));
        const maxSize = Math.max(...langConcepts.map(c => c && c.length));

        const showConcepts = [];

        for (let i = 0; i < maxSize; i++) {
            showConcepts.push([
                ...langConcepts.map(conceptArray => [conceptArray[i] && conceptArray[i].name, conceptArray[i] && conceptArray[i].examples.length.toString()]).flat(),
            ]);
        }
        return showConcepts;
    }


}
