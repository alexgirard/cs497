import React from 'react';
import Box from '@mui/material/Box';
import { table, minifyItems } from '../utils/Airtable';
import StatContainer from './StatContainer';

export const getPercentages = (data, title, options, field) => {
  const values = data?.map((row) => row.fields[field]) ?? [];
  const filteredVals = values.filter((x) => x !== undefined);
  const total = filteredVals.length;
  const uniqueItems = [...new Set(filteredVals)].sort();
  if (uniqueItems.length === 0) return undefined;

  return (
    <Box>
      <strong>{title}</strong>
      {uniqueItems.map((option) => {
        const numItems = filteredVals.filter((value) => value === option);
        const percentageValue = (numItems.length * 100) / total;

        return (
          <div>
            {`${options[option - 1]} represents ${
              Math.round(percentageValue * 100) / 100
            }%`}
          </div>
        );
      })}
    </Box>
  );
};

export const getRankings = (data, title, options, field) => {
  const values = data?.map((row) => row.fields[field]) ?? [];
  const filteredVals = values.filter((x) => x !== undefined);

  const ranks = {};
  const readableVals = filteredVals.map((v) => JSON.parse(v));
  readableVals.reduce((r, val) => {
    Object.keys(val).forEach((k) => {
      /* eslint-disable no-param-reassign */
      if (!r[k]) r[k] = 0;
      r[k] += val[k];
    });
    return r;
  }, ranks);
  const sortedRanks = Object.entries(ranks).sort(([, v1], [, v2]) => v2 - v1);
  if (Object.entries(sortedRanks).length === 0) return undefined;

  return (
    <Box>
      <strong>{title}</strong>
      {sortedRanks.map(([option], index) => (
        <div>{`${index + 1}. ${options[option]}`}</div>
      ))}
    </Box>
  );
};

export default function Stats({ type, field, options }) {
  const [data, setData] = React.useState(null);
  const [femaleData, setFemaleData] = React.useState(null);
  const [maleData, setMaleData] = React.useState(null);
  const [otherData, setOtherData] = React.useState(null);
  React.useEffect(async () => {
    const getItems = await table.select({ fields: [field] }).all();
    setData(minifyItems(getItems));

    // 'view' param specifies the name of a view already created in the Airtable UI
    const getFemaleItems = await table
      .select({ fields: [field], view: 'Female' })
      .all();
    setFemaleData(minifyItems(getFemaleItems));

    const getMaleItems = await table
      .select({ fields: [field], view: 'Male' })
      .all();
    setMaleData(minifyItems(getMaleItems));

    const getOtherItems = await table
      .select({ fields: [field], view: 'OtherGender' })
      .all();
    setOtherData(minifyItems(getOtherItems));
  }, []);

  const func = type === 'rank' ? getRankings : getPercentages;
  const titlePrefix = type === 'rank' ? 'rankings' : 'results';

  return (
    <StatContainer
      stats={[
        func(data, `Total ${titlePrefix}:`, options, field),
        func(femaleData, `Female ${titlePrefix}:`, options, field),
        func(maleData, `Male ${titlePrefix}:`, options, field),
        func(otherData, `Other Gender ${titlePrefix}:`, options, field),
      ]}
    />
  );
}
