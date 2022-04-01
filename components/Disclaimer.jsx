import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function Disclaimer({ email, setEmail }) {
  return (
    <Stack spacing={4} width="100%" maxWidth="700px">
      <Typography>Before we get started…</Typography>
      <Typography>
        The answers and data collected on this simulation will not be shared
        with or sold to any third parties, and will be stored on a private
        Airtable database for analysis purposes only. For Airtable’s Privacy
        Policy, click{' '}
        <a
          href="https://www.airtable.com/privacy"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          here.
        </a>
      </Typography>
      <Typography>
        To save your answers as you move along on the site, we use your email
        address. We will never email you anything or sell your information.
      </Typography>
      <Typography>
        If you wish to remove your data from our service at any time, please
        create a Github Issue or contact us directly.
      </Typography>
      <Typography>
        By adding your email and clicking next you accept to the statements
        above.
      </Typography>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          // error={!isEmailFormat}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
      </Grid>
    </Stack>
  );
}
