import { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyles';

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background-color: #365a00;
  padding: 10px 50px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 36px;
  color: white;
`;

const Phrase = styled.p`
  font-weight: 500;
  font-size: 26px;
  color: white;
`;

const Author = styled.p`
  font-weight: 200;
  font-size: 20px;
  color: white;
  font-style: italic;
`;

const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px 25px;
  cursor: pointer;
  color: #333;
  font-weight: bold;
  font-size: 16px;
`;

export function App() {
  const [phrase, setPhrase] = useState<any>({});

  const getPhrases = async () => {
    const data = (await fetch(
      'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
    )) as any;
    const response = await data.json();
    setPhrase(response[0]);
    console.log(response);
  };

  useEffect(() => {
    getPhrases();
  }, []);

  return (
    <Main>
      <GlobalStyle />
      <Title>Breacking Bad</Title>
      <Phrase>{phrase.quote}</Phrase>
      <Author>{phrase.author}</Author>
      <Button>Generate phrase</Button>
    </Main>
  );
}

export default App;
