import { useEffect, useState } from 'react';
import GlobalStyle from './components/GlobalStyles';
import { Author, Button, Main, Phrase, Title } from './components/UI';


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
      <Button onClick={() => getPhrases()}>Generate phrase</Button>
    </Main>
  );
}

export default App;
