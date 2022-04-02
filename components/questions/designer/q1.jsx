import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { TotalSumForm, CounterButton } from '../../form-input/TotalSumForm';

export default function Q1({ item }) {
  return (
    <Container width="100%">
      <h1>Role: Designer</h1>
      <Stack spacing={2}>
        <Typography>Here is some copy</Typography>
      </Stack>
      <Box width="100%" pt={4}>
        <h2>Question 1</h2>
        <Typography>
          Designing a Headset: Time Question, you have finite hours, what do you
          spend time doing.
        </Typography>
        <TotalSumForm
          item={item}
          title="You have 15 hours hours to use, how will you break them up?"
          total={10}
          fieldName="dq1"
        >
          <CounterButton
            id="d1-1"
            label="Exploratory user interviews on how users want to use the headset."
          />
          <CounterButton
            id="d1-2"
            label="Interviewing different communities to learn about their needs."
          />
          <CounterButton
            id="d1-3"
            label="Finding a diverse sample of participants for focus groups."
          />
          <CounterButton
            id="d1-4"
            label="Building and prototyping a headset."
          />
          <CounterButton
            id="d1-5"
            label="Testing the fit of a prototype headset on team mates and other company members."
          />
          <CounterButton
            id="d1-6"
            label="Testing the fit of a prototype headset on a diverse sample of customers."
          />
          <CounterButton id="d1-7" label="something about accessibility." />
        </TotalSumForm>
      </Box>
    </Container>
  );
}
