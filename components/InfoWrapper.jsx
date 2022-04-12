import React from 'react';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

export default function InfoWrapper({ component, info, stats, ...props }) {
  const Component = component;
  return (
    <Stack spacing={3} width="100%" maxWidth="1100px">
      <Component {...props} />
      {info && <Alert severity="info">{info}</Alert>}
      {stats && (
        <Alert severity="info" color="warning">
          <Typography mb={2}>Case Study Statistics</Typography>
          {stats}
        </Alert>
      )}
    </Stack>
  );
}
