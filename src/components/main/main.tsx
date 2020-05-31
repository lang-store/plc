import React, { useState, useMemo } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from '../header';
import CompareLanguages from '../frames/compare-languages';
import Info from '../frames/info';

import { Frame, CompareFrame, InfoFrame, Core, InitMarkupFrame } from '../../models/models';
import { TEST_LANGUAGES } from '../../models/metadata';
import Back from '../tools/back';
import Markup from '../frames/init-markup';

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

  const core: Core = useMemo(() => {
    return {
      showCompareLanguagesFrame: () => addFrame(new CompareFrame(TEST_LANGUAGES)),
      showInitMarkupFrame: () => addFrame(new InitMarkupFrame())
    };
  }, []);

  const removeLastFrame = () => {
    const newFrames = [...frames];
    newFrames.pop();
    setFrames(newFrames);
  };

  const renderFrames = (frame: Frame) => {
    if (!frame) {
      return;
    }

    if (frame instanceof CompareFrame) {
      return <CompareLanguages languages={frame.languages} />;
    }

    if (frame instanceof InfoFrame) {
      return <Info core={core} languages={frame.languages} />;
    }

    if (frame instanceof InitMarkupFrame) {
      return <Markup core={core} />;
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
