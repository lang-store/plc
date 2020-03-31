import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { JsonStory } from '../../models/models';


const styles = StyleSheet.create({
  main: {
    width: '600px',
    textAlign: 'center',
    paddingBottom: '30px',
    overflow: 'auto',
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
  language: JsonStory;
}


const COLUMN_NAMES = ['', 'V', 'E', 'M', 'C', 'S'];

const ROWS = {
  'core': 'К',
  'expansion': 'Р',
  'limit': 'В',
  'union': 'U',
};

function DifficultyMatrix({ language }: Props) {

  return (
    <div className={css(styles.main)}>
      <span className={css(styles.title)}>{language.name}</span>
      <div className={css(styles.tbl)}>
        <div className={css(styles.row, styles.titleRow)}>
          {
            COLUMN_NAMES.map(column => <div className={css(styles.cell)}>{column}</div>)
          }
        </div>
        {
          Object.entries(ROWS).map(
            ([key, value]) =>
              <div className={css(styles.row)}>
                <div className={css(styles.cell)}>{value}</div>
                {
                  language.data[key].map(item => <div className={css(styles.cell)}>{item.length}</div>)
                }
              </div>
          )
        }
      </div>
    </div>
  );
}

export default DifficultyMatrix;
