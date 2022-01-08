import { useState } from 'react';
import styled from 'styled-components';
const StyledApp = styled.div`
  // Your style here
`;

const Input = styled.input`
  // Your style here
`;

export function App() {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState({});

  const getCurrentWeather = async () => {
    const API_KEY = 'a1c919548b510275b471fbcdcdd7192a';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const data = await fetch(url);
    const response = await data.json();
    setCurrentWeather(response);
  };
  return (
    <StyledApp>
      <Input
        placeholder="Write your city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => getCurrentWeather()}>Search</button>
    </StyledApp>
  );
}

export default App;
