import { Language, Concept, ConceptExample } from '../../models/models';


export class Api {
    private url = `http://localhost:5003/api/v1`;

    getLanguage = async (id: number) => {
        const url = `${this.url}/languages/${id}`;

        try {

            const response = await fetch(
                url,
                {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            );

            const result: Language = await response.json();
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    getLanguages = async () => {
        const url = `${this.url}/languages`;

        try {

            const response = await fetch(
                url,
                {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            );

            const result: Language[] = await response.json();
            return result;
        } catch (error) {
            console.error(error);
        }

        return [];
    }

    postLanguage = async (language: Language): Promise<Language> => {
        const url = `${this.url}/languages`;

        try {
            const result = await fetch(
                url,
                {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(language)
                }
            );

            return await result.json();

        } catch (error) {
            console.error(error);
        }

    }

    putLanguage = async (language: Language) => {
        const url = `${this.url}/languages`;

        try {
            await fetch(
                url,
                {
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(language)
                }
            );

        } catch (error) {
            console.error(error);
        }

    }

    deleteLanguage = async (id: number) => {
        const url = `${this.url}/languages/${id}`;

        try {
            await fetch(
                url,
                {
                    method: 'delete',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            );

        } catch (error) {
            console.error(error);
        }

    }

    getConcept = async (id: number) => {
        const url = `${this.url}/concepts/${id}`;

        try {

            const response = await fetch(
                url,
                {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            );

            const result: Concept = await response.json();
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    postConcept = async (concept: Concept): Promise<Concept> => {
        const url = `${this.url}/concepts`;

        try {
            const result = await fetch(
                url,
                {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(concept)
                }
            );

            return await result.json();
        } catch (error) {
            console.error(error);
        }

    }

    putConcept = async (concept: Concept) => {
        const url = `${this.url}/concepts`;

        try {
            await fetch(
                url,
                {
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(concept)
                }
            );

        } catch (error) {
            console.error(error);
        }

    }

    deleteConcept = async (id: number) => {
        const url = `${this.url}/concepts/${id}`;

        try {
            await fetch(
                url,
                {
                    method: 'delete',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            );

        } catch (error) {
            console.error(error);
        }

    }

    postExample = async (example: ConceptExample): Promise<ConceptExample> => {
        const url = `${this.url}/examples`;

        try {
            const result = await fetch(
                url,
                {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(example)
                }
            );

            return await result.json();

        } catch (error) {
            console.error(error);
        }

    }

    putExample = async (example: ConceptExample) => {
        const url = `${this.url}/examples`;

        try {
            await fetch(
                url,
                {
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(example)
                }
            );

        } catch (error) {
            console.error(error);
        }

    }

    deleteExample = async (id: number) => {
        const url = `${this.url}/examples/${id}`;

        try {
            await fetch(
                url,
                {
                    method: 'delete',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            );

        } catch (error) {
            console.error(error);
        }

    }

}
