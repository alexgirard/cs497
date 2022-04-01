import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { table, minifyItems } from '../utils/Airtable';

const getPercentages = (data) => {
  const values = data?.map((row) => row.fields.q1) ?? [];
  const total = values.length;
  const uniqueItems = [...new Set(values)].sort();
  return uniqueItems.map((option) => {
    const numItems = values.filter((value) => value === option);
    const percentageValue = (numItems.length * 100) / total;
    return (
      <div>
        {`Option ${option} represents ${
          Math.round(percentageValue * 100) / 100
        }%`}
      </div>
    );
  });
};
export default function Data() {
  const [data, setData] = useState(null);
  const [femaleData, setFemaleData] = useState(null);
  useEffect(async () => {
    const getItems = await table.select({ fields: ['q1'] }).all();
    setData(minifyItems(getItems));

    // 'view' param specifies the name of a view already created in the Airtable UI
    const getFemaleItems = await table
      .select({ fields: ['q1'], view: 'Female' })
      .all();
    setFemaleData(minifyItems(getFemaleItems));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Top Data for Whole Table</h1>
      {getPercentages(data)}
      <br />
      <h1>Top Data for Females in Table Only</h1>
      {getPercentages(femaleData)}
    </div>
  );
}
