import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
  ThisOrThatForm,
  ThisOrThatOption,
} from '../../form-input/ThisOrThatForm';

export default function Q5({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Designer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 5</Typography>
        <Stack spacing={2}>
          <Typography>
            Next, we’ll be working on the shopping experience for Main Street
            stores. When a user visits a store, they’ll be able to view
            products, see detailed information about them, and checkout – all in
            VR.
          </Typography>
          <Typography>
            We have a few product decisions we’ll need to make regarding the
            user interfaces for this feature.
          </Typography>
        </Stack>
        <ThisOrThatForm
          title="Which way to present shopping listings is better?"
          item={item}
          fieldName="dq5.1"
        >
          <ThisOrThatOption>TODO1</ThisOrThatOption>
          <ThisOrThatOption>TODO2</ThisOrThatOption>
        </ThisOrThatForm>
        <ThisOrThatForm
          title="Which way to navigate in a store is better?"
          item={item}
          fieldName="dq5.2"
        >
          <ThisOrThatOption>TODO1</ThisOrThatOption>
          <ThisOrThatOption>TODO2</ThisOrThatOption>
        </ThisOrThatForm>
        <ThisOrThatForm
          title="Which colour combination is better?"
          item={item}
          fieldName="dq5.3"
        >
          <ThisOrThatOption>TODO1</ThisOrThatOption>
          <ThisOrThatOption>TODO2</ThisOrThatOption>
        </ThisOrThatForm>
      </Box>
    </Container>
  );
}
