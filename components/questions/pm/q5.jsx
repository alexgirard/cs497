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
          In the platform beta release people have been spending crazy amounts
          of time online out of touch with reality. This is great for your
          profit margins as more time spent on the app equals more ad revenue,
          but to the potential detriment of the users. Do add a goal to
          implement watch/playtime limits or reminders which sacrifices revenue
          for the health of your users, or keep the product the way it is and
          impose the users create their own limits.
        </Typography>
        <ThisOrThatForm
          title="We have two options:"
          item={item}
          fieldName="pmq5"
        >
          <ThisOrThatOption>A.</ThisOrThatOption>
          <ThisOrThatOption>B.</ThisOrThatOption>
        </ThisOrThatForm>
      </Box>
    </Container>
  );
}
