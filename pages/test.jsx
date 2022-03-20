import React from 'react';
import styles from '../styles/Home.module.css';
import Stepper from '../components/Stepper';
import Demographics from '../components/Demographics';

export default function Test() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Stepper
          steps={[
            // eslint-disable-next-line react/no-unstable-nested-components
            { label: 'Welcome', component: () => <p>1</p> },
            { label: 'Disclaimer', component: () => <p>2</p> },
            { label: 'Demographics', component: Demographics },
            { label: 'Case Study', component: () => <p>4</p> },
            { label: 'Thanks!', component: () => <p>5</p> },
          ]}
        />
      </main>
    </div>
  );
}
