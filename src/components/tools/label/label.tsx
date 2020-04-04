import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  label: {
    padding: '10px',
    margin: '10px',
    fontSize: '30px',
    color: 'rgb(66, 103, 178)',
  },
});

interface Props {
  text: string;
}

const Label = ({ text }: Props) => <span className={css(styles.label)}>{text}</span>;
export default Label;
