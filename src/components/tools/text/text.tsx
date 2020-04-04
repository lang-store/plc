import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  text: {
    padding: '10px',
    margin: '10px',
    width: '70vw',
    color: 'rgb(41, 72, 125)',
  },
});

interface Props {
  text: string;
}

const Text = ({ text }: Props) => <span className={css(styles.text)}>{text}</span>;
export default Text;
