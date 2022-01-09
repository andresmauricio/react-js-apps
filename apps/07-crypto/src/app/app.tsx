import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyles';
import Select from './components/Select';

const StyledApp = styled.div`
  // Your style here
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
      <button onClick={() => searchCrypto()}>Search</button>
    </StyledApp>
  );
}

export default App;
