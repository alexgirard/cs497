import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
  MultiSelectForm,
  MultiSelectOption,
} from '../../form-input/MultiSelectForm';

export default function Q4({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Designer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 4</Typography>
        <Stack spacing={2}>
          <Typography>
            At YourSpace, privacy and safety is one of our core product pillars.
          </Typography>
          <Typography>
            Along with the AI solutions we discussed earlier, we want
            BetterWorld to have robust moderation systems in place to prevent
            harassment and protecting the privacy of our users. The design team
            has brainstormed a variety of ways to achieve safety.
          </Typography>
          <Typography>
            Of the ones below, select the <b>three</b> most important methods to
            prevent malicious behaviour.
          </Typography>
        </Stack>
        <MultiSelectForm
          title="Choose up to 3 methods"
          item={item}
          fieldName="dq4"
        >
          <MultiSelectOption
            value="1"
            label="A way to report users and ban them. "
          />
          <MultiSelectOption
            value="2"
            label="A way for users to block other users."
          />
          <MultiSelectOption
            value="3"
            label="Showing a list of nearby users while in-game."
          />
          <MultiSelectOption
            value="4"
            label="Have moderators be present in social spaces."
          />
          <MultiSelectOption
            value="5"
            label="Turn off voice chat or text chat for specific users."
          />
        </MultiSelectForm>
      </Box>
    </Container>
  );
}
