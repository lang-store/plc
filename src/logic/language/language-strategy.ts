import { Language } from '../../models/models';
import { observable, action } from 'mobx';

export class LanguageStrategy {
    @observable language: Language;

    constructor(language: Language) {
        this.language = language;
    }

    @action.bound getConceptsByCode(category: string, method: string) {
        return this.language.concepts.filter(concept => concept.category === category && concept.method === method);
    }

}
