import React from 'react';
import { Link, Typography } from '@mui/material';
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

export function info() {
  return (
    <Stack spacing={2}>
      <Typography>
        With a <b>well-known dataset</b>, your team can save on time by not
        having to make your own. However, these datasets may come at a cost.
      </Typography>
      <Typography>
        In 2018, Joy Buolamwini and Timnit Gebru found that two commonly used
        datasets for facial recognition, IJB-A and Adience, were composed of
        around 80% lighter-skinned subjects. In their work, they evaluated three
        gender classification systems used in the commercial field with these
        sets. The results of their study showed that people of colour had higher
        rates of error with the identification algorithms.
      </Typography>
      <Typography>
        For us to use a well-known dataset, diversity in both gender and race is
        important for accurate results of expression detection.
      </Typography>
      <Stack>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://proceedings.mlr.press/v81/buolamwini18a.html"
        >
          https://proceedings.mlr.press/v81/buolamwini18a.html
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.cs.toronto.edu/~bor/196f21/facial-recognition-nytimes.pdf"
        >
          http://www.cs.toronto.edu/~bor/196f21/facial-recognition-nytimes.pdf
        </Link>
      </Stack>
      <Typography>
        If you <b>create your own dataset</b>, you can consciously decide which
        facial elements should be used as variables. Although this may take more
        time, you can also decide what the diversity ratio of your dataset
        should be. This control in the planning step can help you achieve a
        fairer, and more accurate algorithm when it comes to facial detection.
      </Typography>
    </Stack>
  );
}
