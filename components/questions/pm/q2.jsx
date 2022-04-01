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
      <h1>Role: Product Manager</h1>
      <Box width="100%" pt={4}>
        <h2>Question 2</h2>
        <Typography>
          As you walk down the Main Street of BetterWorld, different stores and
          or communities shown to users will be based on: (select all that
          apply)
        </Typography>
        <MultiSelectForm
          title="Select all that apply"
          item={item}
          fieldName="pmq2"
        >
          <MultiSelectOption value="1" label="Race/ethnicity" />
          <MultiSelectOption value="2" label="Music interests" />
          <MultiSelectOption value="3" label="Religious affiliations" />
          <MultiSelectOption value="4" label="National origin" />
        </MultiSelectForm>
      </Box>
    </Container>
  );
}
