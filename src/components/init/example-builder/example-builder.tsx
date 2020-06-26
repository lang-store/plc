import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Ok from '../../tools/ok';
import Cancel from '../../tools/cancel';
import { ConceptExample } from '../../../models/models';
import Button from '../../tools/button';

const styles = StyleSheet.create({
  th: {
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
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0.2em 0em 15px rgba(122,122,122,0.7)',
  },
  input: {
    minWidth: '250px',
    minHeight: '30px',
    padding: '0',
    borderRadius: '5px',
    border: '1px solid rgb(66, 103, 178)'
  }
});

interface Props {
  conceptExample: ConceptExample;
  onOk: (example: ConceptExample) => void;
  onCancel: () => void;
  onDelete?: () => void;
}


const ExampleBuilder = ({ conceptExample, onOk, onCancel, onDelete }: Props) => {
  const [example, setExample] = useState(conceptExample.example);
  const [notes, setNotes] = useState(conceptExample.notes);

  return (
    <table className={css(styles.table)}>
      <tbody>
        <tr>
          <th className={css(styles.name, styles.th)}>Пример</th>
          <th className={css(styles.th)}>
            <textarea
              defaultValue={example}
              className={css(styles.input)}
              onChange={(e) => setExample(e.target.value)}
            />
          </th>
        </tr>
        <tr>
          <th className={css(styles.name, styles.th)}>Примечание</th>
          <th className={css(styles.th)}>
            <textarea
              defaultValue={notes}
              className={css(styles.input)}
              onChange={(e) => setNotes(e.target.value)}
            />
          </th>
        </tr>

        <tr>
          <th className={css(styles.th)}>
            <Ok onClick={() => onOk({ id: conceptExample.id, example, notes, conceptId: conceptExample.conceptId })} />
          </th>
          <th className={css(styles.th)}>
            <Cancel onClick={onCancel} />
          </th>
          {
            conceptExample.id && <th className={css(styles.th)}>
              <Button
                name={'Удалить пример'}
                onClick={onDelete}
              />
            </th>
          }
        </tr>
      </tbody>
    </table>
  );
};

export default ExampleBuilder;
