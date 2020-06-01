import { observable, action, } from 'mobx';
import { Frame, CompareFrame, InitMarkupFrame, Concept, ConceptFrame } from '../models/models';
import { TEST_LANGUAGES } from '../models/metadata';


export class FrameLord {
    @observable frames: Frame[] = [];

    @action.bound
    openCompareFrame = () => this.frames.push(new CompareFrame(TEST_LANGUAGES))

    @action.bound
    openMarkupFrame = () => this.frames.push(new InitMarkupFrame())

    @action.bound
    openConceptFrame = (concept: Concept) => this.frames.push(new ConceptFrame(concept))

    @action.bound
    removeLastFrame = () => this.frames.pop()

}
