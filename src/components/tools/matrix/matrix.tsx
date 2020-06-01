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
  rowIndex: number;
  columnIndex: number;
}

interface Props {
  language: Language;
  onCellClick: (categoryCode: string, methodCode: string) => void;
  highlightByClick?: boolean;
}

function Matrix({ language, highlightByClick, onCellClick }: Props) {
  const markupMeta = new MarkupMeta();
  const [selectedCells, setSelectedCells] = useState<Cell[]>([]);

  const selectedColor = (rowIndex: number, columnIndex: number) => {
    if (selectedCells.find(cell => cell.rowIndex === rowIndex && cell.columnIndex === columnIndex)) {
      return { background: 'rgb(0, 153, 116)', opacity: '0.7', };
    }

    return {};
  };

  const onClickCell = (rowIndex: number, columnIndex: number) => {
    if (!highlightByClick) {
      return;
    }

    if (selectedCells.some(cell => cell.rowIndex === rowIndex && cell.columnIndex === columnIndex)) {
      setSelectedCells([...selectedCells.filter(cell => !(cell.rowIndex === rowIndex && cell.columnIndex === columnIndex))]);
    } else {
      setSelectedCells([...selectedCells, { rowIndex, columnIndex }]);
    }
  };

  const getConceptsByCode = (category: string, method: string) => {
    return language.concepts.filter(concept => concept.category === category && concept.method === method);
  };

  return (
    <div className={css(styles.main)}>
      <div className={css(styles.container)}>

        <span className={css(styles.title)}>{language.name}</span>
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
                        style={selectedColor(rowIndex, index)}
                        onClick={() => {
                          onClickCell(rowIndex, index);
                          onCellClick(category.code, method.code);
                        }}
                      >
                        {getConceptsByCode(category.code, method.code).length}
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
