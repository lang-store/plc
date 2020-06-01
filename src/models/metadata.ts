import { JsonStory, MatrixItem } from './models';

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

// ROW
export const CATEGORYS_OF_SEMANTIC_SYSTEMS: MatrixItem[] = [
    { name: 'Вычисления', code: 'E', },
    { name: 'Укрупнения', code: 'M', },
    { name: 'Правильность', code: 'C', },
    { name: 'Контекст', code: 'S', },
];

// Column
export const METHODS_OF_IMPLEMENTATION_SUPPORT: MatrixItem[] = [
    { name: 'Значения', code: 'V', },
    { name: 'Выражения', code: 'E', },
    { name: 'Память', code: 'M', },
    { name: 'Контроль', code: 'C', },
    { name: 'Структуры', code: 'S', },
];
