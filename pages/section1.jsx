import React, { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import Slide from 'react-reveal/Slide';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Q3 from '../components/q3';
import Q2 from '../components/q2';
import Q1 from '../components/q1';
import styles from '../styles/Home.module.css';
import { table, minifyItems } from '../utils/Airtable';
import { ItemsContext } from '../context/items';

export async function getServerSideProps() {
  try {
    const items = await table.select({}).firstPage();
    return {
      props: {
        initialItems: minifyItems(items),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        err: 'Something went wrong 😕',
      },
    };
  }
}

export default function Section1({ initialItems }) {
  const { items, setItems } = useContext(ItemsContext);

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems, setItems]);

  const [questionCounter, _setQuestionCounter] = useState(1);
  const [appearFromLeft, setAppearFromLeft] = useState(false);
  const nextQuestion = () => {
    _setQuestionCounter(questionCounter + 1);
    setAppearFromLeft(false);
  };
  const previousQuestion = () => {
    _setQuestionCounter(questionCounter - 1);
    setAppearFromLeft(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Grid container spacing={2}>
          <Grid item xs={1} style={{ justifyContent: 'center' }}>
            <IconButton
              aria-label="previous question"
              onClick={previousQuestion}
              disabled={questionCounter <= 1}
              size="large"
              color="primary"
            >
              <KeyboardArrowLeftIcon fontSize="inherit" />
            </IconButton>
          </Grid>
          <Grid item xs={10}>
            <Container>
              <Slide
                left={appearFromLeft}
                right={!appearFromLeft}
                opposite
                collapse
                when={questionCounter === 1}
                unmountOnExit
                mountOnEnter
              >
                {/* TODO: Pass in correct corresponding item */}
                <Q1 item={items ? items[0] : undefined} />
              </Slide>
              <Slide
                left={appearFromLeft}
                right={!appearFromLeft}
                opposite
                collapse
                when={questionCounter === 2}
                unmountOnExit
                mountOnEnter
              >
                <Q2 />
              </Slide>
              <Slide
                left={appearFromLeft}
                right={!appearFromLeft}
                opposite
                collapse
                when={questionCounter === 3}
                unmountOnExit
                mountOnEnter
              >
                <Q3 />
              </Slide>
            </Container>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              aria-label="next question"
              onClick={nextQuestion}
              disabled={questionCounter >= 3}
              size="large"
              color="primary"
            >
              <KeyboardArrowRightIcon fontSize="inherit" />
            </IconButton>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
