import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    border: '1px solid rgb(41, 72, 125)',
    background: 'rgb(66, 103, 178)',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    fontFamily: 'Impact',
    height: '24px',
    margin: '4px',
    paddingLeft: '5vh',
    fontSize: 'larger',
    cursor: 'pointer',
    color: 'rgb(255,255,255)',
  },
});

// programming languages compare
const LOGO = 'PLR';

interface Props {
  logo: string;
}

function Header({ logo }: Props) {

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.logo)}>{logo}</div>
    </div>
  );
}

export default Header;
