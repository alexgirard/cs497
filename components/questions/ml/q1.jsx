import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
  ThisOrThatForm,
  ThisOrThatOption,
} from '../../form-input/ThisOrThatForm';

export default function Q1({ item }) {
  return (
    <Container width="100%">
      <h1>Role: ML Engineer</h1>
      <Stack spacing={2}>
        <Typography>
          You are the machine learning engineer for BetterWorld, and you are in
          charge of the decisions on how the algorithms are created and what
          data is used.
        </Typography>
        <Typography>
          Our first task is to use machine learning to track the facial
          expressions of a user. Using the user’s video camera, we will analyze
          the user’s face to determine if they are enjoying the content they are
          seeing.
        </Typography>
        <Typography>
          In game, the user’s avatar facial expression will also change in real
          time to reflect their emotions. These expressions will be more
          exaggerated in game than in real life.
        </Typography>
      </Stack>
      <Box width="100%" pt={4}>
        <h2>Question 1</h2>
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
