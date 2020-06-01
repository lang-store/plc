import { Frame, Concept, ConceptExample } from '../../models/models';
import { Dragonet } from '../dragonet';
import { observable, action } from 'mobx';

export class ConceptFrame extends Frame {
    @observable concept: Concept;
    @observable showExampleConstructor = false;

    constructor(dragonet: Dragonet, concept: Concept) {
        super(dragonet);
        this.concept = concept;
    }

    @action.bound saveName = (name: string) => this.concept.name = name;

    @action.bound openExampleConstructor = () => this.showExampleConstructor = true;

    @action.bound doneExample(example: ConceptExample) {
        this.concept.examples.push(example);
        this.showExampleConstructor = false;
    }

    @action.bound cancelExample = () => this.showExampleConstructor = false;
}
