import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyles';

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #365a00;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 26px;
  color: white;
`;

export function App() {
  const [phrase, setPhrase] = useState('');
  return (
    <Main>
      <GlobalStyle />
      <Title>Phrases project by breacking bad</Title>
    </Main>
  );
}

export default App;
