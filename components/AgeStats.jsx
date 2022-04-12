import React from 'react';
import { table, minifyItems } from '../utils/Airtable';
import StatContainer from './StatContainer';
import { getPercentages, getRankings } from './GenderStats';

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

  const func = type === 'rank' ? getRankings : getPercentages;
  const titlePrefix = type === 'rank' ? 'rankings' : 'results';

  return (
    <StatContainer
      stats={[
        func(data, `Total ${titlePrefix}:`, options, field),
        func(zeroData, `0 - 18 ${titlePrefix}:`, options, field),
        func(eighteenData, `18 - 30 ${titlePrefix}:`, options, field),
        func(thirtyData, `30 - 60 ${titlePrefix}:`, options, field),
        func(sixtyData, `60 + ${titlePrefix}:`, options, field),
      ]}
    />
  );
}
