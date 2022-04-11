import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {
  ThisOrThatForm,
  ThisOrThatOption,
} from '../../form-input/ThisOrThatForm';

export default function Q5({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Product Manager</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 5</Typography>
        <Typography>
          In the beta release of BetterWorld, the team received reports of users
          spending long hours in-game without breaks. Although this is great for
          profit margins, as more users spent on the platform results in greater
          revenue, there could be negative mental and physical effects on the
          users.
        </Typography>
        <ThisOrThatForm
          title="What should we do to address these concerns?"
          item={item}
          fieldName="pmq5"
        >
          <ThisOrThatOption>
            Implement playtime limits or reminders for the health of our users.
          </ThisOrThatOption>
          <ThisOrThatOption>
            Keep the product the way it is, and give users the tools to impose
            their own limits (i.e. Do Not Disturb mode on iOS devices)
          </ThisOrThatOption>
        </ThisOrThatForm>
      </Box>
    </Container>
  );
}
