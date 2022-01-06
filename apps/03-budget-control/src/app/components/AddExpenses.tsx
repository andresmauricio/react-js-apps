import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import Error from './Error';

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

function AddExpenses({ addExpenses }: { addExpenses: any }) {
  const [expenseName, setExpenseName] = useState('');
  const [expenseValue, setExpenseValue] = useState<number | any>(0);
  const [error, setError] = useState<boolean>(false);

  const saveExpense = () => {
    const transformExpense = parseInt(expenseValue, 10);
    if (!isNaN(transformExpense) && expenseName) {
      const expense = {
        name: expenseName,
        value: transformExpense,
      };
      addExpenses(expense);
      // Todo: reset form
      setError(false);
      return;
    }
    setError(true);
  };

  return (
    <Col>
      <Col>
        <h4>Add expenses</h4>
        <Input
          placeholder="Name of the expense"
          onChange={(e: any) => setExpenseName(e.target.value)}
          type="text"
        />
        <Input
          placeholder="Value of expense"
          onChange={(e: any) => setExpenseValue(e.target.value)}
          type="number"
        />
        {error ? (
          <Error message="The value or name of expenses is not valid" />
        ) : null}
        <Button onClick={() => saveExpense()} text="Add Expenses" />
      </Col>
    </Col>
  );
}

export default AddExpenses;
