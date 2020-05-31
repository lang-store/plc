import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Ok from '../../tools/ok';
import Cancel from '../../tools/cancel';

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
  onOk: () => void;
  onCancel: () => void;
}

const CATEGORYS_OF_SEMANTIC_SYSTEMS = [
  'Вычисления (E)',
  'Укрупнения (M)',
  'Правильность (C)',
  'Контекст (S)',
];

const METHODS_OF_IMPLEMENTATION_SUPPORT = [
  'Значения (V)',
  'Выражения (E)',
  'Память (M)',
  'Контроль (C)',
  'Структуры (S)',
];

const Concept = ({ onOk, onCancel }: Props) =>
  <table className={css(styles.table)}>
    <tr>
      <th className={css(styles.name, styles.th)}>Понятие</th>
      <th className={css(styles.th)}>
        <input className={css(styles.input)} />
      </th>
    </tr>
    <tr>
      <th className={css(styles.name, styles.th)}>Категория семантических систем</th>
      <th className={css(styles.th)}>
        <select className={css(styles.input)}>
          {
            CATEGORYS_OF_SEMANTIC_SYSTEMS.map(ctg => <option value={ctg}>{ctg}</option>)
          }
        </select>
      </th>
    </tr>
    <tr>
      <th className={css(styles.name, styles.th)}>Метод реализационной поддержки</th>
      <th className={css(styles.th)}>
        <select className={css(styles.input)}>
          {
            METHODS_OF_IMPLEMENTATION_SUPPORT.map(mthd => <option value={mthd}>{mthd}</option>)
          }
        </select>
      </th>
    </tr>

    <tr>
      <th className={css(styles.th)}>
        <Ok onClick={onOk} />
      </th>
      <th className={css(styles.th)}>
        <Cancel onClick={onCancel} />
      </th>
    </tr>
  </table>;

export default Concept;
