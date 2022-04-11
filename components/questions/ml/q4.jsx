import React from 'react';
import { Link, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
  ThisOrThatForm,
  ThisOrThatOption,
} from '../../form-input/ThisOrThatForm';

export default function Q4({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: ML Engineer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 4</Typography>
        <Stack spacing={2}>
          <Typography>
            Text chat is one way that users can interact with each other.
            However, we want to prevent hateful language from being used on our
            platform to improve the experience of our users. To do so, we’ll
            need a moderation system for BetterWorld using machine learning.
          </Typography>
          <Typography>
            We’ll need to create an algorithm that detects when inappropriate
            conversations or harassment is occurring. We will then give out
            warnings or apply disciplinary action where necessary.
          </Typography>
          <Typography>
            Next is to focus on our text detection algorithm. This algorithm is
            still in the initial planning stages, and we need to choose a text
            analysis method. Unfortunately, due to time constraints, we can only
            choose one option to focus on.
          </Typography>
        </Stack>
        <ThisOrThatForm
          title="Which would you focus on?"
          item={item}
          fieldName="mlq4"
        >
          <ThisOrThatOption>
            Identify explicit and sensitive words.
          </ThisOrThatOption>
          <ThisOrThatOption>
            Analyze the sentiment of full sentences and phrases to determine if
            harassment is occurring.
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
        <b>Identifying explicit and sensitive words </b> to filter out sensitive
        content may seem great, but people with seemingly “rude” names can
        experience discrimination when faced with offensive language filters
        such as these.
      </Typography>
      <Typography>
        On Twitter, Natalie Weiner (@natalieweiner) experienced her frustration
        when a user sign-up page blocked her last name on the premise of
        “offensive language”. How can a computer determine your name is “valid”
        when compared to a list of explicit words, and is taken out of context?
        A semantic challenge is presented, requiring more context than an AI
        could handle.
      </Typography>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://news.canningspurple.com.au/when-technology-says-no-to-your-dirty-name/"
      >
        https://news.canningspurple.com.au/when-technology-says-no-to-your-dirty-name/
      </Link>
      <Typography>
        If we use a <b>context aware machine learning approach</b>, we can catch
        messages that may slip under the radar with an explicit keyword
        detection system. As well, with simple keyword searching we could
        produce false positives. A notable example of this technology can be
        found in Slack bots – to report sexual harassment in the workplace or to
        improve the use of inclusive language.
      </Typography>
      <Stack>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://venturebeat.com/2019/02/01/valued-raises-1-7-million-for-slack-chatbot-that-helps-combat-workplace-harassment/"
        >
          https://venturebeat.com/2019/02/01/valued-raises-1-7-million-for-slack-chatbot-that-helps-combat-workplace-harassment/
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.awarehq.com/blog/identifying-and-reducing-workplace-sexual-harassment-with-ai"
        >
          https://www.awarehq.com/blog/identifying-and-reducing-workplace-sexual-harassment-with-ai
        </Link>
      </Stack>
    </Stack>
  );
}
