import React from 'react';
import { Typography, Link } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { TotalSumForm, CounterButton } from '../../form-input/TotalSumForm';

export default function Q1({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Designer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 1</Typography>
        <Typography>
          The first task is to design a virtual reality headset with the
          hardware team. You have 15 hours to use, and you can divide them
          across several focuses.
        </Typography>
        <TotalSumForm
          item={item}
          title="How will you allocate your time?"
          total={15}
          fieldName="dq1"
        >
          <CounterButton
            id="d1-1"
            label="Conduct exploratory user interviews on how users want to use the headset."
          />
          <CounterButton
            id="d1-2"
            label="Determine your dominant user groups through market research."
          />
          <CounterButton
            id="d1-3"
            label="Find a diverse sample of participants for focus groups."
          />
          <CounterButton
            id="d1-4"
            label="Focus on designing around accessibility guidelines."
          />
          <CounterButton
            id="d1-5"
            label="Create a physical prototype of the headset."
          />
        </TotalSumForm>
      </Box>
    </Container>
  );
}

export function info() {
  return (
    <Stack spacing={2}>
      <Typography>
       g
      </Typography>
      <Typography>
      3
      </Typography>
      <Typography>
1
      </Typography>
      <Typography>
        <Stack>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href=""
          > 
          </Link>
        </Stack>
      </Typography>
      <Typography>
       test
      </Typography>
    </Stack>
  );
}
