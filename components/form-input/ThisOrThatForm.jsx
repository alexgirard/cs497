import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormLabel from '@mui/material/FormLabel';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

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

export function ThisOrThatForm({ title, children }) {
  const [selected, setSelected] = React.useState(null);
  const handleToggle = (_, newSelected) => {
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
