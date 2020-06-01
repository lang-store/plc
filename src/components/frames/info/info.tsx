import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Label from '../../tools/label';
import Text from '../../tools/text';
import { JsonStory } from '../../../models/models';
import Button from '../../tools/button';
import { Dragonet } from '../../../logic/dragonet';

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
  languages: JsonStory[];
  core: Dragonet;
}

const abstract = `Programming Language Markup (PLM) является частью
информационного стенда "ПРИЗМА" (программирование измерений) и предназначен для представления
экспертных оценок возможностей языков программирования (ЯП). В данной системе сконцетрированы представления
наиболее важных по мнению авторов языков программирования.`;

function Info({ languages, core }: Props) {

  return (
    <div className={css(styles.info)}>
      <Label text={`Programming Language Markup System`} />
      <Text text={abstract} />
      <div className={css(styles.compare)}>
        <Button onClick={core.frameLord.openMarkupFrame} name={`Добавить разметку`} />
        <Button onClick={core.frameLord.openCompareFrame} name={`Сравнить языки программирования`} />
      </div>
      {/* <List title={'Размеченные языки'} items={['Lisp', 'Java']} onClick={() => { }} /> */}
    </div>
  );
}

export default Info;
