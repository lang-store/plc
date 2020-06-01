import { Frame, Concept, Language } from '../../models/models';
import { observable, action } from 'mobx';
import { LanguageStrategy } from '../language';

export class InitMarkupFrame extends Frame {
    @observable language: Language = {
        name: '',
        concepts: [
            {
                name: 'type sym = (a, b, . . . )',
                category: 'E',
                method: 'V',
                examples: [{
                    example: 'a+b',
                    notes: 'Это так работает'
                }],
            }
        ]
    };

    @observable showInitConcept = false;

    @action.bound saveName = (name: string) => this.language.name = name;

    @action.bound openConceptConstructor = () => this.showInitConcept = true;

    @action.bound doneConcept(concept: Concept) {
        this.language.concepts.push(concept);
        this.showInitConcept = false;
    }

    @action.bound cancelConcept = () => this.showInitConcept = false;
}
