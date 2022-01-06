import React from 'react';
import styled from 'styled-components';

const ButtonPrimary = styled.button`
  width: 100%;
  height: 35px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #35b5ad;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
`;

function Button({ text, onClick }: { text: any; onClick: any }) {
  return <ButtonPrimary onClick={onClick}>{text}</ButtonPrimary>;
}

export default Button;
