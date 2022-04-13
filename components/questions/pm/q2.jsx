import React from 'react';
import { Typography, Link } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
  MultiSelectForm,
  MultiSelectOption,
} from '../../form-input/MultiSelectForm';

export const options = [
  'Race or ethnicity',
  'Music interests',
  'Religious affiliations',
  'Nationality',
  'Sexual orientation',
  'Age demographics',
  'Sports interests',
  'Gender-based groups',
  'Political beliefs',
];

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
          {options.map((o, index) => (
            <MultiSelectOption value={index + 1} label={o} />
          ))}
        </MultiSelectForm>
      </Box>
    </Container>
  );
}

export function info() {
  return (
    <Stack spacing={2}>
      <Typography>
        The characteristics <b>race or ethnicity</b>,{' '}
        <b>religious affiliations</b>, <b>nationality</b>,
        <b>sexual orientation</b>, <b>age demographics</b>, and{' '}
        <b>gender-based groups</b> are all protected classes. Protected classes
        refer to groups of people who are legally protected from being harmed or
        harassed by laws, practices, and policies that discriminate against them
        due to a shared characteristic. In many regions, the collection or
        algorithmic use of data with protected classes is prohibited.
      </Typography>
      <Typography>
        A complete list of the protected classes can be found at{' '}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://ca.practicallaw.thomsonreuters.com/5-501-5857"
        >
          https://ca.practicallaw.thomsonreuters.com/5-501-5857
        </Link>
      </Typography>
      <Typography>
        Through these protected classes, machine learning algorithms can
        perpetuate existing racial, gender, and class-based inequities. We’ve
        seen these issues brought to public attention in documentaries such as
        Coded Bias on Netflix (2020).
        <br />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.netflix.com/ca/title/81328723 "
        >
          https://www.netflix.com/ca/title/81328723
        </Link>
      </Typography>

      <Typography>
        On the other hand, using protected classes has been shown to reduce
        discrimination, but it’s important to carefully consider how the
        collection of this data could still result in misuse before updating
        regulations. One example is findings from the study from Kelley et al,
        in which the inclusion of gender in fintech lending led to a reduction
        in discrimination and negligible impact on the quality of predictions.
        <br />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3719577"
        >
          https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3719577
        </Link>
      </Typography>
    </Stack>
  );
}
