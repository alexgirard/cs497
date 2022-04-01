import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {
  MultiSelectForm,
  MultiSelectOption,
} from '../../form-input/MultiSelectForm';

export default function Q3({ item }) {
  return (
    <Container width="100%">
      <h1>Role: Designer</h1>
      <Box width="100%" pt={4}>
        <h2>Question 3</h2>
        <Typography>
          Something about protecting privacy/tracking/preventing harassment of
          people? Privacy and safety are important! How do you add support for
          reporting bad actors? Or like vote which ones are most effective?
        </Typography>
        <MultiSelectForm
          title="Choose up to 3 methods"
          item={item}
          fieldName="dq3"
        >
          <MultiSelectOption value="1" label="Time free zone" />
          <MultiSelectOption value="2" label="Report users and ban them " />
          <MultiSelectOption value="3" label="Block users" />
          <MultiSelectOption
            value="4"
            label="Notify the user of nearby users so they can monitor safety"
          />
          <MultiSelectOption
            value="5"
            label="How to protect from bad actors?"
          />
        </MultiSelectForm>
      </Box>
    </Container>
  );
}
