import React from 'react';
import { Typography, Link } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
  MultiSelectForm,
  MultiSelectOption,
} from '../../form-input/MultiSelectForm';

export default function Q4({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Designer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 4</Typography>
        <Stack spacing={2}>
          <Typography>
            At YourSpace, privacy and safety is one of our core product pillars.
          </Typography>
          <Typography>
            Along with the AI solutions we discussed earlier, we want
            BetterWorld to have robust moderation systems in place to prevent
            harassment and protecting the privacy of our users. The design team
            has brainstormed a variety of ways to achieve safety.
          </Typography>
          <Typography>
            Of the ones below, select the <b>three</b> most important methods to
            prevent malicious behaviour.
          </Typography>
        </Stack>
        <MultiSelectForm
          title="Choose up to 3 methods"
          item={item}
          fieldName="dq4"
        >
          <MultiSelectOption
            value="1"
            label="A way to report users and ban them. "
          />
          <MultiSelectOption
            value="2"
            label="A way for users to block other users."
          />
          <MultiSelectOption
            value="3"
            label="Showing a list of nearby users while in-game."
          />
          <MultiSelectOption
            value="4"
            label="Have moderators be present in social spaces."
          />
          <MultiSelectOption
            value="5"
            label="Turn off voice chat or text chat for specific users."
          />
        </MultiSelectForm>
      </Box>
    </Container>
  );
}

export function info() {
  return (
    <Stack spacing={2}>
      <Typography>
        All of the answers above are ways to mitigate abuse on online platforms.
        However, these moderation efforts can only go so far.
      </Typography>
      <Typography>
        Clubhouse is an app that allows people to host live audio rooms for
        people to discuss topics and meet each other. In these rooms, you can
        elect moderators – but people can still say whatever they want in these
        rooms. This means rooms can be platforms of propaganda, or targets of
        hate speech. In one instance, a Cantonese-speaking room had someone mock
        their language and brought up insensitive topics irrelevant to what was
        being discussed. Although the reporting can occur afterwards, the
        incidents disrupt the conversation and can leave some users taken aback.
        <br />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.wired.co.uk/article/clubhouse-app-privacy-security"
        >
          https://www.wired.co.uk/article/clubhouse-app-privacy-security
        </Link>
      </Typography>
      <Typography>
        On a tangential note, systems in place that are meant to help users
        still have the potential to harm them. One example is Apple’s AirTags,
        designed to help track lost items such as your keys, wallet, or bag,
        without wi-fi or cellular service. However, malicious users have turned
        them into stalking tools, attaching them unknowingly to women’s cars.
        This enables stalkers to track their victim’s locations, putting womens’
        lives at risk. Users with Apple devices can see these tags, but those
        with Androids or any other phone types are out of luck. Although
        intended as a useful safety feature, AirTags manage to accomplish the
        opposite for women.
        <br />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.vice.com/en/article/y3vj3y/apple-airtags-police-reports-stalking-harassmenty"
        >
          https://www.vice.com/en/article/y3vj3y/apple-airtags-police-reports-stalking-harassment
        </Link>
      </Typography>
    </Stack>
  );
}
