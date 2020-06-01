import { Frame, Concept } from '../../models/models';
import { observable, action } from 'mobx';

export class InitMarkupFrame extends Frame {
    @observable name: string = '';
    @observable concepts: Concept[] = [
        {
            name: 'type sym = (a, b, . . . )',
            category: 'E',
            method: 'V',
            examples: [{
                example: 'a+b',
                notes: 'Это так работает'
            }],
        }
    ];

    @observable showInitConcept = false;

    @action.bound saveName = (name: string) => this.name = name;

    @action.bound openConceptConstructor = () => this.showInitConcept = true;

    @action.bound doneConcept(concept: Concept) {
        this.concepts.push(concept);
        this.showInitConcept = false;
    }

    @action.bound cancelConcept = () => this.showInitConcept = false;
}
