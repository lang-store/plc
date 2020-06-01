import { Dragonet } from '../logic/dragonet';

export interface JsonStory {
    name: string;
    logo: string;
    compiler: string;
    data: {
        [key: string]: string[][];
        core: string[][];
        expansion: string[][];
        limit: string[][];
        union: string[][];
    };
}

export interface Language {
    concepts: Concept[];
}

export interface Concept {
    name: string;
    category: string;
    method: string;
    examples: string[];
}

export class Frame {
    constructor(private dragonet: Dragonet) { }
}

export class InitMarkupFrame extends Frame { }

export class ConceptFrame extends Frame {
    constructor(dragonet: Dragonet, public concept: Concept) {
        super(dragonet);
    }
}

export class InfoFrame extends Frame {
    constructor(dragonet: Dragonet, public languages: JsonStory[]) {
        super(dragonet);
    }
}

export class CompareFrame extends Frame {
    constructor(dragonet: Dragonet, public languages: JsonStory[]) {
        super(dragonet);
    }
}
