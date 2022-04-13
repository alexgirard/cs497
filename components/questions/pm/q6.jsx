import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TotalSumForm, CounterButton } from '../../form-input/TotalSumForm';

function createData(title, initial, final) {
  return { title, initial, final };
}

const options = [
  'Gather user feedback',
  'Focus on quality assurance',
  'Conduct ethical implication research',
  'Scope the project',
  'Perform risk assessment',
];

export function Stats({ item }) {
  const initialStateString = item?.fields?.pmq1;
  const finalStateString = item?.fields?.pmq6;

  const initialVals = initialStateString ? JSON.parse(initialStateString) : {};
  const finalVals = finalStateString ? JSON.parse(finalStateString) : {};

  const rows = options.map((o, index) =>
    createData(o, initialVals[index + 1], finalVals[index + 1])
  );

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="stats table">
        <TableHead>
          <TableRow>
            <TableCell>Categories</TableCell>
            <TableCell align="right">Initial Response</TableCell>
            <TableCell align="right">Final Response</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.initial}</TableCell>
              <TableCell align="right">{row.final}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function Q6({ item }) {
  return (
    <Container width="100%">
      <Typography variant="h4">Role: Product Manager</Typography>
      <Box width="100%" pt={2}>
        <Typography variant="h5">Question 6</Typography>
        <Typography>
          Back to the first question, the upper-level managers have assigned you
          to manage BetterWorld, and have given you 12 weeks to create a plan
          before engineering and design work begins. You have several categories
          you can focus your efforts on. Each point equals a week of work. Let's
          see how your answer changes!
        </Typography>
        <TotalSumForm
          item={item}
          title="How will you allocate your time?"
          total={12}
          fieldName="pmq6"
          defaultValFieldName="pmq1"
        >
          <CounterButton id="d1-1" label="Gather user feedback." />
          <CounterButton id="d1-2" label="Focus on quality assurance." />
          <CounterButton
            id="d1-3"
            label="Conduct ethical implication research."
          />
          <CounterButton id="d1-4" label="Revenue modeling." />
          <CounterButton id="d1-5" label="Scope the project." />
          <CounterButton id="d1-6" label="Perform risk assessment." />
        </TotalSumForm>
      </Box>
    </Container>
  );
}

export function info() {
  return (
    <Stack spacing={2}>
      <Typography>
        As you can see there are many different considerations when building a
        product, all which add additional time contraints. It is important to
        actively assess the bias, frequency, and harm implications your product
        has on various groups.
      </Typography>
    </Stack>
  );
}
