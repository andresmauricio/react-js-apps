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

  return (
    <StyledApp>
      <GlobalStyle />
      <Select options={COUNTRY_CODES} label="Select your currency" onChange={setCurrency}/>
      <Select options={CRYPTO_CURRENCY} label="Select your crypto" onChange={setCryto}/>
      <button>Search</button>      
    </StyledApp>
  );
}

export default App;
