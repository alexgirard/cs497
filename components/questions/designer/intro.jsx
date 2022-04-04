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
        <Typography>Here is some Copy</Typography>
      </Stack>
    </Stack>
  );
}
