import { JsonStory } from './models';

import Java from '../store/java.json';
import Lisp from '../store/lisp.json';

export const ROWS = {
    'core': 'Ядро (К)',
    'expansion': 'Специальные функции (Р)',
    'limit': 'Ограничения (В)',
    'union': 'Общность, Практичность (U)',
};

export const COLUMN_NAMES = ['Константы (V)', 'Вычисления (E)', 'Память (M)', 'Управление (C)', 'Структуры (S)'];


export const TEST_LANGUAGES: JsonStory[] = [Java, Lisp];
