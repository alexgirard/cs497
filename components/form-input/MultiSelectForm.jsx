import React, { useContext, useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Container from '@mui/material/Container';
import { ItemsContext } from '../../context/items';

const stateObjectToString = (statesContainer, updatedValue) => {
  const updatedState = {};
  Object.keys(statesContainer).forEach((optionName) => {
    const [checked] = statesContainer[optionName];
    const updatedChecked = updatedValue === optionName ? !checked : checked;
    updatedState[optionName] = updatedChecked;
  });
  return JSON.stringify(updatedState);
};

export const MultiSelectForm = ({ children, title, item, fieldName }) => {
  const { updateItem } = useContext(ItemsContext);

  const checkedStates = {};
  children.forEach((child) => {
    checkedStates[child.props.value] = useState(false);
  });

  useEffect(() => {
    // Runs only the first time item variable gets set from undefined
    // Set initial state from Airtable
    const stateString = item?.fields[fieldName] ?? '{}';
    const stateObject = JSON.parse(stateString);
    Object.keys(checkedStates).forEach((optionName) => {
      const [, setChecked] = checkedStates[optionName];
      setChecked(stateObject[optionName]);
    });
  }, [item]);

  const handleChange = (event) => {
    const updatedFields = { ...item?.fields };
    updatedFields[fieldName] = stateObjectToString(
      checkedStates,
      event.target.value,
    );
    const updatedItem = { id: item?.id, fields: updatedFields };
    updateItem(updatedItem);

    const [checked, setChecked] = checkedStates[event.target.value];
    setChecked(!checked);
  };

  return (
    <Container sx={{ p: 4 }}>
      <FormControl>
        <FormLabel>{title}</FormLabel>
        <FormGroup onChange={handleChange}>
          {children.map((child) => (
            <FormControlLabel
              value={child.props.value}
              label={child.props.label}
              control={
                <Checkbox checked={checkedStates[child.props.value][0]} />
              }
            />
          ))}
        </FormGroup>
      </FormControl>
    </Container>
  );
};

export const MultiSelectOption = ({ value, label }) => (
  <FormControlLabel value={value} control={<Checkbox />} label={label} />
);
