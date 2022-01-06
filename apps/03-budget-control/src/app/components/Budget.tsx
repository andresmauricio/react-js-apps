import { Fragment } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 35px;
  border: none;
  border: 1px solid #cff;
  padding-left: 10px;
`;

const Button = styled.button`
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

function Budget() {
  return (
    <Fragment>
      <h2>Set your budget</h2>
      <Input type="number" placeholder="Into your budget initial" />
      <Button>Set Budget</Button>
    </Fragment>
  );
}

export default Budget;
