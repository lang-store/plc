import React, { useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Label from '../../tools/label';
import Text from '../../tools/text';
import { JsonStory } from '../../../models/models';
import Button from '../../tools/button';
import List from '../../tools/list';
import { InfoFrame } from '../../../logic/frames';
import { MarkupMeta } from '../../../logic/language/meta';
import { observer } from 'mobx-react-lite';

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
  frame: InfoFrame;
}

const abstract = `Programming Language Markup (PLM) является частью
информационного стенда "ПРИЗМА" (программирование измерений) и предназначен для представления
экспертных оценок возможностей языков программирования (ЯП). В данной системе сконцетрированы представления
наиболее важных по мнению авторов языков программирования.`;

function Info({ frame }: Props) {
  const { dragonet } = frame;
  const { frameLord } = dragonet;

  const markupMeta = new MarkupMeta();

  useEffect(() => {
    dragonet.blizzard.doInBackground(dragonet.refreshData)();
  }, []);

  return (
    <div className={css(styles.info)}>
      <Label text={`Programming Language Markup System`} />
      <Text text={abstract} />

      <div className={css(styles.compare)}>
        <Button onClick={() => dragonet.refreshData()} name={`Обновить данные`} />
        <Button onClick={() => frameLord.openMarkupFrame()} name={`Добавить разметку`} />
        <Button onClick={() => frameLord.openCompareFrame()} name={`Сравнить языки программирования`} />
        <Button onClick={() => frameLord.openComparisonFrame()} name={`Сравнить языки программирования 2.0`} />
      </div>

      <List
        columns={['Язык программирования', 'Категории', 'Методы', 'Число примеров']}
        rows={
          dragonet.languages.map(language => [
            language.name,
            markupMeta.calculateCategoryVector(language.concepts),
            markupMeta.calculateMethodVector(language.concepts),
            language.concepts.length.toString()
          ])
        }
        onClick={(row) => {
          const lang = dragonet.languages.find(language => language.name === row[0]);
          if (lang) {
            frameLord.openMarkupFrame(lang);
          }
        }}
      />
    </div>
  );
}

export default observer(Info);
