import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Label from '../../tools/label';
import Text from '../../tools/text';
import { JsonStory } from '../../../models/models';
import Button from '../../tools/button';

const styles = StyleSheet.create({
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
  },
});

interface Props {
  languages: JsonStory[];
}

const abstract = `Programming Languages Compare System (PLCS) является частью
информационного стенда "ПРИЗМА" (программирование измерений) и предназначен для представления
экспертных оценок возможностей языков программирования (ЯП). В данной системе сконцетрированы представления
наиболее важных по мнению авторов языков программирования.`;

function Info({ languages }: Props) {

  return (
    <div className={css(styles.info)}>
      <Label text={`Programming Languages Compare System`} />
      <Text text={abstract} />
      <Button onClick={() => { }} name={`Сравнить языки программирования`} />
    </div>
  );
}

export default Info;
