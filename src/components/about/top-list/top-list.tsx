import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { JsonStory, Core } from '../../../models/models';
import { COLUMN_NAMES } from '../../../models/metadata';

const styles = StyleSheet.create({
  container: {
    width: '700px',
    height: '500px',
    overflow: 'auto',
    border: '1px solid rgb(41, 72, 125)',
  },
  item: {
    border: '1px solid rgb(139,157,195)',
    cursor: 'pointer',
  },
  header: {
    display: 'inline-block',
    width: '700px',
  },
  headerItem: {
    display: 'inline-block',
    height: '40px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    padding: '10px 18px 10px 19px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: '0.3s',
    '-webkit-user-select': 'none',
  }
});

interface Props {
  languages: JsonStory[];
}


function TopList({ languages }: Props) {
  const [selectedTop, select] = useState<string>();

  const getHeaderItemStyle = (name: string) => {
    if (name !== selectedTop) {
      return {
        border: '2px solid rgb(41, 72, 125)',
        color: 'rgb(41, 72, 125)',
        background: 'rgb(255, 255, 255)',
      };
    }

    return {
      border: '2px solid rgb(255, 255, 255)',
      color: 'rgb(255, 255, 255)',
      background: 'rgb(41, 72, 125)',
    };
  };

  return (
    <div>
      <div className={css(styles.header)}>
        {
          COLUMN_NAMES.map(name =>
            <div
              className={css(styles.headerItem)}
              style={getHeaderItemStyle(name)}
              onClick={() => select(name)}
            >
              {name}
            </div>
          )
        }
      </div>

      <div className={css(styles.container)}>
        {
          languages
            .map(lang =>
              <div className={css(styles.item)}>
                {lang.name}
              </div>
            )
        }
      </div>
    </div>
  );
}

export default TopList;
