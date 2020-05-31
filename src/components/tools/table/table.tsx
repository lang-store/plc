import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    width: '700px',
    height: '500px',
    overflow: 'auto',
    border: '1px solid rgb(41, 72, 125)',
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

});

interface Props {
  items: string[];
  onClick: () => void;
}

const Table = ({ items, onClick }: Props) =>
  <div className={css(styles.container)}>
    {
      items
        .map(item =>
          <div className={css(styles.item)}>
            {item}
          </div>
        )
    }
  </div>;
export default Table;
