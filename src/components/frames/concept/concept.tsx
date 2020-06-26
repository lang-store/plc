import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { observer } from 'mobx-react-lite';

import { Concept } from '../../../models/models';
import Card from '../../tools/card';
import List from '../../tools/list';
import Add from '../../tools/add';
import ExampleBuilder from '../../init/example-builder';
import { ConceptFrame } from '../../../logic/frames';
import Button from '../../tools/button';

import CodeTable from '../../tools/code-table';

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
}

function ConceptPage({ frame }: Props) {
  const { langName } = frame;
  const { blizzard, frameLord } = frame.dragonet;

  return (
    <div className={css(styles.info)}>
      <Card>
        <span className={css(styles.title)}>Понятие</span>

        <table className={css(styles.table)}>
          <tbody>
            <tr>
              <th className={css(styles.name)}>Наименование</th>
              <th>
                <input
                  defaultValue={frame.concept.name}
                  className={css(styles.input)}
                  onChange={(e) => frame.saveLocalName(e.target.value)}
                  onBlur={frame.saveConcept}
                />
              </th>
            </tr>
          </tbody>
        </table>

        {
          frame.showExampleConstructor &&
          <div className={css(styles.example)}>
            <ExampleBuilder
              langName={langName}
              conceptExample={{ notes: '', example: '' }}
              onOk={(example) => frame.doneExample(example)}
              onCancel={frame.cancelExample}
            />
          </div>
        }

        {
          frame.showExampleEditor &&
          <div className={css(styles.example)}>
            <ExampleBuilder
              langName={langName}
              conceptExample={frame.concept.examples[frame.editId]}
              onOk={async (example) => {
                await frame.updateExample(example);
                await frame.refreshConcept();
              }}
              onCancel={frame.cancelEditor}
              onDelete={async () => {
                frame.cancelEditor();
                const example = frame.concept.examples[frame.editId];
                await frame.deleteExample(example.id);
                await frame.refreshConcept();
              }}
            />
          </div>
        }

        {
          !frame.showConstruct &&
          <div className={css(styles.compare)}>
            <Add onClick={frame.openExampleConstructor} />
            <span className={css(styles.name)}>Добавить пример</span>
          </div>
        }

        <CodeTable
          langName={langName}
          examples={frame.concept.examples}
          onClick={(row) => { }}
          onDoubleClick={frame.openExampleEditor}
        />

        <div className={css(styles.compare, styles.action)}>
          <Button
            name={'Удалить понятие'}
            onClick={async () => {
              await blizzard.doInBackground(frame.deleteConcept)();
              frameLord.removeLastFrame();
            }}
          />
        </div>
      </Card>

    </div>
  );
}

export default observer(ConceptPage);
