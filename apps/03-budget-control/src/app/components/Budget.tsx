import { Fragment, useState } from 'react';
import Error from './Error';
import Button from './Button';
import Input from './Input';

function Budget({ setBudget }: { setBudget: any }) {
  const [budgetLocal, setLocalBudget] = useState<string | number | any>(0);
  const [error, setError] = useState<boolean>(false);

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
        placeholder="Into your budget initial"
        onChange={saveInitialBudget}
        type="number"
      />
      {error ? (
        <Error message="The value of your budget shold be number" />
      ) : null}
      <Button onClick={() => saveBudget()} text="Set Budget" />
    </Fragment>
  );
}

export default Budget;
