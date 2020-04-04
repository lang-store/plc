import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Label from '../../tools/label';
import { JsonStory } from '../../../models/models';

const styles = StyleSheet.create({
  info: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
  },
});

interface Props {
  languages: JsonStory[];
}

function Info({ languages }: Props) {

  return (
    <div className={css(styles.info)}>
      <Label text={`Информационный стенд "ПРИЗМА"`} />
    </div>
  );
}

export default Info;
