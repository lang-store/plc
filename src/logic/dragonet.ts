import { observable, action, } from 'mobx';

import { Language } from '../models/models';
import { FrameLord } from './frame-lord';
import { Api } from './api/api';
import { Blizzard } from './spinner/blizzard';
import ScriptBuilder from './sql/sql';

export class Dragonet {
    @observable languages: Language[] = [];

    @observable blizzard = new Blizzard();

    @observable api = new Api();

    @observable frameLord = new FrameLord(this);

    @observable scriptBuilder = new ScriptBuilder();

    @action.bound addLanguage = (language: Language) => this.languages.push(language);

    @action.bound refreshData = async () => this.languages = await this.api.getLanguages();
}
