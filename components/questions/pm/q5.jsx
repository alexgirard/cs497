import React from 'react';
import { Typography, Link } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
  ThisOrThatForm,
  ThisOrThatOption,
} from '../../form-input/ThisOrThatForm';

export default function Q5({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Product Manager</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 5</Typography>
        <Typography>
          In the beta release of BetterWorld, the team received reports of users
          spending long hours in-game without breaks. Although this is great for
          profit margins, as more users spent on the platform results in greater
          revenue, there could be negative mental and physical effects on the
          users.
        </Typography>
        <ThisOrThatForm
          title="What should we do to address these concerns?"
          item={item}
          fieldName="pmq5"
        >
          <ThisOrThatOption>
            Implement playtime limits or reminders for the health of our users.
          </ThisOrThatOption>
          <ThisOrThatOption>
            Keep the product the way it is, and give users the tools to impose
            their own limits (i.e. Do Not Disturb mode on iOS devices)
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
        Prolonged usage of social media has been shown to have negative
        psychological effects on users. In particular, social media has been
        shown to be tied with depression in adult users. Social media use has
        become a big part of young adults’ lives with around 90% of young adults
        in the US using platforms at least once a day.
        <br />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://onlinelibrary.wiley.com/doi/full/10.1002/da.22466"
        >
          https://onlinelibrary.wiley.com/doi/full/10.1002/da.22466
        </Link>
      </Typography>
      <Typography>
        In adolescents, a large part of their identities is tied to their
        digital selves. Adolescents display less interest in performing
        effective roles in society or in academic achievement. The teenage years
        are developmentally important as it is when many find a sense of social
        identity and develop their value systems. Elsayed explores further in
        their paper how social media has stunted the development of adolescents:
        <br />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://doi.org/10.1016/j.heliyon.2021.e06327"
        >
          https://doi.org/10.1016/j.heliyon.2021.e06327
        </Link>
      </Typography>
      <Typography>
        Studies showed that Instagram had particularly negative mental health
        effects on teenage girls, with one in three girls experiencing worsening
        body-image issues.
        <br />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.theverge.com/2021/9/15/22675130/facebook-instagram-teens-mental-health-damage-internal-research"
        >
          https://www.theverge.com/2021/9/15/22675130/facebook-instagram-teens-mental-health-damage-internal-research
        </Link>
      </Typography>
      <Typography>
        In response, Instagram launched its “Take a Break” feature to remind
        users to not spiral too deeply on any particular topic.
        <br />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.theverge.com/2021/11/10/22774827/instagram-take-a-break-feature-test-meta-facebook"
        >
          https://www.theverge.com/2021/11/10/22774827/instagram-take-a-break-feature-test-meta-facebook
        </Link>
      </Typography>
      <Typography>
        Ultimately, it’s an important but difficult task to balance allowing
        users full control over their browsing patterns while not facilitating
        harmful habits.
      </Typography>
    </Stack>
  );
}
