import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { RadioForm, RadioOption } from '../../form-input/RadioForm';

export default function Q4({ item }) {
  return (
    <Container width="100%">
      <h1>Role: Product Manager</h1>
      <Box width="100%" pt={4}>
        <h2>Question 4</h2>
        <Typography>
          Users are reporting a lot of hate speech from others on the platform.
          This is something that the community is really pushing to be looked
          at. Should you filter/remove hate speech from the platform all
          together? Or should you flag conversations and give warnings to those
          using negative language?
        </Typography>
        <RadioForm title="Title:" item={item} fieldName="pmq4">
          <RadioOption value="1" label="Do nothing" />
          <RadioOption value="2" label="Warnings" />
          <RadioOption value="3" label="Remove speech all together" />
        </RadioForm>
      </Box>
    </Container>
  );
}