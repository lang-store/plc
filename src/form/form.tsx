import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    border: '1px solid rgb(41, 72, 125)',
    background: 'rgb(66, 103, 178)',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    height: '24px',
    margin: '4px',
    paddingLeft: '5vh',
    fontSize: 'larger',
    cursor: 'pointer',
    color: 'rgb(255,255,255)',
  },
});

class Form extends Component {

  render() {

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.logo)}>ЦФТ</div>
      </div>
    );
  }
}

export default Form;
