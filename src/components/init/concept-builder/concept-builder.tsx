import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Ok from '../../tools/ok';
import Cancel from '../../tools/cancel';
import { Concept } from '../../../models/models';
import { MarkupMeta } from '../../../logic/language/meta';

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
    textAlign: 'center',
    width: '250px',
    minHeight: '30px',
    padding: '0',
    borderRadius: '5px',
    border: '1px solid rgb(66, 103, 178)'
  }
});

interface Props {
  onOk: (concept: Concept) => void;
  onCancel: () => void;
}

const ConceptBuilder = ({ onOk, onCancel }: Props) => {
  const markupMeta = new MarkupMeta();

  const [name, setName] = useState('');
  const [category, setCategory] = useState(markupMeta.categorys[0].code);
  const [method, setMethod] = useState(markupMeta.methods[0].code);

  return (
    <table className={css(styles.table)}>
      <tbody>
        <tr>
          <th className={css(styles.name, styles.th)}>Понятие</th>
          <th className={css(styles.th)}>
            <input className={css(styles.input)} onChange={(e) => setName(e.target.value)} />
          </th>
        </tr>
        <tr>
          <th className={css(styles.name, styles.th)}>Категория семантических систем</th>
          <th className={css(styles.th)}>
            <select className={css(styles.input)} onChange={(c) => setCategory(c.target.value)}>
              {
                markupMeta.categorys.map(ctg => <option key={ctg.code} value={ctg.code}>{markupMeta.getCategoryNameByCode(ctg.code)}</option>)
              }
            </select>
          </th>
        </tr>
        <tr>
          <th className={css(styles.name, styles.th)}>Метод реализационной поддержки</th>
          <th className={css(styles.th)}>
            <select className={css(styles.input)} onChange={(c) => setMethod(c.target.value)}>
              {
                markupMeta.methods.map(mthd => <option key={mthd.code} value={mthd.code}>{markupMeta.getMethodNameByCode(mthd.code)}</option>)
              }
            </select>
          </th>
        </tr>

        <tr>
          <th className={css(styles.th)}>
            <Ok onClick={() => onOk({ name, category: category, method: method, examples: [] })} />
          </th>
          <th className={css(styles.th)}>
            <Cancel onClick={onCancel} />
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default ConceptBuilder;
