import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  font-style: italic;
  font-weight: 300;
  color: #b33636;
`;

function Error({ message }: { message: string }) {
  return <Span>{message}</Span>;
}

export default Error;
