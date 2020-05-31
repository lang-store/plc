import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Core } from '../../../models/models';

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
});

interface Props {
  core: Core;
}

function Markup({ core }: Props) {

  return (
    <div className={css(styles.info)}>
    </div>
  );
}

export default Markup;
