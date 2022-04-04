import React from 'react';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

export default function InfoWrapper({ component, info, ...props }) {
  const Component = component;
  return (
    <Stack spacing={3} width="100%" maxWidth="1100px">
      <Component {...props} />
      {info && <Alert severity="info">{info}</Alert>}
    </Stack>
  );
}
