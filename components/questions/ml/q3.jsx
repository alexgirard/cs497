import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { RadioForm, RadioOption } from '../../form-input/RadioForm';

export default function Q2({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: ML Engineer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 3</Typography>
        <Typography>i have thoughts about AAVE!</Typography>
        <RadioForm title="Decide something:" item={item} fieldName="dq5">
          <RadioOption value="1" label="ahh" />
          <RadioOption value="2" label="ahhh" />
          <RadioOption value="3" label="ahhhhh" />
        </RadioForm>
      </Box>
    </Container>
  );
}
