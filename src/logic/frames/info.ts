import { Frame, JsonStory } from '../../models/models';
import { Dragonet } from '../dragonet';

export class InfoFrame extends Frame {
    constructor(dragonet: Dragonet, public languages: JsonStory[]) {
        super(dragonet);
    }
}
