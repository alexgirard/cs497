import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
  ThisOrThatForm,
  ThisOrThatOption,
} from '../../form-input/ThisOrThatForm';

export default function Q4({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: ML Engineer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 4</Typography>
        <Stack spacing={2}>
          <Typography>
            Text chat is one way that users can interact with each other.
            However, we want to prevent hateful language from being used on our
            platform to improve the experience of our users. To do so, we’ll
            need a moderation system for BetterWorld using machine learning.
          </Typography>
          <Typography>
            We’ll need to create an algorithm that detects when inappropriate
            conversations or harassment is occurring. We will then give out
            warnings or apply disciplinary action where necessary.
          </Typography>
          <Typography>
            Next is to focus on our text detection algorithm. This algorithm is
            still in the initial planning stages, and we need to choose a text
            analysis method. Unfortunately, due to time constraints, we can only
            choose one option to focus on.
          </Typography>
        </Stack>
        <ThisOrThatForm
          title="Which would you focus on?"
          item={item}
          fieldName="mlq4"
        >
          <ThisOrThatOption>
            Identify explicit and sensitive words.
          </ThisOrThatOption>
          <ThisOrThatOption>
            Analyze the sentiment of full sentences and phrases to determine if
            harassment is occurring.
          </ThisOrThatOption>
        </ThisOrThatForm>
      </Box>
    </Container>
  );
}
