import React from 'react';
import { Typography, Link } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { TotalSumForm, CounterButton } from '../../form-input/TotalSumForm';

export default function Q1({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Designer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 1</Typography>
        <Typography>
          The first task is to design a virtual reality headset with the
          hardware team. You have 15 hours to use, and you can divide them
          across several focuses.
        </Typography>
        <TotalSumForm
          item={item}
          title="How will you allocate your time?"
          total={15}
          fieldName="dq1"
        >
          <CounterButton
            id="d1-1"
            label="Conduct exploratory user interviews on how users want to use the headset."
          />
          <CounterButton
            id="d1-2"
            label="Determine your dominant user groups through market research."
          />
          <CounterButton
            id="d1-3"
            label="Find a diverse sample of participants for focus groups."
          />
          <CounterButton
            id="d1-4"
            label="Focus on designing around accessibility guidelines."
          />
          <CounterButton
            id="d1-5"
            label="Create a physical prototype of the headset."
          />
        </TotalSumForm>
      </Box>
    </Container>
  );
}

export function info() {
  return (
    <Stack spacing={2}>
      <Typography>
        All aspects we’ve addressed share importance in various areas. By
        conducting user interviews, we can gain insight into how users will
        interact with the headset, and defining user groups can help us tailor
        our product.
      </Typography>
      <Typography>
        However, it is important to focus on both diversity and accessibility
        when designing for a wide user audience. This includes being inclusive
        of age, race, gender, and not intentionally or unintentionally excluding
        a certain user segment when conducting research.
      </Typography>
      <Typography>
        In Evie Cheng’s article from UX Collective, she emphasizes the
        importance of involving more people throughout the design and research
        process. With participatory design, an approach that reaches equality
        between researcher and participant, collaboration and engagement can
        lead to more inclusive design.
        <br />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://uxdesign.cc/designing-a-better-future-with-inclusive-user-research-fb6a2a1c7c73"
        >
          https://uxdesign.cc/designing-a-better-future-with-inclusive-user-research-fb6a2a1c7c73
        </Link>
      </Typography>
    </Stack>
  );
}
