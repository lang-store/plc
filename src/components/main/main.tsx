import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from '../header';
import CompareLanguages from '../compare/compare-languages';

import { Frame, CompareFrame, InfoFrame } from '../../models/models';
import { TEST_LANGUAGES } from '../../models/metadata';
import Info from '../info';

const styles = StyleSheet.create({
  main: {
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

function Main() {
  const [frames, setFrames] = useState<Frame[]>([new InfoFrame(TEST_LANGUAGES)]);

  return (
    <div className={css(styles.main)}>
      <Header logo={`Programming Languages Compare`} />
      {/* <CompareLanguages languages={TEST_LANGUAGES} /> */}
      {
        renderFrames(frames.slice(-1)[0])
      }
    </div>
  );
}

export default Main;
