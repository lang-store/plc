import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
const { Chart } = require('react-google-charts');

import Header from '../header';
import Selection from '../selection';
import DifficultyMatrix from '../difficulty-matrix';


import { JsonStory } from '../../models/models';
import CompareRow from '../compare-row';


import Java from '../../store/java.json';
import Lisp from '../../store/lisp.json';

const loadKeyframes = {
  '0%': {
    transform: 'rotate(0deg)',
    'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  },
  '50%': {
    transform: 'rotate(900deg)',
    'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  },
  '100%': {
    transform: 'rotate(1800deg)',
  }
};

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
    margin: '10px',
    fontSize: '30px',
    color: 'rgb(66, 103, 178)',
  },
  container: {
    textAlign: 'center',
  },
  charts: {
    padding: '100px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    width: '50px',
    height: '50px',
    border: '5px solid rgba(255,255,255,.3)',
    borderRadius: '50%',
    borderTopColor: 'rgb(66, 103, 178)',
    animationName: [loadKeyframes],
    animationDuration: '3s',
    animationIterationCount: 'infinite',
  },
});


const ROWS = {
  'core': 'Ядро (К)',
  'expansion': 'Специальные функции (Р)',
  'limit': 'Ограничения (В)',
  'union': 'Общность, Практичность (U)',
};


const COLUMN_NAMES = ['Константы (V)', 'Вычисления (E)', 'Память (M)', 'Управление (C)', 'Структуры (S)'];

const TEST_LANGUAGES: JsonStory[] = [Java, Lisp];
function Main() {
  const [languageA, setLanguageA] = useState<JsonStory>();
  const [languageB, setLanguageB] = useState<JsonStory>();

  const createData = (key: string, languages: JsonStory[]) => {
    if (!languageA || !languageB) {
      return [];
    }

    return COLUMN_NAMES.map((column, i) => [column, ...languages.map(lang => lang.data[key][i].length)]);
  };

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

          <span className={css(styles.label)}>Визуальные формы представления результатов сравнения сложности ЯП</span>
          <div className={css(styles.charts)}>
            {
              Object.entries(ROWS).map(
                ([key, value]) =>
                  <Chart
                    width={'700px'}
                    height={'400px'}
                    chartType="Bar"
                    loader={<div className={css(styles.loader)}></div>}
                    data={[
                      ['', languageA.name, languageB.name],
                      ...createData(key, [languageA, languageB])
                    ]}
                    options={{
                      chart: {
                        title: value,
                      },
                    }}
                  />
              )
            }
          </div>

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
