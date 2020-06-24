import { observable, action, } from 'mobx';

import { Language } from '../models/models';
import { FrameLord } from './frame-lord';
import { Api } from './api/api';

export class Dragonet {
    @observable languages: Language[] = [
        {
            name: 'Паскаль',
            concepts: [
                {
                    name: 'Ключевое слово',
                    category: 'E',
                    method: 'C',
                    examples: [{
                        example: 's_star:= s_nov',
                        notes: 'С точностью до пространства возможных схем вычислений'
                    }],
                }
            ]
        },
        {
            name: 'Lisp',
            concepts: [
                {
                    name: 'type sym = (a, b, . . . )',
                    category: 'E',
                    method: 'C',
                    examples: [{
                        example: 'NIL',
                        notes: 'С точностью до пространства возможных схем вычислений'
                    }],
                }
            ]
        },
    ];

    @observable api = new Api();

    @observable frameLord = new FrameLord(this);

    @action.bound addLanguage = (language: Language) => this.languages.push(language);

    @action.bound refreshData = async () => this.languages = await this.api.getLanguages();
}
