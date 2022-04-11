import React from 'react';
import { Typography, Link } from '@mui/material';
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
      <Typography variant="h4">Role: Product Manager</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 3</Typography>
        <Stack spacing={2}>
          <Typography>
            The development period is completed and BetterWorld has been
            released to the public! However, your stakeholders are pushing for
            profit. You do not have any infrastructure for tiered subscriptions
            or other money-making features.
          </Typography>
          <Typography>
            To implement these features it will take time and many development
            hours, and some of your stakeholders may lose interest. On the other
            hand, we have usage data from our initial users, which could be sold
            to third party companies.
          </Typography>
        </Stack>
        <ThisOrThatForm
          title="What should you do?"
          item={item}
          fieldName="pmq3"
        >
          <ThisOrThatOption>
            Implement a tiered subscription feature, at the cost of delayed
            revenue.
          </ThisOrThatOption>
          <ThisOrThatOption>
            Sell initial user data to turn a short-term profit.
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
        Selling user data can expose your users to large privacy concerns beyond
        what users could have reasonably consented to. When user data is sold to
        third parties, those third parties can sell the data further. Data
        profiles can have huge impacts on users from targeted ad profiles to
        revealing personally identifiable information. Some notable examples
        include the below.
      </Typography>
      <Typography>
        In 2018, Cambridge Analytica famously began selling political profiles
        of Facebook users from data it acquired through a loophole in the
        platform’s API.
        <Stack>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.vox.com/policy-and-politics/2018/3/23/17151916/facebook-cambridge-analytica-trump-diagram"
          >
            https://www.vox.com/policy-and-politics/2018/3/23/17151916/facebook-cambridge-analytica-trump-diagram
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.ama.org/marketing-news/the-murky-ethics-of-data-gathering-in-a-post-cambridge-analytica-world/"
          >
            https://www.ama.org/marketing-news/the-murky-ethics-of-data-gathering-in-a-post-cambridge-analytica-world/
          </Link>
        </Stack>
      </Typography>

      <Typography>
        In 2021, a high-ranking priest was outed for being a Grindr after
        journalists acquired location data sold by Grindr. This data was
        cross-referenced with the known locations of the priest in order to
        confirm the device on the app belonged to him.
        <br />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.americamagazine.org/faith/2021/07/22/catholic-church-spying-pillar-burrill-grindr-usccb-privacy-241106"
        >
          https://www.americamagazine.org/faith/2021/07/22/catholic-church-spying-pillar-burrill-grindr-usccb-privacy-241106
        </Link>
      </Typography>

      <Typography>
        In the metaverse, selling user data can even darker consequences with
        access to biometric data:
        <br />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.washingtonpost.com/technology/2022/01/13/privacy-vr-metaverse/"
        >
          https://www.washingtonpost.com/technology/2022/01/13/privacy-vr-metaverse/
        </Link>
      </Typography>
    </Stack>
  );
}
