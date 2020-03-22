import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  container: {
    width: '300px',
    height: '300px',
    overflow: 'auto',
    border: '1px solid rgb(41, 72, 125)',
  },
  item: {
    border: '1px solid rgb(139,157,195)',
    padding: '5px',
    cursor: 'pointer',
    // ':hover': {
    //   background: 'rgb(223,227,238)',
    // }
  },
});

interface Props {
  languages: string[];
}

function Selection({ languages }: Props) {
  const [selectedLang, select] = useState<string>();

  const getItemStyle = (lang: string) =>
    selectedLang === lang
      ? { background: 'rgb(139,157,195)' }
      : undefined;

  return (
    <div className={css(styles.container)}>
      {
        languages
          .map(lang =>
            <div
              style={getItemStyle(lang)}
              className={css(styles.item)}
              onClick={() => select(lang)}
            >
              {lang}
            </div>
          )
      }
    </div>
  );
}

export default Selection;
