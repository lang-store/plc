import { Language } from '../../models/models';

class ScriptBuilder {
    generateSqlScript = (language: Language[]) => {
        let script = '';
        language.forEach(lang => {
            script += `\n INSERT INTO languages (name) VALUES ('${lang.name}'); \n`;

            lang.concepts.forEach(concept => {
                script += `\n INSERT INTO concepts (name, category, method, language_id) VALUES ('${concept.name}', '${concept.category}', '${concept.method}', (select id from languages where name = '${lang.name}')); \n`;

                concept.examples.forEach(example => {
                    script += `\n INSERT INTO examples (example, notes, concept_id) VALUES ('${example.example}', '${example.notes}', (select id from concepts where name = '${concept.name}' and language_id = (select id from languages where name = '${lang.name}'))); \n`;
                });
            });
        });

        return script;
    }

}

export default ScriptBuilder;
