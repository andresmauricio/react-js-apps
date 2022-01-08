import React from 'react';
import styled from 'styled-components';

const Response = styled.div`
  background-color: #8b9a46;
  color: #fff;
  padding: 20px 2px;
  border-radius: 5px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Clime({ currentWeather }: any) {
  console.log(currentWeather);
  return (
    
    <Response>
      <p>Ciudad: {currentWeather?.name}</p>
      <p>Pais: {currentWeather?.sys?.country}</p>

      <p>
        Cordenadas: Lon: {currentWeather?.coord?.lon} Lat:{' '}
        {currentWeather?.coord?.lat}
      </p>
      <p>Clime: {currentWeather?.weather[0]?.description}</p>
      <p>Wind Speed : {currentWeather?.wind?.speed}</p>
      <img
        src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0]?.icon}@2x.png`}
        alt={currentWeather?.name}
      />
    </Response>
  );
}

export default Clime;
