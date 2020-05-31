
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
}

export class Frame {
}

export class InitMarkupFrame extends Frame { }

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
