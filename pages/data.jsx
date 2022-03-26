import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { table, minifyItems } from '../utils/Airtable';

export default function Data() {
  const [data, setData] = useState(null);
  useEffect(async () => {
    const getItems = await table.select({ fields: ['q1'] }).all();
    setData(minifyItems(getItems));
  }, []);

  const values = data?.map((row) => row.fields.q1) ?? [];
  const total = values.length;
  const uniqueItems = [...new Set(values)].sort();

  return (
    <div className={styles.container}>
      <h1>Top Data</h1>
      {uniqueItems.map((option) => {
        const numItems = values.filter((value) => value === option);
        return (
          <div>
            {`Option ${option} represents ${(numItems.length * 100) / total}%`}
          </div>
        );
      })}
    </div>
  );
}
