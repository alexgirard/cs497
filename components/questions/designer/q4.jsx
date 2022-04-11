import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {
  ThisOrThatForm,
  ThisOrThatOption,
} from '../../form-input/ThisOrThatForm';

export default function Q4({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Designer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 4</Typography>
        <Typography>
          Something more shopping specific? How to make the shopping interface
          itself accessible to those with low visibility?
        </Typography>
        <ThisOrThatForm
          title="We have two options:"
          item={item}
          fieldName="dq4.1"
        >
          <ThisOrThatOption>Use a well-known dataset.</ThisOrThatOption>
          <ThisOrThatOption>Create your own dataset.</ThisOrThatOption>
        </ThisOrThatForm>
        <ThisOrThatForm
          title="We have two options:"
          item={item}
          fieldName="dq4.2"
        >
          <ThisOrThatOption>Use a well-known dataset.</ThisOrThatOption>
          <ThisOrThatOption>Create your own dataset.</ThisOrThatOption>
        </ThisOrThatForm>
        <ThisOrThatForm
          title="We have two options:"
          item={item}
          fieldName="dq4.3"
        >
          <ThisOrThatOption>Use a well-known dataset.</ThisOrThatOption>
          <ThisOrThatOption>Create your own dataset.</ThisOrThatOption>
        </ThisOrThatForm>
      </Box>
    </Container>
  );
}
