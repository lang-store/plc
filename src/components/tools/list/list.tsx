import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Concept } from '../../../models/models';

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
  concepts: Concept[];
  onClick: (concept: Concept) => void;
}

const List = ({ columns, concepts, onClick }: Props) =>
  <div className={css(styles.main)}>
    <div className={css(styles.scroll)}>
      <table className={css(styles.table)}>
        <thead>
          <tr>
            {
              columns.map((column, index) => <th key={index} className={css(styles.name, styles.th)} >{column}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            concepts.map((concept, index) =>
              <tr key={index} onClick={() => onClick(concept)} className={css(styles.item)}>
                <td>{concept.name}</td>
                <td>{concept.category}</td>
                <td>{concept.method}</td>
                <td>{concept.examples.length ? '***' : ''}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  </div>
  ;
export default List;
