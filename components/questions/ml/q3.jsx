import React from 'react';
import { Link, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
  ThisOrThatForm,
  ThisOrThatOption,
} from '../../form-input/ThisOrThatForm';

export default function Q3({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: ML Engineer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 3</Typography>
        <Stack spacing={2}>
          <Typography>
            Users in BetterWorld can enhance their gameplay by saying voice
            commands to perform certain tasks. For example, a user can say
            “Bring me to Main Street” to get them back to the main game area. To
            understand our users’ commands, we’ll need to create a speech
            recognition algorithm to understand the commands that users can say
            in game.
          </Typography>
          <Typography>
            There are two prototype algorithms our team has developed, and we
            need to choose one to fully complete and use in BetterWorld.
          </Typography>
        </Stack>
        <ThisOrThatForm
          title="Which would you select?"
          item={item}
          fieldName="mlq3"
        >
          <ThisOrThatOption>
            A precise algorithm that can understand English phrases with a low
            error rate.
          </ThisOrThatOption>
          <ThisOrThatOption>
            A localization-friendly algorithm that has trained on several major
            languages and English accents, but produces errors at a higher
            frequency.
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
        With a <b>precise algorithm that can understand English phrases</b>,
        we’re able to catch most of the hateful language and comments. However,
        users have found ways to circumvent this by saying insults in other
        languages.
      </Typography>
      <Typography>
        On average, the error rates for voice recognition systems are
        significantly higher for those with accents. For African American
        voices, the word error rate is 35% for some of the world’s most common
        speech recognition systems – including Siri, Alex, Google Assistant, and
        others.
      </Typography>
      <Typography>
        One’s accent can affect how they are perceived, and this is also
        reflected in the algorithms that exist in our technology.
      </Typography>
      <Typography>
        <Stack>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://venturebeat.com/2021/04/01/study-finds-that-even-the-best-speech-recognition-systems-exhibit-bias/"
          >
            https://venturebeat.com/2021/04/01/study-finds-that-even-the-best-speech-recognition-systems-exhibit-bias/
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.scientificamerican.com/article/speech-recognition-tech-is-yet-another-example-of-bias/"
          >
            https://www.scientificamerican.com/article/speech-recognition-tech-is-yet-another-example-of-bias/
          </Link>
        </Stack>
      </Typography>
      <Typography>
        With a <b>localization-friendly algorithm</b>, we’re able to cover more
        markets than just English – improving accessibility for users outside of
        major markets. However, users may find frustration if their commands
        aren’t properly understood by the machine, turning them away from using
        the voice feature entirely.
      </Typography>
    </Stack>
  );
}
