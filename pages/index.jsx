import React from 'react';
import Cookies from 'js-cookie';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles/Home.module.css';
import Stepper from '../components/Stepper';
import Demographics from '../components/Demographics';
import Welcome from '../components/Welcome';
import Disclaimer from '../components/Disclaimer';
import CaseStudy from '../components/CaseStudy';
import MLIntro from '../components/questions/ml/intro';
import MLQ1 from '../components/questions/ml/q1';
import MLQ2 from '../components/questions/ml/q2';
import MLQ3 from '../components/questions/ml/q3';
import MLQ4 from '../components/questions/ml/q4';
import DIntro from '../components/questions/designer/intro';
import DQ1 from '../components/questions/designer/q1';
import DQ2 from '../components/questions/designer/q2';
import DQ3 from '../components/questions/designer/q3';
import DQ4 from '../components/questions/designer/q4';
import DQ5 from '../components/questions/designer/q5';
import PMIntro from '../components/questions/pm/intro';
import PMQ1 from '../components/questions/pm/q1';
import PMQ2 from '../components/questions/pm/q2';
import PMQ3 from '../components/questions/pm/q3';
import PMQ4 from '../components/questions/pm/q4';
import PMQ5 from '../components/questions/pm/q5';
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
              info: 'test',
            },
            {
              label: 'ML Engineer Q2',
              hidden: true,
              component: () => <MLQ2 item={item} />,
              info: 'test',
            },
            {
              label: 'ML Engineer Q3',
              hidden: true,
              component: () => <MLQ3 item={item} />,
              info: 'test',
            },
            {
              label: 'ML Engineer Q4',
              hidden: true,
              component: () => <MLQ4 item={item} />,
              info: 'test',
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
              info: 'test',
            },
            {
              label: 'Designer Q2',
              hidden: true,
              component: () => <DQ2 item={item} />,
              info: 'test',
            },
            {
              label: 'Designer Q3',
              hidden: true,
              component: () => <DQ3 item={item} />,
              info: 'test',
            },
            {
              label: 'Designer Q4',
              hidden: true,
              component: () => <DQ4 item={item} />,
            },
            {
              label: 'Designer Q5',
              hidden: true,
              component: () => <DQ5 item={item} />,
              info: 'test',
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
              info: 'test',
            },
            {
              label: 'PM Q2',
              hidden: true,
              component: () => <PMQ2 item={item} />,
              info: 'test',
            },
            {
              label: 'PM Q3',
              hidden: true,
              component: () => <PMQ3 item={item} />,
              info: 'test',
            },
            {
              label: 'PM Q4',
              hidden: true,
              component: () => <PMQ4 item={item} />,
              info: 'test',
            },
            {
              label: 'PM Q4',
              hidden: true,
              component: () => <PMQ4 item={item} />,
              info: 'test',
            },
            {
              label: 'PM Q5',
              hidden: true,
              component: () => <PMQ5 item={item} />,
              info: 'test',
            },
            {
              label: 'Thanks!',
              stepLabel: isSmallDevice ? 5 : 8,
              component: () => <p>thank you! here's some more copy</p>,
            },
          ]}
          items={items}
          email={email}
          setEmail={setEmail}
          updateEmail={updateEmail}
          // refresh={refresh}
        />
      </main>
    </div>
  );
}
