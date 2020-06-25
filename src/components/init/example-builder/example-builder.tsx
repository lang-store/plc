import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Ok from '../../tools/ok';
import Cancel from '../../tools/cancel';
import { ConceptExample } from '../../../models/models';

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
  onOk: (concept: ConceptExample) => void;
  onCancel: () => void;
}


const ExampleBuilder = ({ onOk, onCancel }: Props) => {
  const [example, setExample] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <table className={css(styles.table)}>
      <tbody>
        <tr>
          <th className={css(styles.name, styles.th)}>Пример</th>
          <th className={css(styles.th)}>
            <textarea className={css(styles.input)} onChange={(e) => setExample(e.target.value)} />
          </th>
        </tr>
        <tr>
          <th className={css(styles.name, styles.th)}>Примечание</th>
          <th className={css(styles.th)}>
            <textarea className={css(styles.input)} onChange={(e) => setNotes(e.target.value)} />
          </th>
        </tr>

        <tr>
          <th className={css(styles.th)}>
            <Ok onClick={() => onOk({ example, notes })} />
          </th>
          <th className={css(styles.th)}>
            <Cancel onClick={onCancel} />
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default ExampleBuilder;
