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
        If we were to verify users with government ID, this could lead to
        discriminatory impacts for certain groups. An example of this occurred
        with Facebook’s real name policy.
      </Typography>
      <Typography>
        Facebook requires you to use your real name when creating an account –
        and if a user doesn’t comply, they’ll have to submit several copies of
        identification to prove it. However, this directly impacts marginalized
        groups such as Aboriginal users, and those in the queer community such
        as drag queens. When an account is flagged as using a fake name, they’ll
        be locked out, stating they must provide ID or change their name before
        regaining access.
        <br />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.theguardian.com/technology/2015/feb/16/facebook-real-name-policy-suspends-native-americans"
        >
          https://www.theguardian.com/technology/2015/feb/16/facebook-real-name-policy-suspends-native-americans
        </Link>
      </Typography>
      <Typography>
        If we were to perform validation or length checking, we may also run
        into issues with the many combinations of last names with spaces or
        hyphens, short lengths of two characters (common with many Asian last
        names), longer last names (seen in Hawaiian citizens) or apostrophes.
        <br />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.bbc.com/future/article/20160325-the-names-that-break-computer-systems"
        >
          https://www.bbc.com/future/article/20160325-the-names-that-break-computer-systems
        </Link>
      </Typography>
      <Typography>
        Both the second and third options will allow us to have users with the
        freedom of typing out their name, without facing difficulty.
      </Typography>
    </Stack>
  );
}
