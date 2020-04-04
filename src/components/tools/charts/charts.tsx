import React from 'react';
import { StyleSheet, css } from 'aphrodite';
const { Chart } = require('react-google-charts');

import Spinner from '../../tools/spinner';
import { JsonStory } from '../../../models/models';
import { COLUMN_NAMES, ROWS } from '../../../models/metadata';


const styles = StyleSheet.create({
  charts: {
    padding: '100px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


interface Props {
  languageA: JsonStory;
  languageB: JsonStory;
}

function Charts({ languageA, languageB }: Props) {

  const createData = (key: string, languages: JsonStory[]) => {
    if (!languageA || !languageB) {
      return [];
    }

    return COLUMN_NAMES.map((column, i) => [column, ...languages.map(lang => lang.data[key][i].length)]);
  };

  return (
    <div className={css(styles.charts)}>
      {
        Object.entries(ROWS).map(
          ([key, value]) =>
            <Chart
              width={'700px'}
              height={'400px'}
              chartType="Bar"
              loader={<Spinner />}
              data={[
                ['', languageA.name, languageB.name],
                ...createData(key, [languageA, languageB])
              ]}
              options={{
                chart: {
                  title: value,
                },
              }}
            />
        )
      }
    </div>
  );
}

export default Charts;
