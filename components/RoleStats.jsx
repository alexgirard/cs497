import React from 'react';
import { table, minifyItems } from '../utils/Airtable';
import StatContainer from './StatContainer';
import { getPercentages, getRankings } from './GenderStats';

export default function Stats({ type, field, options }) {
  const [data, setData] = React.useState(null);
  const [studentData, setStudentData] = React.useState(null);
  const [educatorData, setEducatorData] = React.useState(null);
  const [industryData, setIndustryData] = React.useState(null);
  const [otherData, setOtherData] = React.useState(null);
  React.useEffect(async () => {
    const getItems = await table.select({ fields: [field] }).all();
    setData(minifyItems(getItems));

    // 'view' param specifies the name of a view already created in the Airtable UI
    const getStudentItems = await table
      .select({ fields: [field], view: '0-18' })
      .all();
    setStudentData(minifyItems(getStudentItems));

    const getEducatorItems = await table
      .select({ fields: [field], view: '18-30' })
      .all();
    setEducatorData(minifyItems(getEducatorItems));

    const getIndustryItems = await table
      .select({ fields: [field], view: '30-60' })
      .all();
    setIndustryData(minifyItems(getIndustryItems));

    const getOtherItems = await table
      .select({ fields: [field], view: '60+' })
      .all();
    setOtherData(minifyItems(getOtherItems));
  }, []);

  const func = type === 'rank' ? getRankings : getPercentages;
  const titlePrefix = type === 'rank' ? 'rankings' : 'results';

  return (
    <StatContainer
      stats={[
        func(data, `Total ${titlePrefix}:`, options, field),
        func(studentData, `Student ${titlePrefix}:`, options, field),
        func(educatorData, `Educator ${titlePrefix}:`, options, field),
        func(industryData, `Industry ${titlePrefix}:`, options, field),
        func(otherData, `Other ${titlePrefix}:`, options, field),
      ]}
    />
  );
}
