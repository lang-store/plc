import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  main: {
    textAlign: 'center',
    paddingBottom: '30px',
  },
  tbl: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleRow: {
    background: 'rgb(66, 103, 178)',
    color: 'rgb(242,242,242)'
  },
  row: {
    display: 'flex',
    minHeight: '50px',
  },
  secondRow: {
    background: 'rgb(242,242,242)',
  },
  hover: {
    ':hover': {
      backgroundColor: 'rgb(221,221,221)',
    },
  },
  cell: {
    display: 'flex',
    flex: 4,
    border: '1px solid rgb(41, 72, 125)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Impact',
    padding: '10px',
    fontSize: '30px',
    color: 'rgb(66, 103, 178)',
  },
});


interface Props {
  languageA: {
    name: string;
    row: string[][];
  };
  languageB: {
    name: string;
    row: string[][];
  };
  title: string;
}

const COLUMN_NAMES = ['Язык программирования', 'Константы (V)', 'Вычисления (E)', 'Память (M)', 'Управление (C)', 'Структуры (S)'];

function CompareRow({ languageA, languageB, title }: Props) {

  return (
    <div className={css(styles.main)}>
      <span className={css(styles.title)}>{title}</span>
      <div className={css(styles.tbl)}>
        <div className={css(styles.row, styles.titleRow)}>
          {
            COLUMN_NAMES.map(column => <div className={css(styles.cell)}>{column}</div>)
          }
        </div>
        <div className={css(styles.row, styles.hover)}>
          <div className={css(styles.cell)}>{languageA.name}</div>
          {
            languageA.row.map(item => <div className={css(styles.cell)}>{item.join(', ')}</div>)
          }
        </div>
        <div className={css(styles.row, styles.secondRow, styles.hover)}>
          <div className={css(styles.cell)}>{languageB.name}</div>
          {
            languageB.row.map(item => <div className={css(styles.cell)}>{item.join(', ')}</div>)
          }
        </div>
      </div>
    </div>
  );
}

export default CompareRow;
