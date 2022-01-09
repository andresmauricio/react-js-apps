import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyles';
import Select from './components/Select';

const StyledApp = styled.div`
  // Your style here
`;
const COUNTRY_CODES = ['COP', 'USD', 'CAD', 'EUR'];
const CRYPTO_CURRENCY = ['BTC', 'ETH'];

export function App() {

  return (
    <StyledApp>
      <GlobalStyle />
      <Select options={COUNTRY_CODES} label="Select your currency"/>
      <Select options={CRYPTO_CURRENCY} label="Select your crypto"/>
      <button>Search</button>      
    </StyledApp>
  );
}

export default App;
