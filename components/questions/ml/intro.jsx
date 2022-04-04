import React from 'react';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

export default function Intro() {
  return (
    <Stack width="100%" maxWidth="1100px">
      <Typography variant="h4" mb={3}>
        Role: ML Engineer
      </Typography>
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
    </Stack>
  );
}
