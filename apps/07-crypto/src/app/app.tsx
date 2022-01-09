import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyles';
import Select from './components/Select';

const StyledApp = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-color: #333;
  padding: 25px 45px;
  border-radius: 5px;
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
  const [response, setResponse] = useState(null);

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
      <Row>
        <Card>
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
        </Card>
        {response ? (
          <p>
            The value of crypto currency is: ${response} {currency}
          </p>
        ) : null}
      </Row>
    </StyledApp>
  );
}

export default App;
