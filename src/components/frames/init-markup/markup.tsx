import React, { useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { observer } from 'mobx-react-lite';

import { InitMarkupFrame } from '../../../logic/frames';
import Card from '../../tools/card';
import ConceptBuilder from '../../init/concept-builder';
import List from '../../tools/list';
import Button from '../../tools/button';
import Add from '../../tools/add';
import { Language } from '../../../models/models';
import Matrix from '../../tools/matrix';
import { MarkupMeta } from '../../../logic/language/meta';
import Cancel from '../../tools/cancel';
import { MATRIX_EXPLANATION } from '../../../models/metadata';

const styles = StyleSheet.create({
  compare: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 10px 10px 30px',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
  },
  title: {
    padding: '10px',
    fontSize: '30px',
    color: 'rgb(66, 103, 178)',
  },
  name: {
    textAlign: 'right',
    padding: '4px',
    fontSize: '16px',
    color: 'rgb(66, 103, 178)',
  },
  table: {
    margin: '0 auto',
    width: '90%',
    padding: '15px 15px 20px 15px',
  },
  input: {
    textAlign: 'center',
    width: '250px',
    minHeight: '30px',
    padding: '0',
    borderRadius: '5px',
    border: '1px solid rgb(66, 103, 178)'
  },
  concept: {
    padding: '30px',
  },
  action: {
    justifyContent: 'center',
  },
  item: {
    width: '100px',
    wordWrap: 'break-word',
    transition: '0.5s',
    ':hover': {
      background: 'rgb(41, 72, 125)',
      color: 'rgb(255,255,255)',
    },
  },
  td: {
    textAlign: 'left',
    padding: '14px',
  },
  th: {
    textAlign: 'center',
    padding: '4px',
    fontSize: '16px',
    color: 'rgb(66, 103, 178)',
  },
});

interface Props {
  frame: InitMarkupFrame;
  onSave: (language: Language) => void;
}

function Markup({ frame, onSave }: Props) {
  const { language, dragonet } = frame;
  const { frameLord, blizzard } = dragonet;
  const markupMeta = new MarkupMeta();

  useEffect(() => {
    blizzard.doInBackground(frame.refreshLanguage)();
  }, []);

  return (
    <div className={css(styles.info)}>
      <Card>
        <span className={css(styles.title)}>Разметка {language.name}</span>

        <table className={css(styles.table)}>
          <tbody>
            <tr>
              <th className={css(styles.name)}>Язык программирования</th>
              <th>
                <input
                  defaultValue={language.name}
                  className={css(styles.input)}
                  onChange={(e) => frame.saveLocalName(e.target.value)}
                  onBlur={frame.updateLanguage}
                />
              </th>
            </tr>
          </tbody>
        </table>
        {
          !frame.showExplanation ?
            <div className={css(styles.compare)}>
              <Add onClick={frame.showExplanationList} />
              <span className={css(styles.name)}>Открыть памятку</span>
            </div>
            :
            <div className={css(styles.compare)}>
              <Cancel onClick={frame.hideExplanationList} />
              <span className={css(styles.name)}>Закрыть памятку</span>
            </div>
        }

        {
          frame.showExplanation &&
          <table className={css(styles.table)}>
            <thead>
              <tr>
                <th className={css(styles.th)}>№ позиции</th>
                <th className={css(styles.th)}>Пояснение</th>
              </tr>
            </thead>
            <tbody>
              {
                MATRIX_EXPLANATION.map((exp, index) =>
                  <tr
                    key={index}
                    className={css(styles.item)}
                  >
                    <td className={css(styles.td)}>
                      {exp.code}
                    </td>
                    <td className={css(styles.td)}>
                      {exp.explanation}
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        }

        <Matrix
          languages={[frame.language]}
          selectedCells={frame.selectedCodes}
          onCellClick={frame.addSelectedCode}
          highlightByClick={true}
        />

        {
          frame.showInitConcept &&
          <div className={css(styles.concept)}>
            <ConceptBuilder onOk={frame.doneConcept} onCancel={frame.cancelConcept} />
          </div>
        }

        {
          !frame.showInitConcept &&
          <div className={css(styles.compare)}>
            <Add onClick={frame.openConceptConstructor} />
            <span className={css(styles.name)}>Добавить понятие</span>
          </div>
        }

        <List
          columns={['Понятие', 'Категория', 'Метод', 'Примеры']}
          rows={
            frame.concepts.map(concept => [
              concept.name,
              markupMeta.getCategoryNameByCode(concept.category),
              markupMeta.getMethodNameByCode(concept.method),
              concept.examples.length.toString()
            ])
          }
          onClick={(row) => frameLord.openConceptFrame(language.concepts.find(concept => concept.name === row[0]), language.name)}
        />

        {
          !frame.isRewrite ?
            <div className={css(styles.compare, styles.action)}>
              <Button
                name={'Сохранить'}
                onClick={async () => {
                  await blizzard.doInBackground(frame.saveNewLanguage)();
                  frameLord.removeLastFrame();
                }}
              />
              <Button name={'Отмена'} onClick={() => frameLord.removeLastFrame()} />
            </div>
            :
            <div className={css(styles.compare, styles.action)}>
              <Button
                name={'Удалить разметку'}
                onClick={async () => {
                  await blizzard.doInBackground(frame.deleteLanguage)();
                  frameLord.removeLastFrame();
                }}
              />
            </div>
        }
      </Card>

    </div>
  );
}

export default observer(Markup);
