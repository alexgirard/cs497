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
      <h1>Role: Designer</h1>
      <Box width="100%" pt={4}>
        <h2>Question 2</h2>
        <Typography>
          You need to design a user login. The higher-ups at your company have
          decided that they want the identities of users to accurately represent
          the user, so only “real names” are allowed. How do you ensure users
          are doing this?
        </Typography>
        <MultiSelectForm
          title="Select any that apply"
          item={item}
          fieldName="dq2"
        >
          <MultiSelectOption value="1" label="Verifying ID" />
          <MultiSelectOption value="2" label="Specify first and last name" />
          <MultiSelectOption value="3" label="Allow free form name input" />
          <MultiSelectOption
            value="4"
            label="Perform validation the user isn’t inputting random letters?"
          />
          <MultiSelectOption value="5" label="Perform length checking" />
        </MultiSelectForm>
      </Box>
    </Container>
  );
}
