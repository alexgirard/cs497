import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { indigo } from '@mui/material/colors';
import { useMediaQuery } from 'react-responsive';

export default function StatContainer({ stats }) {
  const isSmallDevice = useMediaQuery({ query: '(max-width: 600px)' });
  const filteredStats = stats.filter((x) => x !== undefined);
  return (
    <Grid container spacing={3} justifyContent="center" maxWidth={1000}>
      {filteredStats.map((stat, index) => {
        const oddRow = (index + 1) % 4 === 1 || (index + 1) % 4 === 2;
        const firstPos = index % 2 === 0;
        const blueText = isSmallDevice
          ? firstPos
          : (oddRow && !firstPos) || (!oddRow && firstPos);

        return (
          <Grid item key={stat} xs={12} sm={6}>
            <Typography color={blueText ? indigo[900] : 'black'}>
              {stat}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}
