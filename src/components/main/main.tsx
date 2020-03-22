import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from '../header';

const styles = StyleSheet.create({
  main: {
  },
});

function Main() {

  return (
    <div className={css(styles.main)}>
      <Header />
      <h1>Hello</h1>
    </div>
  );
}

export default Main;
