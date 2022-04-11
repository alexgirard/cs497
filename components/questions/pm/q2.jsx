import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {
  MultiSelectForm,
  MultiSelectOption,
} from '../../form-input/MultiSelectForm';

export default function Q2({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Product Manager</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 2</Typography>
        <Typography>
          As a user walks down Main Street inside BetterWorld, we want to show
          them different stores and communities to our users. What
          characteristics should we base these recommendations on?
        </Typography>
        <MultiSelectForm
          title="Select all that apply."
          item={item}
          fieldName="pmq2"
        >
          <MultiSelectOption value="1" label="Race or ethnicity." />
          <MultiSelectOption value="2" label="Music interests." />
          <MultiSelectOption value="3" label="Religious affiliations." />
          <MultiSelectOption value="4" label="Nationality." />
          <MultiSelectOption value="5" label="Sexual orientation." />
          <MultiSelectOption value="6" label="Age demographics." />
          <MultiSelectOption value="7" label="Sports interests." />
          <MultiSelectOption value="8" label="Gender-based groups." />
          <MultiSelectOption value="9" label="Political beliefs." />
        </MultiSelectForm>
      </Box>
    </Container>
  );
}
