import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from '../header';
import Selection from '../selection';
import DifficultyMatrix from '../difficulty-matrix';


import Java from '../../store/java.json';
import { JsonStory } from '../../models/models';
import CompareRow from '../compare-row';

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
  }
});

const ROWS = {
  'core': 'Ядро (К)',
  'expansion': 'Специальные функции (Р)',
  'limit': 'Ограничения (В)',
  'union': 'Общность, Практичность (U)',
};

// Представление результатов сравнения понятийной сложности определений языков

const TEST_LANGUAGES: JsonStory[] = [Java as JsonStory];

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
        languageA && languageB && <div>

          <div className={css(styles.compare)}>
            <DifficultyMatrix language={languageA} />
            <span className={css(styles.vs)}></span>
            <DifficultyMatrix language={languageB} />
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
