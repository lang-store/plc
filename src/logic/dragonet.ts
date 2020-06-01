import { observable, } from 'mobx';

import { Language } from '../models/models';
import { FrameLord } from './frame-lord';



export class Dragonet {
    @observable languages: Language[];
    @observable frameLord = new FrameLord(this);

}
