import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from '../header';
import Selection from '../selection';

import Java from '../../store/java.json';
import { JsonStory } from '../../models/models';

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


const TEST_LANGUAGES: JsonStory[] = [Java];

function Main() {

  return (
    <div className={css(styles.main)}>
      <Header />
      <div className={css(styles.compare)}>
        <Selection languages={TEST_LANGUAGES} />
        <span className={css(styles.vs)}>VS</span>
        <Selection languages={TEST_LANGUAGES} />
      </div>
    </div>
  );
}

export default Main;
