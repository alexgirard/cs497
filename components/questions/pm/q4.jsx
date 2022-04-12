import React from 'react';
import { Typography, Link } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { RadioForm, RadioOption } from '../../form-input/RadioForm';

export default function Q4({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Product Manager</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 4</Typography>
        <Stack spacing={2}>
          <Typography>
            We’ve been receiving reports of hate speech from others on the
            platform. Community members of BetterWorld have been advocating on
            social media for this to be looked at.
          </Typography>
          <Typography>
            Should you filter and remove this hate speech from the platform all
            together? Or should you flag conversations, and give warnings to
            those using negative language?
          </Typography>
        </Stack>
        <RadioForm
          title="Pick a course of action."
          item={item}
          fieldName="pmq4"
        >
          <RadioOption value="1" label="Do nothing." />
          <RadioOption
            value="2"
            label="Give warnings to users who use negative language."
          />
          <RadioOption value="3" label="Remove the content all together." />
        </RadioForm>
      </Box>
    </Container>
  );
}

export function info() {
  return (
    <Stack spacing={2}>
      <Typography>
        It’s important to ensure our platform is a safe and fun space for all
        users, so it’s important to have policies around how to handle hate
        speech.
      </Typography>
      <Typography>
        Algorithmic solutions to identify hate speech or negative language can
        be cheap ways to moderate a site, but many of these algorithms in the
        past have shown to disproportionately impact racial minorities and
        women:
        <Stack>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://12ft.io/proxy?q=https%3A%2F%2Fwww.washingtonpost.com%2Ftechnology%2F2021%2F11%2F21%2Ffacebook-algorithm-biased-race%2F"
          >
            www.washingtonpost.com/technology/2021/11/21/facebook-algorithm-biased-race
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.refinery29.com/en-gb/2020/12/10150275/shadow-ban-instagram-censorship-women-of-colour"
          >
            https://www.refinery29.com/en-gb/2020/12/10150275/shadow-ban-instagram-censorship-women-of-colour
          </Link>
        </Stack>
      </Typography>
      <Typography>
        Speech on online platforms is not a simple discussion. It is difficult
        to draw the line between protecting free expression vs protecting users
        against hate. The article below touches on the complexities of
        responsibility both for social media companies and the government:
        <Stack>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.theatlantic.com/ideas/archive/2019/09/facebook-restricts-free-speech-popular-demand/598462/"
          >
            https://www.theatlantic.com/ideas/archive/2019/09/facebook-restricts-free-speech-popular-demand/598462/
          </Link>
        </Stack>
      </Typography>
    </Stack>
  );
}
