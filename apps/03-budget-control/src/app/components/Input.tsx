import React from 'react';
import styled from 'styled-components';

const InputFiled = styled.input`
  width: 100%;
  height: 35px;
  border: none;
  border: 1px solid #cff;
  padding-left: 10px;
`;

function Input({
  placeholder,
  onChange,
  type
}: {
  placeholder: string;
  onChange: any;
  type: string;
}) {
  return (
    <InputFiled type={type} placeholder={placeholder} onChange={onChange} />
  );
}

export default Input;
