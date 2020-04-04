import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from '../header';
import Selection from '../compare/selection';
import DifficultyMatrix from '../compare/difficulty-matrix';
import CompareRow from '../compare/compare-row';

import { JsonStory } from '../../models/models';
import Charts from '../compare/charts';

import { TEST_LANGUAGES, ROWS } from '../../models/metadata';
import CompareLanguages from '../compare/compare-languages';

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
});

function Main() {

  return (
    <div className={css(styles.main)}>
      <Header logo={`Programming Languages Compare`} />
      <CompareLanguages languages={TEST_LANGUAGES} />
    </div>
  );
}

export default Main;
