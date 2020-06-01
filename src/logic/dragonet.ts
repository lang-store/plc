import { observable, action, } from 'mobx';

import { Language } from '../models/models';
import { FrameLord } from './frame-lord';

export class Dragonet {
    @observable languages: Language[] = [
        {
            name: 'Lisp',
            concepts: [
                {
                    name: 'type sym = (a, b, . . . )',
                    category: 'E',
                    method: 'V',
                    examples: [{
                        example: 'a+b',
                        notes: 'Это так работает'
                    }],
                }
            ]
        },
    ];
    @observable frameLord = new FrameLord(this);

    @action.bound addLanguage = (language: Language) => this.languages.push(language);
}
