import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

export default function Intro() {
  return (
    <Container width="100%" maxWidth="1100px">
      <Typography variant="h4" mb={3}>
        Role: Designer
      </Typography>
      <Stack spacing={2}>
        <Typography>Here is some Copy</Typography>
      </Stack>
    </Container>
  );
}
