import styles from './app.module.css';
import { Navbar } from './components/Navbar';
import ProductList from './components/ProductList';

export function App() {
  return (
    <>
      <Navbar count={1} />
      <ProductList></ProductList>
    </>

  );
}

export default App;
