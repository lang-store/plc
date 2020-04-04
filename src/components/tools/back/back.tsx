import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  back: {
    cursor: 'pointer',
    position: 'fixed',
    top: '70px',
    left: '50px',
  },
});

interface Props {
  onClick: () => void;
}

const Back = ({ onClick }: Props) =>
  <svg
    width={'70px'}
    viewBox={'0 0 512 512'}
    onClick={onClick}
    className={css(styles.back)}
  >
    <g>
      <path fill={'rgb(66, 103, 178)'} d={`M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,490.667
				C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
				z`} />
      <path fill={'rgb(66, 103, 178)'} d={`M306.208,131.125c-4.167-4.167-10.917-4.167-15.083,0L173.792,248.458c-4.167,4.167-4.167,10.917,0,15.083
				l117.333,117.333c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125c4.167-4.167,4.167-10.917,0-15.083
				L196.417,256l109.792-109.792C310.375,142.042,310.375,135.292,306.208,131.125z`} />
    </g>
  </svg>;
export default Back;