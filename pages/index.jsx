import Head from 'next/head';
import React, { useContext, useEffect } from 'react';

// import styles from '../styles/Home.module.css';
import { table, minifyItems } from '../utils/Airtable';
import { ItemsContext } from '../context/items';
import Item from '../components/Item';
import ItemForm from '../components/ItemForm';

export default function Home({ initialItems }) {
  const { items, setItems } = useContext(ItemsContext);

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems, setItems]);

  return (
    <div className="container mx-auto my-6 max-w-xl">
      <Head>
        <title>@Grocery List</title>
      </Head>

      <main>
        <p className="text-2xl font-bold py-2">🛒 Grocery List</p>
        <ItemForm />
        <ul>
          {items && items.map((item) => <Item key={item.id} item={item} />)}
        </ul>
      </main>
    </div>
  );
}

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
