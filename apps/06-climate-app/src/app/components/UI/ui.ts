import styled from 'styled-components';

export const StyledApp = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 80%;
  background-color: #fff;
  border-radius: 5px;
  padding: 25px 25px;
  text-align: center;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  width: 80%;
  padding: 10px 30px;
  border-radius: 5px;
  background-color: #541212;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  border: none;
  outline: none;
  padding-left: 10px;
  border-radius: 5px;
  margin-bottom: 25px;
  background-color: #f7f7f7;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  margin: 30px 0;
`;
