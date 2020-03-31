
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
