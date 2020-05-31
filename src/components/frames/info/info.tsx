import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Label from '../../tools/label';
import Text from '../../tools/text';
import { JsonStory, Core } from '../../../models/models';
import List from '../../tools/list';
import Button from '../../tools/button';
import TopList from '../../about/top-list';

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
  core: Core;
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
        <Button onClick={core.showInitMarkupFrame} name={`Добавить разметку`} />
        <Button onClick={core.showCompareLanguagesFrame} name={`Сравнить языки программирования`} />
      </div>
      {/* <List title={'Размеченные языки'} items={['Lisp', 'Java']} onClick={() => { }} /> */}
    </div>
  );
}

export default Info;