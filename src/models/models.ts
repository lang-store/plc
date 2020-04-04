
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

export class Frame {
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
