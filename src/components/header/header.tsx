import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    height: '43px',
    border: '1px solid rgb(41, 72, 125)',
    background: 'rgb(66, 103, 178)',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    fontFamily: 'Impact',
    height: '24px',
    margin: '10px',
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
  onClick: () => void;
}

function Header({ logo, onClick }: Props) {

  return (
    <div className={css(styles.container)}>
      <div onClick={onClick} className={css(styles.logo)}>{logo}</div>
    </div>
  );
}

export default Header;
