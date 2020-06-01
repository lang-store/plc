import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { InitMarkupFrame } from '../../../logic/frames';
import Card from '../../tools/card';
import ConceptBuilder from '../../init/concept-builder';
import List from '../../tools/list';
import Button from '../../tools/button';
import Add from '../../tools/add';
import { observer } from 'mobx-react-lite';
import { Language } from '../../../models/models';
import Matrix from '../../tools/matrix';
import { MarkupMeta } from '../../../logic/language/meta';

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
    textAlign: 'left',
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
  }
});

interface Props {
  frame: InitMarkupFrame;
  onSave: (language: Language) => void;
}

function Markup({ frame, onSave }: Props) {
  const { language } = frame;
  const { frameLord } = frame.dragonet;
  const markupMeta = new MarkupMeta();

  return (
    <div className={css(styles.info)}>
      <Card>
        <span className={css(styles.title)}>Разметка {language.name}</span>

        <table className={css(styles.table)}>
          <tbody>
            <tr>
              <th className={css(styles.name)}>Язык программирования</th>
              <th>
                <input defaultValue={language.name} className={css(styles.input)} onChange={(e) => frame.saveName(e.target.value)} />
              </th>
            </tr>
          </tbody>
        </table>

        <Matrix
          language={frame.language}
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
          onClick={(row) => frameLord.openConceptFrame(language.concepts.find(concept => concept.name === row[0]))}
        />

        {
          !frame.isRewrite && <div className={css(styles.compare, styles.action)}>
            <Button
              name={'Сохранить'}
              onClick={() => {
                onSave({ name: language.name, concepts: language.concepts });
                frameLord.removeLastFrame();
              }}
            />
            <Button name={'Отмена'} onClick={() => frameLord.removeLastFrame()} />
          </div>
        }
      </Card>

    </div>
  );
}

export default observer(Markup);
