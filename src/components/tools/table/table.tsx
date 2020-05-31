import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  main: {
    textAlign: 'center',
    paddingBottom: '30px',
  },
  container: {
    width: '300px',
    height: '300px',
    overflow: 'auto',
    border: '2px solid rgb(41, 72, 125)',
  },
  item: {
    padding: '10px',
    border: '1px solid rgb(139,157,195)',
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
});

interface Props {
  title?: string;
  items: string[];
  onClick: () => void;
}

const Table = ({ items, title, onClick }: Props) =>
  <div className={css(styles.main)}>
    {title && <span className={css(styles.title)}>{title}</span>}
    <div className={css(styles.container)}>
      {
        items
          .map(item =>
            <div className={css(styles.item)}>
              {item}
            </div>
          )
      }
    </div>
  </div>
  ;
export default Table;
