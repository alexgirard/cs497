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
      <h1>Role: Designer</h1>
      <Box width="100%" pt={4}>
        <h2>Question 4</h2>
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
