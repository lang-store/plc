import React from 'react';
import { observer } from 'mobx-react-lite';
import { StyleSheet, css } from 'aphrodite';

import Header from '../header';
import { ConceptComponent, MarkupComponent, CompareComponent, InfoComponent } from '../frames/';
import Back from '../tools/back';

import { Frame, CompareFrame, InfoFrame, InitMarkupFrame, Concept, ConceptFrame } from '../../models/models';
import { Dragonet } from '../../logic/dragonet';

const styles = StyleSheet.create({
  main: {
  },
  body: {
    height: 'calc(100vh - 60px)',
    overflow: 'auto',
  },
});


interface Props {
  dragonet: Dragonet;
}

function Main({ dragonet }: Props) {

  const renderFrames = (frame: Frame) => {
    if (!frame) {
      return;
    }

    if (frame instanceof CompareFrame) {
      return <CompareComponent languages={frame.languages} />;
    }

    if (frame instanceof InfoFrame) {
      return <InfoComponent core={dragonet} languages={frame.languages} />;
    }

    if (frame instanceof InitMarkupFrame) {
      return <MarkupComponent frame={frame} onSave={() => { }} />;
    }

    if (frame instanceof ConceptFrame) {
      return <ConceptComponent core={dragonet} concept={frame.concept} />;
    }
  };

  return (
    <div className={css(styles.main)}>
      <Header onClick={() => dragonet.frameLord.goHome()} logo={`Programming Language Markup`} />
      {!dragonet.frameLord.isMinSize && <Back onClick={dragonet.frameLord.removeLastFrame} />}

      <div className={css(styles.body)}>
        {
          renderFrames(dragonet.frameLord.frames.slice(-1)[0])
        }
      </div>
    </div>
  );
}

export default observer(Main);
