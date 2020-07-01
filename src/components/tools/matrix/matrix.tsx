import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { observer } from 'mobx-react-lite';
import { MarkupMeta } from '../../../logic/language/meta';
import { Language } from '../../../models/models';


const styles = StyleSheet.create({
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
  },
  container: {
    width: '800px',
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
    cursor: 'pointer',
  },
  title: {
    fontFamily: 'Impact',
    padding: '10px',
    fontSize: '30px',
    color: 'rgb(66, 103, 178)',
  },
});
interface Cell {
  categoryCode: string;
  methodCode: string;
}

interface Props {
  languages: Language[];
  selectedCells: Cell[];
  onCellClick: (categoryCode: string, methodCode: string) => void;
  highlightByClick?: boolean;
}

function Matrix({ languages, selectedCells, highlightByClick, onCellClick }: Props) {
  const markupMeta = new MarkupMeta();

  const selectedColor = (category: string, method: string) => {
    if (selectedCells.find(cell => cell.categoryCode === category && cell.methodCode === method)) {
      return { background: 'rgb(0, 153, 116)', opacity: '0.7', };
    }

    return {};
  };

  const getConceptsLengthByCode = (category: string, method: string) => {
    return languages
      .map(language => language && language.concepts.filter(concept => concept.category === category && concept.method === method).length)
      .join('/');
  };

  return (
    <div className={css(styles.main)}>
      <div className={css(styles.container)}>

        <span className={css(styles.title)}>{languages.map(language => language && language.name).join('/')}</span>
        <div className={css(styles.tbl)}>

          <div className={css(styles.row, styles.titleRow)}>
            {
              [undefined, ...markupMeta.methods].map((column, index) =>
                <div key={index} className={css(styles.cell)}>{column && markupMeta.getMethodNameByCode(column.code)}</div>
              )
            }
          </div>

          {
            markupMeta.categorys.map(
              (category, index) =>
                <div key={`${category.code}-${index}`} className={css(styles.row)}>
                  <div className={css(styles.cell, styles.titleRow)}>{markupMeta.getCategoryNameByCode(category.code)}</div>
                  {
                    markupMeta.methods.map((method, rowIndex) =>
                      <div
                        key={`${method.code}-${index}`}
                        className={css(styles.cell)}
                        style={selectedColor(category.code, method.code)}
                        onClick={() => onCellClick(category.code, method.code)}
                      >
                        {getConceptsLengthByCode(category.code, method.code)}
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
