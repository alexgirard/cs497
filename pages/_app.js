import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { ItemsProvider } from "../context/items";

function MyApp({ Component, pageProps }) {
  return (
    <ItemsProvider>
      <Component {...pageProps} />
    </ItemsProvider>
  );
};

export default MyApp
