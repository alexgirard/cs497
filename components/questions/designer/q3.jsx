import React from 'react';
import { Typography, Link } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
  MultiSelectForm,
  MultiSelectOption,
} from '../../form-input/MultiSelectForm';

export default function Q3({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Designer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 3</Typography>
        <Typography>
          Next, we’ll work on creating a user login. The stakeholders at your
          company have decided that they want a user’s in-game profile should
          mirror the real world user. To do so, they want only “real names” to
          be allowed. How do you ensure users are doing so?
        </Typography>
        <MultiSelectForm
          title="Check all that apply."
          item={item}
          fieldName="dq3"
        >
          <MultiSelectOption
            value="1"
            label="Verify users with government ID."
          />
          <MultiSelectOption
            value="2"
            label="Specify first name and last name on registration."
          />
          <MultiSelectOption value="3" label="Allow free form name input." />
          <MultiSelectOption
            value="4"
            label="Perform validation on names to ensure people aren’t using random letters."
          />
          <MultiSelectOption value="5" label="Perform length checking." />
        </MultiSelectForm>
      </Box>
    </Container>
  );
}

export function info() {
  return (
    <Stack spacing={2}>
      <Typography>
       g
      </Typography>
      <Typography>
      3
      </Typography>
      <Typography>
1
      </Typography>
      <Typography>
        <Stack>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href=""
          > 
          </Link>
        </Stack>
      </Typography>
      <Typography>
       test
      </Typography>
    </Stack>
  );
  }
