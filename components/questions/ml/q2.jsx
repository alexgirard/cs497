import React from 'react';
import { Link, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { TotalSumForm, CounterButton } from '../../form-input/TotalSumForm';

export default function Q2({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: ML Engineer</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 2</Typography>
        <Typography>
          Now that we have a dataset, we’ll need to decide which facial features
          are relevant for our algorithm. For each feature, the amount of points
          you give will determine its priority in your algorithm.
        </Typography>
        <TotalSumForm
          item={item}
          title="We have 10 different points that we can split up between the features for a face."
          total={10}
          fieldName="mlq2"
        >
          <CounterButton id="eyes" label="Sensing changes in eyes" />
          <CounterButton id="mouth" label="Sensing changes in mouth" />
          <CounterButton id="eyebrows" label="Sensing changes in eyebrows" />
        </TotalSumForm>
      </Box>
    </Container>
  );
}

export function info() {
  return (
    <Stack spacing={2}>
      <Typography>
        For those from a Chinese background, the eyes are a stronger indicator
        of facial expressions. On the other hand, for Western Caucasians, the
        eyebrows and mouth carry more weight.
      </Typography>
      <Typography>
        If BetterWorld is to be released globally, the understanding of facial
        features is something to consider. If your algorithm placed more
        emphasis on one feature than the other, you may lose the recognition of
        expressions from certain groups, or it may lead to misunderstandings
        among users if false positives of expression recognition occur.
      </Typography>
      <Typography>
        RAF-DB:{' '}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.whdeng.cn/raf/model1.htm"
        >
          http://www.whdeng.cn/raf/model1.html
        </Link>
        ,{' '}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://arxiv.org/abs/2103.08637"
        >
          https://arxiv.org/abs/2103.08637
        </Link>
      </Typography>
      <Typography>
        Perception of Facial Expressions Across Cultures:{' '}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.apa.org/news/press/releases/2011/09/facial-expressions"
        >
          https://www.apa.org/news/press/releases/2011/09/facial-expressions{' '}
        </Link>
      </Typography>
    </Stack>
  );
}
