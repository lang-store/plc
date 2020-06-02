import { Frame, Concept, Language } from '../../models/models';
import { observable, action } from 'mobx';
import { Dragonet } from '../dragonet';

export class ComparisonFrame extends Frame {
    @observable languages: Language[] = [];

    constructor(dragonet: Dragonet, languages: Language[]) {
        super(dragonet);

        if (languages) {
            this.languages = languages;
        }
    }


}
