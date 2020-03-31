import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from '../header';
import Selection from '../selection';
import DifficultyMatrix from '../difficulty-matrix';


import { JsonStory } from '../../models/models';
import CompareRow from '../compare-row';


import Java from '../../store/java.json';
import Lisp from '../../store/lisp.json';

const styles = StyleSheet.create({
  main: {
  },
  compare: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
  },
  vs: {
    fontFamily: 'Impact',
    padding: '10px',
    fontSize: '50px',
    color: 'rgb(66, 103, 178)',
  },
  label: {
    padding: '10px',
    fontSize: '30px',
    color: 'rgb(66, 103, 178)',
  },
  container: {
    textAlign: 'center',
  },
});

const ROWS = {
  'core': 'Ядро (К)',
  'expansion': 'Специальные функции (Р)',
  'limit': 'Ограничения (В)',
  'union': 'Общность, Практичность (U)',
};

// Представление результатов сравнения понятийной сложности определений языков

const TEST_LANGUAGES: JsonStory[] = [Java, Lisp];

function Main() {
  const [languageA, setLanguageA] = useState<JsonStory>();
  const [languageB, setLanguageB] = useState<JsonStory>();

  return (
    <div className={css(styles.main)}>
      <Header />
      <div className={css(styles.compare)}>
        <Selection onSelect={setLanguageA} languages={TEST_LANGUAGES} />
        <span className={css(styles.vs)}>VS</span>
        <Selection onSelect={setLanguageB} languages={TEST_LANGUAGES} />
      </div>
      {
        languageA && languageB &&
        <div className={css(styles.container)}>

          <span className={css(styles.label)}>{`Представление результатов сравнения понятийной сложности определений языков ${languageA.name} и ${languageB.name}`}</span>
          <div className={css(styles.compare)}>
            <DifficultyMatrix languageA={languageA} languageB={languageB} />
          </div>

          {
            Object.entries(ROWS).map(
              ([key, value]) =>
                <CompareRow
                  title={value}
                  languageA={{ name: languageA.name, row: languageA.data[key] }}
                  languageB={{ name: languageB.name, row: languageB.data[key] }}
                />
            )
          }
        </div>
      }
    </div>
  );
}

export default Main;
