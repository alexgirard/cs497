import React from 'react';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

export default function Intro() {
  return (
    <Stack width="100%" maxWidth="1100px">
      <Typography variant="h4" mb={3}>
        Role: Product Manager
      </Typography>
      <Stack spacing={2}>
        <Typography>
          You are the product manager for BetterWorld. Your role is to
          communicate with stakeholders, and make key product decisions for
          engineers and designers to implement. You are also responsible for
          meeting deadlines and allocating human resources.
        </Typography>
      </Stack>
    </Stack>
  );
}
