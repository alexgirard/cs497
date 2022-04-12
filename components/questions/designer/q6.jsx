import React from 'react';
import { Typography, Link } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { RadioForm, RadioOption } from '../../form-input/RadioForm';

export default function Q5({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Designer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 6</Typography>
        <Typography>
          Although our team is based out of an English-speaking country,
          BetterWorld will be available internationally. However, we’ll need to
          make decisions on whether to localize the software for global markets.
        </Typography>
        <RadioForm
          title="Which option should you choose?"
          item={item}
          fieldName="dq6"
        >
          <RadioOption
            value="1"
            label="Only support English, and launch in one month."
          />
          <RadioOption
            value="2"
            label="Just translate all text, and launch in four months."
          />
          <RadioOption
            value="3"
            label="Spend time developing full localization, including voice recognition, and launch in one year."
          />
        </RadioForm>
      </Box>
    </Container>
  );
}

export function info() {
  return (
    <Stack spacing={2}>
      <Typography>
        The decision of localization can have impacts on how well your product
        is received in global markets. Although at first glance, it may sound as
        simple as translating all text into other languages – but it extends far
        beyond just words. In other cultures, there may be gestures, symbols, or
        imagery that should be changed as it is not longer appropriate. As well,
        for some languages, text may need to be written right-to-left, or
        special characters such as Chinese and Japanese need to be supported.
        This is a crucial part of inclusive design, as other locales should feel
        comfortable using the app in their native language or region with as
        smooth of a user interface as English speakers.
        <br />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.forbes.com/sites/forbesbusinesscouncil/2022/01/24/three-important-aspects-of-localization-often-overlooked-by-small-businesses/?sh=697ad3b92847"
        >
          https://www.forbes.com/sites/forbesbusinesscouncil/2022/01/24/three-important-aspects-of-localization-often-overlooked-by-small-businesses/?sh=697ad3b92847
        </Link>
      </Typography>
    </Stack>
  );
}
