import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  main: {
    textAlign: 'center',
    padding: '0px 30px 30px 30px',
  },
  container: {
    width: '300px',
    height: '300px',
    overflow: 'auto',
    border: '2px solid rgb(41, 72, 125)',
  },
  item: {
    cursor: 'pointer',
    transition: '0.5s',
  },
  title: {
    fontFamily: 'Impact',
    padding: '10px',
    fontSize: '20px',
    color: 'rgb(66, 103, 178)',
  },
  th: {
  },
  name: {
    padding: '4px',
    fontSize: '16px',
    color: 'rgb(66, 103, 178)',
  },
  table: {
    margin: '0 auto',
    width: '100%',
  },
  scroll: {
    overflow: 'auto',
    borderRadius: '5px',
    border: '1px solid rgb(41, 72, 125)',
  },
  td: {
    textAlign: 'left',
    padding: '14px',
    whiteSpace: 'pre',
  },
  text: {
    display: 'inline-block',
  },
});

interface Props {
  columns: string[];
  rows: string[][];
  selectedRowId: number;
  onClick: (id: number) => void;
}

const SelectedTable = ({ columns, rows: items, onClick, selectedRowId }: Props) => {

  const getSeletedStyle = (id: number) => {
    if (id === selectedRowId) {
      return {
        background: 'rgb(41, 72, 125)',
        color: 'rgb(255,255,255)',
      };
    }
  };

  return <div className={css(styles.main)}>
    <div className={css(styles.scroll)}>
      <table className={css(styles.table)}>
        <thead>
          <tr>
            {
              columns.map((column, index) => <th key={index} className={css(styles.name, styles.th)}>{column}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            items.map((row, index) =>
              <tr
                key={index}
                onClick={() => onClick(index)}
                className={css(styles.item)}
                style={getSeletedStyle(index)}
              >
                {
                  row.map((item, id) => <td className={css(styles.td)} key={`${index}-${id}`}>
                    <div className={css(styles.text)} >
                      {item}
                    </div>
                  </td>)
                }
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  </div>;
}

export default SelectedTable;
