import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { RadioForm, RadioOption } from '../../form-input/RadioForm';

export default function Q5({ item }) {
  return (
    <Container width="100%">
      <h1>Role: Designer</h1>
      <Box width="100%" pt={4}>
        <h2>Question 5</h2>
        <Typography>
          How do you provide regional support? Do you only support English? Will
          people in different regions be able to communicate?
        </Typography>
        <RadioForm
          title="Decide which tradeoffs to make:"
          item={item}
          fieldName="dq5"
        >
          <RadioOption
            value="1"
            label="Only support English (launch in 1 month)"
          />
          <RadioOption
            value="2"
            label="Just translate all text (launch in 4 months)"
          />
          <RadioOption
            value="3"
            label="Spend time developing full localization (launch in 1 year)"
          />
        </RadioForm>
      </Box>
    </Container>
  );
}
