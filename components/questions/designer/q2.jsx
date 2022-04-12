import React from 'react';
import { Typography, Link } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
  ThisOrThatForm,
  ThisOrThatOption,
} from '../../form-input/ThisOrThatForm';

export default function Q2({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Designer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 2</Typography>
        <Typography>
          We’ve now created a prototype of the physical headset, and we want to
          test the fit on potential users.
        </Typography>
        <ThisOrThatForm
          title="What group should we prioritize?"
          item={item}
          fieldName="dq2"
        >
          <ThisOrThatOption>
            Team members and other company members.
          </ThisOrThatOption>
          <ThisOrThatOption>
            A diverse sample of potential users.
          </ThisOrThatOption>
        </ThisOrThatForm>
      </Box>
    </Container>
  );
}

export function info() {
  return (
    <Stack spacing={2}>
      <Typography>
        If we select our group from team members and other company members, we
        will likely have technology savvy users with prior knowledge of the
        project. The people we select may also be similar in age, and experience
        with technology.
      </Typography>
      <Typography>
        If we select a diverse sample of potential users, we can select those
        from a larger range of backgrounds. For example, those who have never
        experienced a VR headset before, or those who are elderly or have a
        disability. We need to consider that our users could have intersectional
        experiences as well – overlapping cultural identities and traits that
        impact their lives, and provide more insights to us.
      </Typography>
      <Typography>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://uxinsight.org/resources-for-a-more-inclusive-ux-research-practice/"
        >
          https://uxinsight.org/resources-for-a-more-inclusive-ux-research-practice/
        </Link>
      </Typography>
    </Stack>
  );
}
