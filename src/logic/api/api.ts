import { Language } from '../../models/models';


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

}
