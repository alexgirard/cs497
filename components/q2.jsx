import React from 'react';
import Typography from '@mui/material/Typography';
// import styles from '../styles/Home.module.css';
import { TotalSumForm, CounterButton } from './form-input/TotalSumForm';

export default function Q2({ item }) {
  return (
    <div>
      <Typography variant="h4">Hi! I'm a DIFFERENT Question :) </Typography>
      <TotalSumForm
        item={item}
        title="Here is custom form title like some instructions"
        total={10}
        fieldName="q2"
      >
        <CounterButton
          id="q2-1"
          label="1Spending money or time is hard! Spending money or time is hard! Spending money or time is hard!"
        />
        <CounterButton
          id="q2-2"
          label="2Spending money or time is hard! Spending money or time is hard! Spending money or time is hard!"
        />
        <CounterButton
          id="q2-3"
          label="3Spending money or time is hard! Spending money or time is hard! Spending money or time is hard!"
        />
        <CounterButton
          id="q2-4"
          label="4Spending money or time is hard! Spending money or time is hard! Spending money or time is hard!"
        />
        <CounterButton
          id="q2-5"
          label="5Spending money or time is hard! Spending money or time is hard! Spending money or time is hard!"
        />
        <CounterButton
          id="q2-6"
          label="6Spending money or time is hard! Spending money or time is hard! Spending money or time is hard!"
        />
        <CounterButton
          id="q2-7"
          label="7Spending money or time is hard! Spending money or time is hard! Spending money or time is hard!"
        />
      </TotalSumForm>
    </div>
  );
}
