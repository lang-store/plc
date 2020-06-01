
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

export interface Core {
    showCompareLanguagesFrame: () => void;
    showInitMarkupFrame: () => void;
    showConceptFrame: (concept: Concept) => void;
    removeLastFrame: () => void;
}


export interface Concept {
    name: string;
    category: string;
    method: string;
    examples: string[];
}

export class Frame {
}

export class InitMarkupFrame extends Frame { }

export class ConceptFrame extends Frame {
    constructor(public concept: Concept) {
        super();
    }
}

export class InfoFrame extends Frame {
    constructor(public languages: JsonStory[]) {
        super();
    }
}

export class CompareFrame extends Frame {
    constructor(public languages: JsonStory[]) {
        super();
    }
}
