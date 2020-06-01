import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { LanguageStrategy } from '../../../logic/language';
import { observer } from 'mobx-react-lite';
import { CATEGORYS_OF_SEMANTIC_SYSTEMS, METHODS_OF_IMPLEMENTATION_SUPPORT } from '../../../models/metadata';


const styles = StyleSheet.create({
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
  },
  container: {
    width: '600px',
    textAlign: 'center',
    padding: '0px 30px 30px 30px',
    overflow: 'auto',
  },
  tbl: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleRow: {
    background: 'rgb(66, 103, 178)',
    color: 'rgb(242,242,242)'
  },
  row: {
    display: 'flex',
    minHeight: '50px',
  },
  secondRow: {
    background: 'rgb(242,242,242)',
  },
  hover: {
    ':hover': {
      backgroundColor: 'rgb(221,221,221)',
    },
  },
  cell: {
    display: 'flex',
    flex: 4,
    border: '1px solid rgb(41, 72, 125)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Impact',
    padding: '10px',
    fontSize: '30px',
    color: 'rgb(66, 103, 178)',
  },
});

interface Props {
  languageStrategy: LanguageStrategy;
}

function Matrix({ languageStrategy }: Props) {

  return (
    <div className={css(styles.main)}>
      <div className={css(styles.container)}>

        <span className={css(styles.title)}>{languageStrategy.language.name}</span>
        <div className={css(styles.tbl)}>

          <div className={css(styles.row, styles.titleRow)}>
            {
              METHODS_OF_IMPLEMENTATION_SUPPORT.map(column => <div className={css(styles.cell)}>{`${column.name} (${column.code})`}</div>)
            }
          </div>

          {
            CATEGORYS_OF_SEMANTIC_SYSTEMS.map(
              category =>
                <div className={css(styles.row)}>
                  <div className={css(styles.cell, styles.titleRow)}>{`${category.name} (${category.code})`}</div>
                  {
                    METHODS_OF_IMPLEMENTATION_SUPPORT.map(method =>
                      <div
                        className={css(styles.cell)}
                      >
                        {languageStrategy.getConceptsByCode(category.code, method.code).length}
                      </div>
                    )
                  }
                </div>
            )
          }

        </div>
      </div>
    </div>
  );
}

export default observer(Matrix);
