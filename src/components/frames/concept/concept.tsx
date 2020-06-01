import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Core, Concept } from '../../../models/models';
import Card from '../../tools/card';
import Ok from '../../tools/ok';
import Cancel from '../../tools/cancel';
import ConceptBuilder from '../../init/concept-builder';
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
  concept: Concept;
}

function ConceptPage({ core, concept }: Props) {
  const [showAddExample, setShowAddExample] = useState(false);
  const [examples, setExamples] = useState(concept.examples);

  return (
    <div className={css(styles.info)}>
      <Card>
        <span className={css(styles.title)}>Понятие</span>

        <table className={css(styles.table)}>
          <tbody>
            <tr>
              <th className={css(styles.name)}>Наименование</th>
              <th>
                <input defaultValue={concept.name} className={css(styles.input)} />
              </th>
            </tr>
          </tbody>
        </table>

        {
          showAddExample &&
          <div className={css(styles.concept)}>
            {/* <ConceptBuilder onOk={(concept) => { setConcepts([...concepts, concept]); setShowConcept(false); }} onCancel={() => setShowConcept(false)} /> */}
          </div>
        }

        {
          !showAddExample &&
          <div className={css(styles.compare)}>
            <Add onClick={() => setShowAddExample(true)} />
            <span className={css(styles.name)}>Добавить пример</span>
          </div>
        }

        {/* <List
          columns={['Понятие', 'Категория', 'Метод', 'Примеры']}
          concepts={concepts}
          onClick={(concept) => core.showConceptFrame(concept)}
        /> */}
      </Card>

    </div>
  );
}

export default ConceptPage;
