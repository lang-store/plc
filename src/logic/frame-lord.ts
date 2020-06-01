import { observable, action, computed, } from 'mobx';
import { Frame, CompareFrame, InitMarkupFrame, Concept, ConceptFrame, InfoFrame } from '../models/models';
import { TEST_LANGUAGES } from '../models/metadata';
import { Dragonet } from './dragonet';

const MIN_FRAMES_LENGTH = 1;

export class FrameLord {
    @observable frames: Frame[] = [new InfoFrame(this.dragonet, TEST_LANGUAGES)];

    constructor(private dragonet: Dragonet) { }

    @computed get isMinSize(): boolean {
        return this.frames.length === MIN_FRAMES_LENGTH;
    }

    @action.bound
    openCompareFrame = () => this.frames.push(new CompareFrame(this.dragonet, TEST_LANGUAGES))

    @action.bound
    openMarkupFrame = () => this.frames.push(new InitMarkupFrame(this.dragonet))

    @action.bound
    openConceptFrame = (concept: Concept) => this.frames.push(new ConceptFrame(this.dragonet, concept))

    @action.bound
    removeLastFrame = () => this.frames.pop()

    @action.bound
    goHome = () => this.frames = [this.frames[0]]

}
