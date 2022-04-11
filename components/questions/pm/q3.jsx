import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
  ThisOrThatForm,
  ThisOrThatOption,
} from '../../form-input/ThisOrThatForm';

export default function Q3({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Product Manager</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 3</Typography>
        <Stack spacing={2}>
          <Typography>
            The development period is completed and BetterWorld has been
            released to the public! However, your stakeholders are pushing for
            profit. You do not have any infrastructure for tiered subscriptions
            or other money-making features.
          </Typography>
          <Typography>
            To implement these features it will take time and many development
            hours, and some of your stakeholders may lose interest. On the other
            hand, we have usage data from our initial users, which could be sold
            to third party companies.
          </Typography>
        </Stack>
        <ThisOrThatForm
          title="What should you do?"
          item={item}
          fieldName="pmq3"
        >
          <ThisOrThatOption>
            Implement a tiered subscription feature, at the cost of delayed
            revenue.
          </ThisOrThatOption>
          <ThisOrThatOption>
            Sell initial user data to turn a short-term profit.
          </ThisOrThatOption>
        </ThisOrThatForm>
      </Box>
    </Container>
  );
}
