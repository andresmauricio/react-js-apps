import { Fragment, useState } from 'react';
import Error from './Error';
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

function Budget({ setBudget }: { setBudget: any }) {
  const [budgetLocal, setLocalBudget] = useState<string | number | any>(0);
  const [error, setError] = useState<boolean>(false);
  const props = {
    message: 'The value of the budget should be number and major 1',
  };
  const saveInitialBudget = (e: any) => {
    setLocalBudget(e.target.value);
  };

  const saveBudget = () => {
    const newBudget = parseInt(budgetLocal);
    if (newBudget > 1 && !isNaN(newBudget)) {
      setBudget(newBudget);
      setError(false);
      return;
    }
    setError(true);
  };
  return (
    <Fragment>
      <h2>Set your budget</h2>
      <Input
        type="number"
        placeholder="Into your budget initial"
        onChange={saveInitialBudget}
      />
      {error ? (
        <Error message="The value of your budget shold be number" />
      ) : null}
      <Button onClick={() => saveBudget()}>Set Budget</Button>
    </Fragment>
  );
}

export default Budget;
