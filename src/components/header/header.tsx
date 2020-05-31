import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 10000,
    height: '60px',
    background: 'rgb(255, 255, 255)',
    boxShadow: '0.2em 0.2em 5px rgba(122,122,122,0.5)',
  },
  compare: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'Impact',
    height: '24px',
    fontSize: 'larger',
    cursor: 'pointer',
    color: 'rgb(66, 103, 178)',
  },
  image: {
    padding: '5px 10px 0px 20px',
    width: '50px',
    height: '50px',
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
      <div className={css(styles.compare)}>
        <img className={css(styles.image)} src={'../../../assets/icon1.png'} />
        <div onClick={onClick} className={css(styles.logo)}>{logo}</div>
      </div>
    </div>
  );
}

export default Header;
