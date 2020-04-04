import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Label from '../tools/label';

const styles = StyleSheet.create({
  info: {
  },
});


function Info() {

  return (
    <div className={css(styles.info)}>
      <Label text={`Информационный стенд ПРИЗМА`} />
    </div>
  );
}

export default Info;
