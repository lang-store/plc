import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  main: {
    textAlign: 'center',
    padding: '30px',
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
    ':hover': {
      background: 'rgb(41, 72, 125)',
      color: 'rgb(255,255,255)',
    },
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
    textAlign: 'center',
    padding: '4px',
    fontSize: '16px',
    color: 'rgb(66, 103, 178)',
  },
  table: {
    margin: '0 auto',
    width: '100%',
  },
  scroll: {
    maxHeight: '200px',
    overflow: 'auto',
    borderRadius: '5px',
    border: '1px solid rgb(41, 72, 125)',
  }
});

interface Props {
  columns: string[];
  rows: string[][];
  onClick: () => void;
}

const List = ({ columns, rows: items, onClick }: Props) =>
  <div className={css(styles.main)}>
    <div  className={css(styles.scroll)}>
      <table className={css(styles.table)}>
        <thead>
          <tr>
            {
              columns.map(column => <th className={css(styles.name, styles.th)} >{column}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            items.map(row =>
              <tr  className={css(styles.item)}>
                {
                  row.map(item => <td>{item}</td>)
                }
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  </div>
  ;
export default List;
