import React from 'react';
import Cookies from 'js-cookie';
import { useMediaQuery } from 'react-responsive';
import { Typography, Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import styles from '../styles/Home.module.css';
import Stepper from '../components/Stepper';
import Demographics from '../components/Demographics';
import Welcome from '../components/Welcome';
import Disclaimer from '../components/Disclaimer';
import CaseStudy from '../components/CaseStudy';
import MLIntro from '../components/questions/ml/intro';
import MLQ1, {
  info as MLQ1Info,
  options as mlq1Options,
} from '../components/questions/ml/q1';
import MLQ2, { info as MLQ2Info } from '../components/questions/ml/q2';
import MLQ3, { info as MLQ3Info } from '../components/questions/ml/q3';
import MLQ4, { info as MLQ4Info } from '../components/questions/ml/q4';
import DIntro from '../components/questions/designer/intro';
import DQ1, { info as DQ1Info } from '../components/questions/designer/q1';
import DQ2, { info as DQ2Info } from '../components/questions/designer/q2';
import DQ3, {
  info as DQ3Info,
  options as DQ3Options,
} from '../components/questions/designer/q3';
import DQ4, {
  info as DQ4Info,
  options as DQ4Options,
} from '../components/questions/designer/q4';
import DQ5, {
  info as DQ5Info,
  Stats as DQ5Stats,
} from '../components/questions/designer/q5';
import DQ6, { info as DQ6Info } from '../components/questions/designer/q6';
import PMIntro from '../components/questions/pm/intro';
import PMQ1, { info as PMQ1Info } from '../components/questions/pm/q1';
import PMQ2, {
  info as PMQ2Info,
  options as PMQ2Options,
} from '../components/questions/pm/q2';
import PMQ3, { info as PMQ3Info } from '../components/questions/pm/q3';
import PMQ4, { info as PMQ4Info } from '../components/questions/pm/q4';
import PMQ5, { info as PMQ5Info } from '../components/questions/pm/q5';
import PMQ6, {
  info as PMQ6Info,
  Stats as PMQ6Stats,
} from '../components/questions/pm/q6';
import { table, minifyItems } from '../utils/Airtable';
import { ItemsContext } from '../context/items';
import GenderStats from '../components/GenderStats';
import AgeStats from '../components/AgeStats';
import RoleStats from '../components/RoleStats';

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

function ThanksCopy() {
  return (
    <Stack spacing={2}>
      <Typography>
        You’re now ready to launch BetterWorld, thanks for playing along!
      </Typography>
      <Typography>
        Now that you’ve completed the case study, we hope you learned new ways
        software products can impact individuals or communities.
      </Typography>
      <Typography>
        To see any of the resources again click{' '}
        <Link href="/resources">here</Link>.
      </Typography>
      <br />
      <Typography>
        For any concerns, feel free to open a{' '}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/alexgirard/cs497/issues"
        >
          Github Issue
        </Link>{' '}
        or reach out to any of the team:{' '}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/alexgirard"
        >
          Alex
        </Link>
        ,{' '}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/thgao"
        >
          Tina
        </Link>
        ,{' '}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ariellam"
        >
          Ariel
        </Link>
        .
      </Typography>
    </Stack>
  );
}

export default function Home({ initialItems }) {
  const { items, addItem, updateItem, getItem, setItems } =
    React.useContext(ItemsContext);
  const item = getItem();
  const [email, setEmail] = React.useState('');
  const isSmallDevice = useMediaQuery({ query: '(max-width: 43.75em)' });

  const emailAlreadyUsedItem = () =>
    items.find((i) => i?.fields?.email === email);

  const updateEmail = async () => {
    if (Cookies.get('id')) {
      const updatedFields = { ...item?.fields };
      updatedFields.email = email;
      const updatedItem = { id: item?.id, fields: updatedFields };
      updateItem(updatedItem);
    } else if (emailAlreadyUsedItem()) {
      Cookies.set('id', emailAlreadyUsedItem().id);
    } else addItem({ email });
  };

  React.useEffect(() => {
    setItems(initialItems);
    const filteredItem = initialItems.find((i) => i.id === Cookies.get('id'));
    setEmail(filteredItem?.fields?.email);
  }, [initialItems, setItems, setEmail]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Stepper
          steps={[
            { label: 'Welcome', component: Welcome },
            { label: 'Disclaimer', component: Disclaimer },
            { label: 'Demographics', component: Demographics },
            { label: 'Case Study', component: CaseStudy },
            {
              label: 'ML Engineer',
              hidden: isSmallDevice,
              component: MLIntro,
            },
            {
              label: 'ML Engineer Q1',
              hidden: true,
              component: () => <MLQ1 item={item} />,
              info: <MLQ1Info />,
              stats: <GenderStats options={mlq1Options} field="mlq1" />,
            },
            {
              label: 'ML Engineer Q2',
              hidden: true,
              component: () => <MLQ2 item={item} />,
              info: <MLQ2Info />,
              stats: (
                <GenderStats
                  type="rank"
                  field="mlq2"
                  options={[
                    'Sensing changes in eyes',
                    'Sensing changes in mouth',
                    'Sensing changes in eyebrows',
                  ]}
                />
              ),
            },
            {
              label: 'ML Engineer Q3',
              hidden: true,
              component: () => <MLQ3 item={item} />,
              info: <MLQ3Info />,
              stats: (
                <GenderStats
                  field="mlq3"
                  options={[
                    'Precise algorithm',
                    'Localization-friendly algorithm',
                  ]}
                />
              ),
            },
            {
              label: 'ML Engineer Q4',
              hidden: true,
              component: () => <MLQ4 item={item} />,
              info: <MLQ4Info />,
              stats: (
                <AgeStats
                  field="mlq4"
                  options={[
                    'Identify explicit words',
                    'Analyze full sentiment',
                  ]}
                />
              ),
            },
            {
              label: 'Designer',
              hidden: isSmallDevice,
              stepLabel: 6,
              component: DIntro,
            },
            {
              label: 'Designer Q1',
              hidden: true,
              component: () => <DQ1 item={item} />,
              info: <DQ1Info />,
              stats: (
                <RoleStats
                  type="rank"
                  field="dq1"
                  options={[
                    'Conduct user interviews',
                    'Market research',
                    'Diverse participant sample',
                    'Designing for accessibility',
                    'Create a physical prototype',
                  ]}
                />
              ),
            },
            {
              label: 'Designer Q2',
              hidden: true,
              component: () => <DQ2 item={item} />,
              info: <DQ2Info />,
              stats: (
                <GenderStats
                  field="dq2"
                  options={[
                    'Team and company members',
                    'Diverse sample of potential users',
                  ]}
                />
              ),
            },
            {
              label: 'Designer Q3',
              hidden: true,
              component: () => <DQ3 item={item} />,
              info: <DQ3Info />,
              stats: <AgeStats type="multi" field="dq3" options={DQ3Options} />,
            },
            {
              label: 'Designer Q4',
              hidden: true,
              component: () => <DQ4 item={item} />,
              info: <DQ4Info />,
              stats: <AgeStats type="multi" field="dq4" options={DQ4Options} />,
            },
            {
              label: 'Designer Q5',
              hidden: true,
              component: () => <DQ5 item={item} />,
              info: <DQ5Info />,
              stats: <DQ5Stats />,
            },
            {
              label: 'Designer Q6',
              hidden: true,
              component: () => <DQ6 item={item} />,
              info: <DQ6Info />,
              stats: (
                <RoleStats
                  field="dq6"
                  options={[
                    'Only English => launch in 1 month',
                    'Translate all text => launch in 4 months',
                    'Full localization => launch in 1 year',
                  ]}
                />
              ),
            },
            {
              label: 'PM',
              hidden: isSmallDevice,
              stepLabel: 7,
              component: PMIntro,
            },
            {
              label: 'PM Q1',
              hidden: true,
              component: () => <PMQ1 item={item} />,
              info: <PMQ1Info />,
            },
            {
              label: 'PM Q2',
              hidden: true,
              component: () => <PMQ2 item={item} />,
              info: <PMQ2Info />,
              stats: (
                <GenderStats type="multi" field="pmq2" options={PMQ2Options} />
              ),
            },
            {
              label: 'PM Q3',
              hidden: true,
              component: () => <PMQ3 item={item} />,
              info: <PMQ3Info />,
              stats: (
                <RoleStats
                  field="pmq3"
                  options={[
                    'Tiered subscription, delayed revenue',
                    'Sell initial user data for short term',
                  ]}
                />
              ),
            },
            {
              label: 'PM Q4',
              hidden: true,
              component: () => <PMQ4 item={item} />,
              info: <PMQ4Info />,
              stats: (
                <AgeStats
                  field="pmq4"
                  options={[
                    'Do nothing',
                    'Flag and give warnings',
                    'Remove all content',
                  ]}
                />
              ),
            },
            {
              label: 'PM Q5',
              hidden: true,
              component: () => <PMQ5 item={item} />,
              info: <PMQ5Info />,
              stats: (
                <AgeStats
                  field="pmq5"
                  options={[
                    'Implement playtime limits for users',
                    'Give users tools to impose own limits',
                  ]}
                />
              ),
            },
            {
              label: 'PM Q6',
              hidden: true,
              component: () => <PMQ6 item={item} />,
              info: <PMQ6Info />,
              stats: <PMQ6Stats item={item} />,
            },
            {
              label: 'Thanks!',
              stepLabel: isSmallDevice ? 5 : 8,
              component: () => <ThanksCopy />,
            },
          ]}
          items={items}
          email={email}
          setEmail={setEmail}
          updateEmail={updateEmail}
        />
      </main>
    </div>
  );
}
