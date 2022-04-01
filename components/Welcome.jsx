import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Welcome() {
  return (
    <Stack spacing={4} width="100%" maxWidth="700px">
      <Typography>Hi! Welcome to our CS 497 project.</Typography>
      <Typography>
        Tech has the power to influence our decisions and actions, whether we
        are aware of it or not. In our day to day lives, we interface with
        technology.
      </Typography>
      <Typography>
        In this simulation, you’ll be guided through a choose-your-own-adventure
        story as three major roles on a team – a machine learning engineer, a UX
        researcher, and a product manager.
      </Typography>
      <Typography>
        Through each role and the decisions you make, you’ll see how your
        choices have ethical implications.
      </Typography>
      <Typography>Ready to get started?</Typography>
    </Stack>
  );
}
