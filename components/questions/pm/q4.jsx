import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { RadioForm, RadioOption } from '../../form-input/RadioForm';

export default function Q4({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Product Manager</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 4</Typography>
        <Stack spacing={2}>
          <Typography>
            We’ve been receiving reports of hate speech from others on the
            platform. Community members of BetterWorld have been advocating on
            social media for this to be looked at.
          </Typography>
          <Typography>
            Should you filter and remove this hate speech from the platform all
            together? Or should you flag conversations, and give warnings to
            those using negative language?
          </Typography>
        </Stack>
        <RadioForm
          title="Pick a course of action."
          item={item}
          fieldName="pmq4"
        >
          <RadioOption value="1" label="Do nothing." />
          <RadioOption
            value="2"
            label="Give warnings to users who use negative language."
          />
          <RadioOption value="3" label="Remove the content all together." />
        </RadioForm>
      </Box>
    </Container>
  );
}
