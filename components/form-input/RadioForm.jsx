import React, { useContext, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Container from '@mui/material/Container';
import { ItemsContext } from '../../context/items';

export const RadioForm = ({ children, title, item, fieldName }) => {
  const { updateItem } = useContext(ItemsContext);
  
  const [value, setValue] = React.useState(null);
  useEffect(() =>{
    // Runs only the first time item variable gets set from undefined
    setValue(item?.fields[fieldName])
  }, [item]) 

  const handleChange = (event) => {
    setValue(event.target.value);
    const updatedFields = { ...item?.fields };
    updatedFields[fieldName] = event.target.value;
    const updatedItem = { id: item?.id, fields: updatedFields };
    updateItem(updatedItem);
  };

  return (
    <Container sx={{ p: 4 }}>
      <FormControl>
        <FormLabel>{title}</FormLabel>
        <RadioGroup
          name="radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {children}
        </RadioGroup>
      </FormControl>
    </Container>
  );
};

export const RadioOption = ({ value, label }) => (
  <FormControlLabel value={value} control={<Radio />} label={label} />
);
