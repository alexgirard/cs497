import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { TotalSumForm, CounterButton } from '../../form-input/TotalSumForm';

export default function Q1({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Product Manager</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 1</Typography>
        <Typography>
          The upper-level managers have assigned you to manage BetterWorld, and
          have given you 12 weeks to create a plan before engineering and design
          work begins. You have several categories you can focus your efforts
          on. Each point equals a week of work.
        </Typography>
        <TotalSumForm
          item={item}
          title="How will you allocate your time?"
          total={12}
          fieldName="pmq1"
        >
          <CounterButton id="d1-1" label="Gather user feedback." />
          <CounterButton id="d1-2" label="Focus on quality assurance." />
          <CounterButton
            id="d1-3"
            label="Conduct ethical implication research."
          />
          <CounterButton id="d1-4" label="Revenue modeling." />
          <CounterButton id="d1-5" label="Scope the project." />
          <CounterButton id="d1-6" label="Perform risk assessment." />
        </TotalSumForm>
      </Box>
    </Container>
  );
}
