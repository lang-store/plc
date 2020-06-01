import { observable, } from 'mobx';

import { Language } from '../models/models';
import { FrameLord } from './frame-lord';



class Dragonet {
    @observable languages: Language[];
    @observable frameLord = new FrameLord();

}
