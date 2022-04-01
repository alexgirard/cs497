import React from 'react';
import Cookies from 'js-cookie';
import styles from '../styles/Home.module.css';
import Stepper from '../components/Stepper';
import Demographics from '../components/Demographics';
import Welcome from '../components/Welcome';
import Disclaimer from '../components/Disclaimer';
import CaseStudy from '../components/CaseStudy';
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

export default function Test({ initialItems }) {
  const { items, addItem, updateItem, getItem, setItems } =
    React.useContext(ItemsContext);
  const item = getItem();
  const [email, setEmail] = React.useState('');

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
            { label: 'ML Engineer', hidden: true, component: () => <p>5</p> },
            { label: 'ML Engineer', hidden: true, component: () => <p>5</p> },
            { label: 'UX Researcher', hidden: true, component: () => <p>6</p> },
            {
              label: 'Product Manager',
              hidden: true,
              component: () => <p>7</p>,
            },
            { label: 'Thanks!', component: () => <p>8</p> },
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
