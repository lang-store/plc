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
    name: string;
    concepts: Concept[];
}

export interface ConceptExample {
    example: string;
    notes: string;
}

export interface Concept {
    name: string;
    category: string;
    method: string;
    examples: ConceptExample[];
}

export class Frame {
    constructor(public dragonet: Dragonet) { }
}
