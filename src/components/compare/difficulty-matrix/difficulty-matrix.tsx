import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { JsonStory } from '../../../models/models';


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
  languageA: JsonStory;
  languageB: JsonStory;
}


const COLUMN_NAMES = ['', 'V', 'E', 'M', 'C', 'S'];

const ROWS = {
  'core': 'К',
  'expansion': 'Р',
  'limit': 'В',
  'union': 'U',
};

function DifficultyMatrix({ languageA, languageB }: Props) {
  const langs = [languageA, languageB];

  const compareAndGiveColor = (key: string, columnIndex: number, langIndex: number, length: number) => {
    const item = langs[(langIndex + 1) % langs.length].data[key][columnIndex];
    if (length > item.length) {
      return { background: 'rgb(0, 153, 116)', opacity: '0.7', };
    }
    if (length < item.length) {
      return { background: 'rgb(255, 102, 102)', opacity: '0.7', };
    }

    return {};
  };

  return (
    <div className={css(styles.main)}>
      {
        langs.map((language, langIndex) =>
          <div className={css(styles.container)}>
            <span className={css(styles.title)}>{language.name}</span>
            <div className={css(styles.tbl)}>
              <div className={css(styles.row, styles.titleRow)}>
                {
                  COLUMN_NAMES.map(column => <div className={css(styles.cell)}>{column}</div>)
                }
              </div>
              {
                Object.entries(ROWS).map(
                  ([key, value]) =>
                    <div className={css(styles.row)}>
                      <div className={css(styles.cell, styles.titleRow)}>{value}</div>
                      {
                        language.data[key].map((item, columnIndex) =>
                          <div
                            style={compareAndGiveColor(key, columnIndex, langIndex, item.length)}
                            className={css(styles.cell)}
                          >
                            {item.length}
                          </div>
                        )
                      }
                    </div>
                )
              }
            </div>
          </div>
        )
      }
    </div>
  );
}

export default DifficultyMatrix;
