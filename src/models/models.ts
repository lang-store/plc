import { Dragonet } from '../logic/dragonet';

export interface MatrixItem {
    name: string;
    code: string;
}

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
    id?: number;
    name: string;
    concepts?: Concept[];
}

export interface ConceptExample {
    id?: number;
    conceptId?: number;
    example: string;
    notes: string;
}

export interface Concept {
    id?: number;
    languageId?: number;
    name: string;
    category: string;
    method: string;
    examples?: ConceptExample[];
}

export class Frame {
    constructor(public dragonet: Dragonet) { }
}
