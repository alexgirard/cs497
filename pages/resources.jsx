import { Typography, Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import React from 'react';
import styles from '../styles/Home.module.css';

export default function Resources() {
    return(
        <div className={styles.container}>
      <main className={styles.main}>
          <Box flexGrow="1" padding={8} textAlign="left" width="100%">
        <Stack spacing={2}>
        <Typography variant="h4">
            Resources
        </Typography>
        <Typography>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href=""
        >
          link
        </Link>
        </Typography>
        </Stack>
        </Box>
        </main>
        </div>
    )
}