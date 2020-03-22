import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from '../header';
import Selection from '../selection';

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
const TEST_LANGUAGES = ['C', 'C++', 'D', 'Java', 'Javascript', 'Go', 'C#', 'F#', 'A', 'B', 'Scala'];

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
