import { Language, Concept, ConceptExample } from '../../models/models';


export class Api {
    private url = `http://localhost:5003/api/v1`;

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

    pushConcept = async (concept: Concept) => {
        const url = `${this.url}/concepts`;

        try {
            await fetch(
                url,
                {
                    method: 'post',
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

    pushExample = async (example: ConceptExample) => {
        const url = `${this.url}/examples`;

        try {
            await fetch(
                url,
                {
                    method: 'post',
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

}
