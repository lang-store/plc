import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { JsonStory } from '../../../models/models';


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
  },
});

interface Props {
  languages: JsonStory[];
  onSelect: (language: JsonStory) => void;
}

function Selection({ languages, onSelect }: Props) {
  const [selectedLang, select] = useState<JsonStory>();

  const getItemStyle = (lang: JsonStory) =>
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
              onClick={() => { select(lang); onSelect(lang); }}
            >
              {lang.name}
            </div>
          )
      }
    </div>
  );
}

export default Selection;
