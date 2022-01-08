import styled from 'styled-components';

export const Main = styled.main`
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

export const Title = styled.h2`
  font-weight: bold;
  font-size: 36px;
  color: white;
`;

export const Phrase = styled.p`
  font-weight: 500;
  font-size: 26px;
  color: white;
`;

export const Author = styled.p`
  font-weight: 200;
  font-size: 20px;
  color: white;
  font-style: italic;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px 25px;
  cursor: pointer;
  color: #333;
  font-weight: bold;
  font-size: 16px;
`;