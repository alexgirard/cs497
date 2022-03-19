import React, { useState, cloneElement } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { blue } from '@mui/material/colors';

export const CounterButton = ({
  label,
  id,
  setCounter,
  counter,
  disableIncrement,
}) => (
  <Box display="flex">
    <Box mr={1} alignSelf="center">
      {label}
    </Box>
    <ButtonGroup orientation="vertical">
      <Button
        key={`${id}-plus-button`}
        disableElevation
        variant="contained"
        onClick={() => setCounter(counter + 1)}
        disabled={disableIncrement}
      >
        <AddIcon />
      </Button>
      <Button
        key={`${id}-value-button`}
        id={`${id}-counter-value`}
        disableElevation
        disabled
        style={{ color: 'black', borderColor: `${blue[700]}` }}
      >
        {counter}
      </Button>
      <Button
        key={`${id}-minus-button`}
        disableElevation
        variant="contained"
        onClick={() => setCounter(counter - 1)}
        disabled={counter <= 0}
      >
        <RemoveIcon />
      </Button>
    </ButtonGroup>
  </Box>
);

export function TotalSumForm({ title, children, total }) {
  const counterStates = {};
  children.forEach((_, index) => {
    counterStates[index] = useState(0);
  });

  const reachedSum = () => {
    let counterSum = 0;
    Object.values(counterStates).forEach((counterState) => {
      counterSum += counterState[0];
    });
    return counterSum >= total;
  };

  return (
    <Container sx={{ p: 4 }}>
      <FormLabel>{title}</FormLabel>
      <Grid container spacing={10} alignItems="center">
        {children.map((child, childIndex) => (
          <Grid item xs={6} md={6} key={child.props.id}>
            {cloneElement(child, {
              setCounter: counterStates[childIndex][1],
              counter: counterStates[childIndex][0],
              disableIncrement: reachedSum(),
            })}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
