import React, { useState, Fragment, useMemo } from 'react';
import { StyleSheet, css } from 'aphrodite';


import { ComparisonFrame } from '../../../logic/frames/comparison';
import List from '../../tools/list';
import { MarkupMeta } from '../../../logic/language/meta';
import Matrix from '../../tools/matrix';

const styles = StyleSheet.create({
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
  },
  label: {
    padding: '10px',
    margin: '10px',
    fontSize: '30px',
    color: 'rgb(66, 103, 178)',
  },
  container: {
    textAlign: 'center',
  },
  charts: {
    padding: '100px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {
  frame: ComparisonFrame;
}

function ComparisonComponent({ frame }: Props) {
  const { languages } = frame;
  const { frameLord } = frame.dragonet;
  const markupMeta = new MarkupMeta();

  const conceptA = useMemo(() =>
    languages[0].concepts.filter(concept => concept.category === markupMeta.categorys[0].code && concept.method === markupMeta.methods[0].code),
    []
  );

  const conceptB = useMemo(() =>
    languages[1].concepts.filter(concept => concept.category === markupMeta.categorys[0].code && concept.method === markupMeta.methods[0].code),
    []
  );

  return (
    <Fragment>

      <div className={css(styles.compare)}>
        <List
          columns={['Язык программирования', 'Категории', 'Методы', 'Число примеров']}
          rows={
            languages.map(language => [
              language.name,
              markupMeta.calculateCategoryVector(language.concepts),
              markupMeta.calculateMethodVector(language.concepts),
              language.concepts.length.toString()
            ])
          }
          onClick={(row) => { }}
        />
        <span className={css(styles.vs)}>VS</span>
        <List
          columns={['Язык программирования', 'Категории', 'Методы', 'Число примеров']}
          rows={
            languages.map(language => [
              language.name,
              markupMeta.calculateCategoryVector(language.concepts),
              markupMeta.calculateMethodVector(language.concepts),
              language.concepts.length.toString()
            ])
          }
          onClick={(row) => { }}
        />
      </div>

      <Matrix
        language={languages[0]}
        onCellClick={() => { }}
      />

      {
        <List
          columns={[`Понятие ${languages[0].name}`, `Понятие ${languages[1].name}`, `Примеры ${languages[0].name}`, `Примеры ${languages[1].name}`]}
          rows={
            conceptA.map((concept, index) => [
              concept.name,
              conceptB[index] && conceptB[index].name,
              concept.examples.length.toString(),
              conceptB[index] && conceptB[index].examples.length.toString(),
            ])
          }
          onClick={(row) => frameLord.openConceptFrame(languages[0].concepts.find(concept => concept.name === row[0]))}
        />
      }

    </Fragment>
  );
}

export default ComparisonComponent;
