import React from 'react';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

export default function Intro() {
  return (
    <Stack width="100%" maxWidth="1100px">
      <Typography variant="h4" mb={3}>
        Role: Designer
      </Typography>
      <Stack spacing={2}>
        <Typography>
          You are the lead designer for BetterWorld, working on making the best
          user experience possible. Along with your team, you’ll be working on
          designing hardware for the product (namely, a virtual reality
          headset), the user interface, and the experience our users will have
          using our app.{' '}
        </Typography>
      </Stack>
    </Stack>
  );
}
