import React from 'react';
import { Typography, Link } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Image from 'next/image';
import {
  ThisOrThatForm,
  ThisOrThatOption,
} from '../../form-input/ThisOrThatForm';
import AgeStats from '../../AgeStats';

export function Stats() {
  return (
    <Stack spacing={3}>
      <Box>
        <FormLabel mb={3}>
          Which way to present shopping listings is better?
        </FormLabel>
        <Box mb={2} />
        <AgeStats field="dq5.1" options={['Left image', 'Right image']} />
      </Box>
      <Box pt={3}>
        <FormLabel mb={3}>
          Which way to navigate in a store is better?
        </FormLabel>
        <Box mb={2} />
        <AgeStats field="dq5.2" options={['Press buttons', 'Turn around']} />
      </Box>
      <Box pt={3}>
        <FormLabel>Which colour combination is better?</FormLabel>
        <Box mb={2} />
        <AgeStats field="dq5.3" options={['Left image', 'Right image']} />
      </Box>
    </Stack>
  );
}

export default function Q5({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Designer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 5</Typography>
        <Stack spacing={2}>
          <Typography>
            Next, we’ll be working on the shopping experience for Main Street
            stores. When a user visits a store, they’ll be able to view
            products, see detailed information about them, and checkout – all in
            VR.
          </Typography>
          <Typography>
            We have a few product decisions we’ll need to make regarding the
            user interfaces for this feature.
          </Typography>
        </Stack>
        <ThisOrThatForm
          title="Which way to present shopping listings is better?"
          item={item}
          fieldName="dq5.1"
        >
          <ThisOrThatOption>
            <Image src="/images/2-1.png" width="548" height="308" />
          </ThisOrThatOption>
          <ThisOrThatOption>
            <Image src="/images/2-2.png" width="548" height="308" />
          </ThisOrThatOption>
        </ThisOrThatForm>
        <ThisOrThatForm
          title="Which way to navigate in a store is better?"
          item={item}
          fieldName="dq5.2"
        >
          <ThisOrThatOption>
            User has to press buttons with their remote to view a different
            section of items
          </ThisOrThatOption>
          <ThisOrThatOption>
            User has to physically turn around to see a different view
          </ThisOrThatOption>
        </ThisOrThatForm>
        <ThisOrThatForm
          title="Which colour combination is better?"
          item={item}
          fieldName="dq5.3"
        >
          <ThisOrThatOption>
            <Image src="/images/1-1.png" width="548" height="308" />
          </ThisOrThatOption>
          <ThisOrThatOption>
            <Image src="/images/1-2.png" width="548" height="308" />
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
        For the presentation of shopping listings, it’s important to have
        alternative text for your images, and supplementary text where possible.
        If users have low vision, they could use screen readers to understand
        each product listing. Without text, certain users would be unable to use
        the shopping app.
      </Typography>
      <Typography>
        For the store navigation, consider that some users may be unable to
        physically turn, in which you should provide them with an option to use
        button controls. As well, although turning may reflect your real life
        experience in the store, not everyone may share that experience.
      </Typography>
      <Typography>
        Lastly, the better colour combination for the store is one with high
        contrast colours. If a user is colourblind or visually impaired, they
        may need to rely on contrast to differentiate objects on screen. Tools
        such as{' '}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://contrast-ratio.com/"
        >
          https://contrast-ratio.com/
        </Link>{' '}
        can help in checking if your colours have enough contrast – try it out!
      </Typography>
      <Typography>
        Overall, most of these decisions come down to accessibility and
        designing for all possible users. They’re important considerations for
        anyone who uses the app to make them feel included.
        <br />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://help.shopify.com/en/manual/online-store/themes/customizing-themes/accessibility"
        >
          https://help.shopify.com/en/manual/online-store/themes/customizing-themes/accessibility
        </Link>
      </Typography>
    </Stack>
  );
}
