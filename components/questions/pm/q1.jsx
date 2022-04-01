import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { TotalSumForm, CounterButton } from '../../form-input/TotalSumForm';

export default function Q1({ item }) {
  return (
    <Container width="100%">
      <h1>Role: Product Manager</h1>
      <Stack spacing={2}>
        <Typography>Here is some copy</Typography>
      </Stack>
      <Box width="100%" pt={4}>
        <h2>Question 1</h2>
        <Typography>
          There are so many aspects to creating a new project. How do you break
          up your coins into different categories to focus on?
        </Typography>
        <TotalSumForm
          item={item}
          title="You have 15 hours hours to use, how will you break them up?"
          total={10}
          fieldName="pmq1"
        >
          <CounterButton id="d1-1" label="User feedback" />
          <CounterButton id="d1-2" label="Quality" />
          <CounterButton id="d1-3" label="Revenue modeling" />
        </TotalSumForm>
      </Box>
    </Container>
  );
}
