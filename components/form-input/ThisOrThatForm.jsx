import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormLabel from '@mui/material/FormLabel';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ItemsContext } from '../../context/items';

export const ThisOrThatOption = ({ children }) => (
  <Container
    sx={{
      mt: 'auto',
      mb: 'auto',
      pt: 1,
      pb: 1,
    }}
  >
    <Box
      fontWeight="normal"
      color="black"
      textTransform="none"
      fontSize="initial"
    >
      {children}
    </Box>
  </Container>
);

export function ThisOrThatForm({ title, children, item, fieldName }) {
  const { updateItem } = useContext(ItemsContext);

  const [selected, setSelected] = React.useState(null);
  useEffect(() => {
    // Runs only the first time item variable gets set from undefined
    // Set initial state from Airtable
    setSelected(item?.fields[fieldName]);
  }, [item]);

  const handleToggle = (_, newSelected) => {
    const updatedFields = { ...item?.fields };
    updatedFields[fieldName] = newSelected;
    const updatedItem = { id: item?.id, fields: updatedFields };
    updateItem(updatedItem);

    setSelected(newSelected);
  };

  return (
    <Container sx={{ p: 4 }}>
      <FormLabel>{title}</FormLabel>
      <Box textAlign="center" width="100%">
        <ToggleButtonGroup
          color="primary"
          value={selected}
          exclusive
          onChange={handleToggle}
        >
          <ToggleButton
            value={1}
            sx={{ width: '100%', flexDirection: 'column' }}
          >
            {children[0]}
            <Box width="100%">
              <hr />
              This
            </Box>
          </ToggleButton>
          <ToggleButton
            value={2}
            sx={{ width: '100%', flexDirection: 'column' }}
          >
            {children[1]}
            <Box width="100%">
              <hr />
              That
            </Box>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Container>
  );
}
