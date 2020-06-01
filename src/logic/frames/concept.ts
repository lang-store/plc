import { Frame, Concept } from '../../models/models';
import { Dragonet } from '../dragonet';

export class ConceptFrame extends Frame {
    constructor(dragonet: Dragonet, public concept: Concept) {
        super(dragonet);
    }
}
