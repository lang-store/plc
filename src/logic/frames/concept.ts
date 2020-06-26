import { Frame, Concept, ConceptExample } from '../../models/models';
import { Dragonet } from '../dragonet';
import { observable, action } from 'mobx';

export class ConceptFrame extends Frame {
    @observable concept: Concept;
    @observable showExampleConstructor = false;
    @observable showExampleEditor = false;

    @observable editId: number;

    constructor(dragonet: Dragonet, concept: Concept, readonly langName: string) {
        super(dragonet);
        this.concept = concept;
    }


    get showConstruct(): boolean {
        return this.showExampleConstructor || this.showExampleEditor;
    }


    @action.bound saveLocalName = (name: string) => this.concept.name = name;

    @action.bound async saveConcept() {
        const { blizzard, api } = this.dragonet;
        await blizzard.doInBackground(api.putConcept)(this.concept);
    }

    @action.bound openExampleConstructor = () => this.showExampleConstructor = true;

    @action.bound openExampleEditor = (id: number) => {
        this.showExampleEditor = true;
        this.editId = id;
    }

    @action.bound async doneExample(example: ConceptExample) {
        const { blizzard, api } = this.dragonet;

        example.conceptId = this.concept.id;
        await blizzard.doInBackground(api.postExample)(example);
        await this.refreshConcept();
        this.showExampleConstructor = false;
    }

    @action.bound async updateExample(example: ConceptExample) {
        const { blizzard, api } = this.dragonet;
        await blizzard.doInBackground(api.putExample)(example);
        this.showExampleEditor = false;
    }

    @action.bound async refreshConcept() {
        const { blizzard, api } = this.dragonet;
        this.concept = await blizzard.doInBackground(api.getConcept)(this.concept.id);
    }

    @action.bound deleteExample = async (id: number) => await this.dragonet.blizzard.doInBackground(this.dragonet.api.deleteExample)(id);

    @action.bound deleteConcept = async () => await this.dragonet.api.deleteConcept(this.concept.id);

    @action.bound cancelExample = () => this.showExampleConstructor = false;

    @action.bound cancelEditor = () => this.showExampleEditor = false;
}
