import { observable, action, computed, } from 'mobx';
import { Frame, Concept, Language, } from '../models/models';
import { TEST_LANGUAGES } from '../models/metadata';
import { Dragonet } from './dragonet';
import { InfoFrame, CompareFrame, InitMarkupFrame, ConceptFrame } from './frames';
import { ComparisonFrame } from './frames/comparison';

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
    openMarkupFrame = (language?: Language) => this.frames.push(new InitMarkupFrame(this.dragonet, language))

    @action.bound
    openConceptFrame = (concept: Concept, langName: string) => this.frames.push(new ConceptFrame(this.dragonet, concept, langName))

    @action.bound
    openComparisonFrame = () => this.frames.push(new ComparisonFrame(this.dragonet, this.dragonet.languages))

    @action.bound
    removeLastFrame = () => this.frames.pop()

    @action.bound
    goHome = () => this.frames = [this.frames[0]]

}
