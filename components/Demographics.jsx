import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import { ItemsContext } from '../context/items';

export default function Demographics() {
  const [form, setForm] = React.useState({});
  const [age, setAge] = React.useState('');
  const [gender, setGender] = React.useState('');
  const { updateItem, getItem } = React.useContext(ItemsContext);

  React.useEffect(() => {
    // Runs only the first time item variable gets set from undefined
    // Set initial state from Airtable
    const item = getItem();
    setForm({ ...item?.fields });
    setAge(item?.fields?.age);
    setGender(item?.fields?.gender);
  }, []);

  const handleChange = (field) => (e) => {
    if (field === 'age') setAge(e.target.value);
    else if (field === 'gender') setGender(e.target.value);
    else setForm({ ...form, [field]: e.target.value });

    const item = getItem();
    const updatedFields = { ...item?.fields };
    updatedFields[field] = e.target.value;
    const updatedItem = { id: item?.id, fields: updatedFields };
    updateItem(updatedItem);
  };

  return (
    <Stack spacing={4} width="100%" maxWidth="900px">
      <Typography>
        This information is used to draw conclusions for data.
      </Typography>
      <Box>
        <Grid container spacing={2} width="100%">
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender-select"
                value={gender}
                label="Gender"
                onChange={handleChange('gender')}
              >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Nonbinary">Non-Binary</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
                <MenuItem value="PreferNotSay">Prefer not to answer</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="age-label">Age</InputLabel>
              <Select
                labelId="age-label"
                id="age-select"
                value={age}
                label="Age"
                onChange={handleChange('age')}
              >
                <MenuItem value="0-18">0 - 18</MenuItem>
                <MenuItem value="18-30">18 - 30</MenuItem>
                <MenuItem value="30-60">30 - 60</MenuItem>
                <MenuItem value="60+">60+</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      <Grid container rowSpacing={2}>
        <Grid item xs={12} display="flex" alignItems="end">
          <FormControl>
            <FormLabel id="role-label">Role</FormLabel>
            <RadioGroup
              row
              aria-labelledby="role-label"
              name="radio-group"
              onChange={handleChange('role')}
            >
              <FormControlLabel
                value="Student"
                control={<Radio checked={form.role === 'Student'} />}
                label="Student"
              />
              <FormControlLabel
                value="Educator"
                control={<Radio checked={form.role === 'Educator'} />}
                label="Educator"
              />
              <FormControlLabel
                value="Industry"
                control={<Radio checked={form.role === 'Industry'} />}
                label="Industry"
              />
              <FormControlLabel
                value="Other"
                control={<Radio checked={form.role === 'Other'} />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          {form.role === 'Other' && (
            <Box ml="0.25em" pb="0.26em">
              <TextField
                id="outlined-basic"
                label="Please specify"
                value={form.other}
                onChange={handleChange('other')}
                variant="standard"
              />
            </Box>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Field of Study"
            variant="outlined"
            value={form.field}
            onChange={handleChange('field')}
            fullWidth
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
