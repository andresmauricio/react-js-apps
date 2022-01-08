import React from 'react';
import styled from 'styled-components';

const ErrorAlert = styled.div`
  background-color: #ff1700;
  color: white;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 3px;
  margin: 20px 0;
`;

function Error({ message }: { message: string }) {
  return <ErrorAlert>{message}</ErrorAlert>;
}

export default Error;
