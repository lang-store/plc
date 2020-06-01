import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Concept } from '../../../models/models';
import Card from '../../tools/card';
import List from '../../tools/list';
import Add from '../../tools/add';
import ExampleBuilder from '../../init/example-builder';
import { ConceptFrame } from '../../../logic/frames';
import { observer } from 'mobx-react-lite';

const styles = StyleSheet.create({
  compare: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 10px 10px 30px',
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
  name: {
    textAlign: 'left',
    padding: '4px',
    fontSize: '16px',
    color: 'rgb(66, 103, 178)',
  },
  table: {
    margin: '0 auto',
    width: '90%',
    padding: '15px 15px 20px 15px',
  },
  input: {
    textAlign: 'center',
    width: '250px',
    minHeight: '30px',
    padding: '0',
    borderRadius: '5px',
    border: '1px solid rgb(66, 103, 178)'
  },
  example: {
    padding: '30px',
  },
  action: {
    justifyContent: 'center',
  }
});

interface Props {
  frame: ConceptFrame;
  concept: Concept;
}

function ConceptPage({ frame, concept }: Props) {

  return (
    <div className={css(styles.info)}>
      <Card>
        <span className={css(styles.title)}>Понятие</span>

        <table className={css(styles.table)}>
          <tbody>
            <tr>
              <th className={css(styles.name)}>Наименование</th>
              <th>
                <input defaultValue={concept.name} className={css(styles.input)} onChange={(e) => frame.saveName(e.target.value)} />
              </th>
            </tr>
          </tbody>
        </table>

        {
          frame.showExampleConstructor &&
          <div className={css(styles.example)}>
            <ExampleBuilder onOk={(example) => frame.doneExample(example)} onCancel={frame.cancelExample} />
          </div>
        }

        {
          !frame.showExampleConstructor &&
          <div className={css(styles.compare)}>
            <Add onClick={frame.openExampleConstructor} />
            <span className={css(styles.name)}>Добавить пример</span>
          </div>
        }

        <List
          columns={['Пример', 'Примечание']}
          rows={
            frame.concept.examples.map(example => [example.example, example.notes])
          }
          onClick={(row) => { }}
        />
      </Card>

    </div>
  );
}

export default observer(ConceptPage);
