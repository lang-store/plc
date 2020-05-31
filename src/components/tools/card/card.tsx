import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    width: '700px',
    height: '600px',
    borderRadius: '5px',
    boxShadow: '0.2em 0em 15px rgba(122,122,122,0.7)',
  },
});

interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) =>
  <div className={css(styles.container)}>
    {children}
  </div>;

export default Card;
