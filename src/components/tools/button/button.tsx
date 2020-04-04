import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40px',
    background: 'rgb(255,255,255)',
    border: '2px solid rgb(41, 72, 125)',
    borderRadius: '10px',
    color: 'rgb(41, 72, 125)',
    margin: '10px',
    padding: '10px',
    transition: '0.4s',
    '-webkit-user-select': 'none',
    cursor: 'pointer',
    ':hover': {
      background: 'rgb(41, 72, 125)',
      border: '2px solid rgb(255,255,255)',
      color: 'rgb(255,255,255)',
    },
  },
});

interface Props {
  name: string;
  onClick: () => void;
}

const Button = ({ name, onClick }: Props) => <div onClick={onClick} className={css(styles.button)}>{name}</div>;
export default Button;
