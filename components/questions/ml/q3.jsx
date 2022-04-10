import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
  ThisOrThatForm,
  ThisOrThatOption,
} from '../../form-input/ThisOrThatForm';

export default function Q3({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: ML Engineer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 3</Typography>
        <Stack spacing={2}>
          <Typography>
            Users in BetterWorld can enhance their gameplay by saying voice
            commands to perform certain tasks. For example, a user can say
            “Bring me to Main Street” to get them back to the main game area. To
            understand our users’ commands, we’ll need to create a speech
            recognition algorithm to understand the commands that users can say
            in game.
          </Typography>
          <Typography>
            There are two prototype algorithms our team has developed, and we
            need to choose one to fully complete and use in BetterWorld.
          </Typography>
        </Stack>
        <ThisOrThatForm
          title="Which would you select?"
          item={item}
          fieldName="mlq3"
        >
          <ThisOrThatOption>
            A precise algorithm that can understand English phrases with a low
            error rate.
          </ThisOrThatOption>
          <ThisOrThatOption>
            A localization-friendly algorithm that has trained on several major
            languages and English accents, but produces errors at a higher
            frequency.
          </ThisOrThatOption>
        </ThisOrThatForm>
      </Box>
    </Container>
  );
}
