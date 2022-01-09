import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyles';
import Select from './components/Select';

const StyledApp = styled.div`
  // Your style here
`;

const Button = styled.button`
  padding: 10px 40px;
  border: none;
  outline: none;
  color: #fff;
  background-color: #35b5ad;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;
const COUNTRY_CODES = ['COP', 'USD', 'CAD', 'EUR'];
const CRYPTO_CURRENCY = ['BTC', 'ETH'];

export function App() {
  const [currency, setCurrency] = useState('');
  const [crypto, setCryto] = useState('');
  const [response, setResponse] = useState({});

  const searchCrypto = async () => {
    if (currency && crypto) {
      const url = `https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=${currency}`;
      const response = await fetch(url);
      const data = await response.json();
      setResponse(data[currency]);
      return;
    }
  };

  return (
    <StyledApp>
      <GlobalStyle />
      <Select
        options={COUNTRY_CODES}
        label="Select your currency"
        onChange={setCurrency}
      />
      <Select
        options={CRYPTO_CURRENCY}
        label="Select your crypto"
        onChange={setCryto}
      />
      <Button onClick={() => searchCrypto()}>Search</Button>
      {/* <p>The value of crypto currency is: ${response} {currency}</p> */}
    </StyledApp>
  );
}

export default App;
