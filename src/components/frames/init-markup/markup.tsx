import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Core } from '../../../models/models';
import Card from '../../tools/card';

const styles = StyleSheet.create({
  compare: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
  },
  title: {
    padding: '10px',
    fontSize: '30px',
    color: 'rgb(66, 103, 178)',
  },
});

interface Props {
  core: Core;
}

function Markup({ core }: Props) {

  return (
    <div className={css(styles.info)}>
      <Card>
        <span className={css(styles.title)}>Разметка</span>
      </Card>
    </div>
  );
}

export default Markup;
