import { Language } from '../../models/models';

class ScriptBuilder {
    generateSqlScript = (language: Language[]) => {
        let script = '';
        language.forEach(lang => {
            script += `\n INSERT INTO languages (name) VALUES ('${lang.name.replace(/'/g, `''`)}'); \n`;

            lang.concepts.forEach(concept => {
                script += `\n INSERT INTO concepts (name, category, method, language_id) VALUES ('${concept.name.replace(/'/g, `''`)}', '${concept.category}', '${concept.method}', (select id from languages where name = '${lang.name.replace(/'/g, `''`)}')); \n`;

                concept.examples.forEach(example => {
                    script += `\n INSERT INTO examples (example, notes, concept_id) VALUES ('${example.example.replace(/'/g, `''`)}', '${example.notes.replace(/'/g, `''`)}', (select id from concepts where name = '${concept.name.replace(/'/g, `''`)}' and language_id = (select id from languages where name = '${lang.name}'))); \n`;
                });
            });
        });

        return script;
    }

}

export default ScriptBuilder;
