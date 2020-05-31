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
});

interface Props {
  title?: string;
}

const Card = ({ title }: Props) =>
  <div className={css(styles.main)}>
  </div>;

export default Card;
