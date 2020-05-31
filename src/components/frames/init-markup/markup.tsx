import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Core, Concept } from '../../../models/models';
import Card from '../../tools/card';
import Ok from '../../tools/ok';
import Cancel from '../../tools/cancel';
import ConceptBuilder from '../../init/concept';
import List from '../../tools/list';
import Button from '../../tools/button';
import Add from '../../tools/add';

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
  concept: {
    padding: '30px',
  },
  action: {
    justifyContent: 'center',
  }
});

interface Props {
  core: Core;
  onSave: () => void;
}

function Markup({ core }: Props) {
  const [showInitConcept, setShowConcept] = useState(false);
  const [concepts, setConcepts] = useState<Concept[]>([{
    name: 'type sym = (a, b, . . . )',
    category: 'Вычисления (E)',
    method: 'Значения (V)',
    examples: [],
  }]);

  return (
    <div className={css(styles.info)}>
      <Card>
        <span className={css(styles.title)}>Разметка</span>

        <table className={css(styles.table)}>
          <tr>
            <th className={css(styles.name)}>Язык программирования</th>
            <th>
              <input className={css(styles.input)} />
            </th>
          </tr>
        </table>

        {
          showInitConcept &&
          <div className={css(styles.concept)}>
            <ConceptBuilder onOk={(concept) => { setConcepts([...concepts, concept]); setShowConcept(false); }} onCancel={() => setShowConcept(false)} />
          </div>
        }

        {
          !showInitConcept &&
          <div className={css(styles.compare)}>
            <Add onClick={() => setShowConcept(true)} />
            <span className={css(styles.name)}>Добавить понятие</span>
          </div>
        }

        <List
          columns={['Понятие', 'Категория', 'Метод', 'Примеры']}
          rows={
            concepts.map(concept => [concept.name, concept.category, concept.method, concept.examples.length ? '***' : ''])
          }
          onClick={() => { }}
        />

        <div className={css(styles.compare, styles.action)}>
          <Button name={'Сохранить'} onClick={() => { }} />
          <Button name={'Отмена'} onClick={() => core.removeLastFrame()} />
        </div>
      </Card>

    </div>
  );
}

export default Markup;
