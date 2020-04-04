import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from '../header';
import CompareLanguages from '../compare/compare-languages';

import { Frame, CompareFrame, InfoFrame } from '../../models/models';
import { TEST_LANGUAGES } from '../../models/metadata';
import Info from '../about/info';
import Back from '../tools/back';

const styles = StyleSheet.create({
  main: {
  },
  body: {
    height: 'calc(100vh - 45px)',
    overflow: 'auto',
  },
});

const renderFrames = (frame: Frame) => {
  if (!frame) {
    return;
  }

  if (frame instanceof CompareFrame) {
    return <CompareLanguages languages={frame.languages} />;
  }

  if (frame instanceof InfoFrame) {
    return <Info languages={frame.languages} />;
  }
};

const MIN_FRAMES_LENGTH = 1;

function Main() {
  const [frames, setFrames] = useState<Frame[]>([new InfoFrame(TEST_LANGUAGES)]);

  const removeLastFrame = () => {
    const newFrames = [...frames];
    newFrames.pop();
    setFrames(newFrames);
  };

  return (
    <div className={css(styles.main)}>
      <Header onClick={() => setFrames([frames[0]])} logo={`Programming Languages Compare`} />
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
