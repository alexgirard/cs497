import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { RadioForm, RadioOption } from '../../form-input/RadioForm';

export default function Q5({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Designer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 6</Typography>
        <Typography>
          Although our team is based out of an English-speaking country,
          BetterWorld will be available internationally. However, we’ll need to
          make decisions on whether to localize the software for global markets.
        </Typography>
        <RadioForm
          title="Which option should you choose?"
          item={item}
          fieldName="dq6"
        >
          <RadioOption
            value="1"
            label="Only support English, and launch in one month."
          />
          <RadioOption
            value="2"
            label="Just translate all text, and launch in four months."
          />
          <RadioOption
            value="3"
            label="Spend time developing full localization, including voice recognition, and launch in one year."
          />
        </RadioForm>
      </Box>
    </Container>
  );
}
