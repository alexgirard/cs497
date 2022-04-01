import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function CaseStudy() {
  return (
    <Stack spacing={4} width="100%" maxWidth="700px">
      <Typography>
        Welcome to YourSpace! We’re a company working on the latest technology
        to connect people and create communities through virtual reality.
      </Typography>
      <Typography>
        You’ll be working on our core product team to build a new VR immersive
        experience – <b>BetterWorld</b>. BetterWorld can be used by anyone who
        has a video camera – our state-of-the-art software uses machine learning
        to detect facial expressions and movements. As you react in the real
        world, your avatar will do the same in game!
      </Typography>
      <Typography>
        The hub of BetterWorld is Main Street, filled with social spaces and
        shops tailored to your preferences. You can meet others in bars, parks
        and libraries, and shops.
      </Typography>
      <Typography>
        For this simulation, you’ll be put in the shoes of three key team
        members – the machine learning lead, the designer, and the product
        manager. As your role, we’ll give you a series of product decisions you
        would come across while creating BetterWorld, and the implications these
        decisions have, relating to real world examples.
      </Typography>
    </Stack>
  );
}
