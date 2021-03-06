import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const loadKeyframes = {
  '0%': {
    transform: 'rotate(0deg)',
    'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  },
  '50%': {
    transform: 'rotate(900deg)',
    'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  },
  '100%': {
    transform: 'rotate(1800deg)',
  }
};

const styles = StyleSheet.create({
  loader: {
    width: '50px',
    height: '50px',
    border: '5px solid rgba(255,255,255,.3)',
    borderRadius: '50%',
    borderTopColor: 'rgb(66, 103, 178)',
    animationName: [loadKeyframes],
    animationDuration: '3s',
    animationIterationCount: 'infinite',
  },
});

const Spinner = () => <div className={css(styles.loader)}></div>;
export default Spinner;
