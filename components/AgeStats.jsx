import React from 'react';
import { table, minifyItems } from '../utils/Airtable';
import StatContainer from './StatContainer';
import { getPercentages, getRankings, getOptionStats } from './GenderStats';

export default function Stats({ type, field, options }) {
  const [data, setData] = React.useState(null);
  const [zeroData, setZeroData] = React.useState(null);
  const [eighteenData, setEighteenData] = React.useState(null);
  const [thirtyData, setThirtyData] = React.useState(null);
  const [sixtyData, setSixtyData] = React.useState(null);
  React.useEffect(async () => {
    const getItems = await table.select({ fields: [field] }).all();
    setData(minifyItems(getItems));

    // 'view' param specifies the name of a view already created in the Airtable UI
    const getZeroItems = await table
      .select({ fields: [field], view: '0-18' })
      .all();
    setZeroData(minifyItems(getZeroItems));

    const getEighteenItems = await table
      .select({ fields: [field], view: '18-30' })
      .all();
    setEighteenData(minifyItems(getEighteenItems));

    const getThirtyItems = await table
      .select({ fields: [field], view: '30-60' })
      .all();
    setThirtyData(minifyItems(getThirtyItems));

    const getSixtyItems = await table
      .select({ fields: [field], view: '60+' })
      .all();
    setSixtyData(minifyItems(getSixtyItems));
  }, []);

  let func;
  let titlePrefix;
  switch (type) {
    case 'rank':
      func = getRankings;
      titlePrefix = 'ranked results';
      break;
    case 'multi':
      func = getOptionStats;
      titlePrefix = 'selections';
      break;
    default:
      func = getPercentages;
      titlePrefix = 'results';
      break;
  }

  const allPrefix = `${
    titlePrefix[0].toUpperCase() + titlePrefix.substring(1)
  }:`;

  return (
    <StatContainer
      stats={[
        func(data, allPrefix, options, field),
        func(zeroData, `Age 0 - 18 ${titlePrefix}:`, options, field),
        func(eighteenData, `Age 18 - 30 ${titlePrefix}:`, options, field),
        func(thirtyData, `Age 30 - 60 ${titlePrefix}:`, options, field),
        func(sixtyData, `Age 60 + ${titlePrefix}:`, options, field),
      ]}
    />
  );
}
