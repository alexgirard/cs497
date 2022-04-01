import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { TotalSumForm, CounterButton } from '../../form-input/TotalSumForm';

export default function Q2({ item }) {
  return (
    <Container width="100%">
      <h1>Role: ML Engineer</h1>
      <Box width="100%" pt={4}>
        <h2>Question 2</h2>
        <Typography>
          Now that we have a dataset, we’ll need to decide which facial features
          are relevant for our algorithm. For each feature, the amount of points
          you give will determine its priority in your algorithm.
        </Typography>
        <TotalSumForm
          item={item}
          title="We have 10 different points that we can split up between the features for a face."
          total={10}
          fieldName="mlq2"
        >
          <CounterButton id="eyes" label="Sensing changes in eyes" />
          <CounterButton id="mouth" label="Sensing changes in mouth" />
          <CounterButton id="eyebrows" label="Sensing changes in eyebrows" />
        </TotalSumForm>
      </Box>
    </Container>
  );
}
