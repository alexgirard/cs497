import React, { useState, cloneElement, useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { blue } from '@mui/material/colors';
import { ItemsContext } from '../../context/items';

const stateObjectToString = (statesContainer, counterIndex, updatedCount) => {
  const updatedState = {};
  Object.keys(statesContainer).forEach((key) => {
    const [count] = statesContainer[key];
    const countState = key === String(counterIndex) ? updatedCount : count;
    updatedState[key] = countState;
  });
  return JSON.stringify(updatedState);
};

export const CounterButton = ({
  label,
  id,
  setCounter,
  counter,
  disableIncrement,
}) => (
  <Box display="flex">
    <Box
      mr={2}
      width="100%"
      maxWidth="160px"
      display="flex"
      alignItems="center"
    >
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

export function TotalSumForm({ item, title, children, total, fieldName }) {
  const { updateItem } = useContext(ItemsContext);

  const counterStates = {};
  children.forEach((_, index) => {
    const [counter, _setCounter] = useState(0);
    const setCounter = (val) => {
      _setCounter(val);
    };
    counterStates[index] = [counter, setCounter];
  });

  useEffect(() => {
    // Runs only the first time item variable gets set from undefined
    // Set initial state from Airtable
    const stateString = item?.fields[fieldName];
    if (stateString) {
      const stateObject = JSON.parse(stateString);
      Object.keys(counterStates).forEach((key) => {
        const [, setCounter] = counterStates[key];
        setCounter(stateObject[key]);
      });
    }
  }, [item]);

  const counterSum = () => {
    let sum = 0;
    Object.values(counterStates).forEach((counterState) => {
      sum += counterState[0];
    });
    return sum;
  };

  const reachedSum = () => counterSum() >= total;

  const onCounterChange = (counterIndex, updatedCount) => {
    const updatedFields = { ...item?.fields };
    updatedFields[fieldName] = stateObjectToString(
      counterStates,
      counterIndex,
      updatedCount
    );
    const updatedItem = { id: item?.id, fields: updatedFields };
    updateItem(updatedItem);

    const [, setCounter] = counterStates[counterIndex];
    setCounter(updatedCount);
  };

  return (
    <Stack mt={3}>
      <FormLabel>{`${title} You have set ${counterSum()}/${total}.`}</FormLabel>
      <Grid container rowSpacing={6} alignItems="center" mt={0}>
        {children.map((child, childIndex) => (
          <Grid item xs={6} md={4} key={child.props.id} width="100%">
            {cloneElement(child, {
              setCounter: (val) => onCounterChange(childIndex, val),
              counter: counterStates[childIndex][0],
              disableIncrement: reachedSum(),
            })}
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
