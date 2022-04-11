import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {
  ThisOrThatForm,
  ThisOrThatOption,
} from '../../form-input/ThisOrThatForm';

export default function Q1({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: ML Engineer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 1</Typography>
        <Typography>
          For our algorithm to recognize the expressions on the user’s face, we
          will need a dataset to train on.
        </Typography>
        <ThisOrThatForm
          title="We have two options:"
          item={item}
          fieldName="mlq1"
        >
          <ThisOrThatOption>Use a well-known dataset.</ThisOrThatOption>
          <ThisOrThatOption>Create your own dataset.</ThisOrThatOption>
        </ThisOrThatForm>
      </Box>
    </Container>
  );
}
