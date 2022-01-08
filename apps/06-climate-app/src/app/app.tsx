import { useState } from 'react';
import Clime from './components/Clime';
import GlobalStyle from './components/GlobalStyle';
import { Button, Card, Input, StyledApp, Title } from './components/UI/ui';

export function App() {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState<any>(null);

  const getCurrentWeather = async () => {
    const API_KEY = 'a1c919548b510275b471fbcdcdd7192a';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const data = await fetch(url);
    const response = await data.json();
    setCurrentWeather(response);
  };
  return (
    <StyledApp>
      <GlobalStyle />
      <Title>Consult your current clime</Title>
      <Card>
        <Input
          placeholder="Write your city"
          onChange={(e) => setCity(e.target.value)}
        />
        <Button onClick={() => getCurrentWeather()}>Search</Button>
        {currentWeather ? <Clime currentWeather={currentWeather} /> : null}
      </Card>
    </StyledApp>
  );
}

export default App;
