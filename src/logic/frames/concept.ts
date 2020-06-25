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

    @action.bound saveLocalName = (name: string) => this.concept.name = name;

    @action.bound async saveConcept() {
        const { blizzard, api } = this.dragonet;
        await blizzard.doInBackground(api.putConcept)(this.concept);
    }

    @action.bound openExampleConstructor = () => this.showExampleConstructor = true;

    @action.bound async doneExample(example: ConceptExample) {
        const { blizzard, api } = this.dragonet;

        example.conceptId = this.concept.id;

        await blizzard.doInBackground(api.pushExample)(example);

        this.concept.examples.push(example);
        this.showExampleConstructor = false;
    }

    @action.bound cancelExample = () => this.showExampleConstructor = false;
}
