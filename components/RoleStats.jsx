import React from 'react';
import { table, minifyItems } from '../utils/Airtable';
import StatContainer from './StatContainer';
import { getPercentages, getRankings, getOptionStats } from './GenderStats';

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
      .select({ fields: [field], view: 'Student' })
      .all();
    setStudentData(minifyItems(getStudentItems));

    const getEducatorItems = await table
      .select({ fields: [field], view: 'Educator' })
      .all();
    setEducatorData(minifyItems(getEducatorItems));

    const getIndustryItems = await table
      .select({ fields: [field], view: 'Industry' })
      .all();
    setIndustryData(minifyItems(getIndustryItems));

    const getOtherItems = await table
      .select({ fields: [field], view: 'OtherRole' })
      .all();
    setOtherData(minifyItems(getOtherItems));
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
        func(studentData, `Student ${titlePrefix}:`, options, field),
        func(educatorData, `Educator ${titlePrefix}:`, options, field),
        func(industryData, `Industry ${titlePrefix}:`, options, field),
        func(otherData, `Other ${titlePrefix}:`, options, field),
      ]}
    />
  );
}
