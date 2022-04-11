import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { RadioForm, RadioOption } from '../../form-input/RadioForm';

export default function Q3({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Product Manager</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 3</Typography>
        <Typography>
          The development period is completed and now your stakeholders are
          pushing for profit. You do not have any infrastructure for tiered
          subscriptions or other money-making features. To implement these
          features it will take time and many development hours. Do you sell
          initial user data to make a quick profit? Is it in the aggregate? Or
          do you wait and implement a new solution which may cost more money and
          you to lose some stakeholders?
        </Typography>
        <RadioForm title="hello!:" item={item} fieldName="pmq3">
          <RadioOption value="1" label="choice" />
          <RadioOption value="2" label="another one" />
          <RadioOption value="3" label="option!" />
        </RadioForm>
      </Box>
    </Container>
  );
}
