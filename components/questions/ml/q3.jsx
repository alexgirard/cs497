import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { RadioForm, RadioOption } from '../../form-input/RadioForm';

export default function Q2({ item }) {
  return (
    <Container width="100%">
      <h1>Role: ML Engineer</h1>
      <Box width="100%" pt={4}>
        <h2>Question 3</h2>
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
