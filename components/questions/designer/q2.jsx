import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {
  ThisOrThatForm,
  ThisOrThatOption,
} from '../../form-input/ThisOrThatForm';

export default function Q2({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Designer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 2</Typography>
        <Typography>
          We’ve now created a prototype of the physical headset, and we want to
          test the fit on potential users.
        </Typography>
        <ThisOrThatForm
          title="What group should we prioritize?"
          item={item}
          fieldName="dq2"
        >
          <ThisOrThatOption>
            Team members and other company members.
          </ThisOrThatOption>
          <ThisOrThatOption>
            A diverse sample of potential users.
          </ThisOrThatOption>
        </ThisOrThatForm>
      </Box>
    </Container>
  );
}
