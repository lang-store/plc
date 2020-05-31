import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Core } from '../../../models/models';
import Card from '../../tools/card';
import Ok from '../../tools/ok';
import Cancel from '../../tools/cancel';
import Concept from '../../init/concept';
import List from '../../tools/list';
import Button from '../../tools/button';

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
  }
});

interface Props {
  core: Core;
}

function Markup({ core }: Props) {

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

        {/* <Concept onOk={() => { }} onCancel={() => { }} /> */}
        <List
          columns={['Понятие', 'Категория', 'Метод', 'Примеры']}
          rows={[
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
            ['type sym = (a, b, . . . )', 'Вычисления (E)', 'Значения (V)', '***'],
          ]}
          onClick={() => { }}
        />
      </Card>
    </div>
  );
}

export default Markup;
