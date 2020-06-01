import React, { useState, useMemo } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from '../header';
import { ConceptComponent, MarkupComponent, CompareComponent, InfoComponent } from '../frames/';
import Back from '../tools/back';


import { Frame, CompareFrame, InfoFrame, Core, InitMarkupFrame, Concept, ConceptFrame } from '../../models/models';
import { TEST_LANGUAGES } from '../../models/metadata';

const styles = StyleSheet.create({
  main: {
  },
  body: {
    height: 'calc(100vh - 60px)',
    overflow: 'auto',
  },
});

const MIN_FRAMES_LENGTH = 1;

function Main() {
  const [frames, setFrames] = useState<Frame[]>([new InfoFrame(TEST_LANGUAGES), new InitMarkupFrame()]);
  const addFrame = (frame: Frame) => setFrames([...frames, frame]);


  const removeLastFrame = () => {
    const newFrames = [...frames];
    newFrames.pop();
    setFrames(newFrames);
  };

  const core: Core = useMemo(() => {
    return {
      showCompareLanguagesFrame: () => addFrame(new CompareFrame(TEST_LANGUAGES)),
      showInitMarkupFrame: () => addFrame(new InitMarkupFrame()),
      showConceptFrame: (concept: Concept) => addFrame(new ConceptFrame(concept)),
      removeLastFrame,
    };
  }, []);


  const renderFrames = (frame: Frame) => {
    if (!frame) {
      return;
    }

    if (frame instanceof CompareFrame) {
      return <CompareComponent languages={frame.languages} />;
    }

    if (frame instanceof InfoFrame) {
      return <InfoComponent core={core} languages={frame.languages} />;
    }

    if (frame instanceof InitMarkupFrame) {
      return <MarkupComponent onSave={() => { }} core={core} />;
    }


    if (frame instanceof ConceptFrame) {
      return <ConceptComponent concept={frame.concept} core={core} />;
    }
  };

  return (
    <div className={css(styles.main)}>
      <Header onClick={() => setFrames([frames[0]])} logo={`Programming Language Markup`} />
      {frames.length > MIN_FRAMES_LENGTH && <Back onClick={removeLastFrame} />}

      <div className={css(styles.body)}>
        {
          renderFrames(frames.slice(-1)[0])
        }
      </div>
    </div>
  );
}

export default Main;
