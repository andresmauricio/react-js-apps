import React from 'react';
import styled from 'styled-components';

const TotalExpenseValue = styled.span`
  color: ${(props: any) =>
    props.expense > props.budget / 2 ? '#FF0000' : '#008000'};
  font-weight: bold;
` as any;

function TotalExpense({ totalExpenses, budget }: any) {
  return (
    <p>
      Total expenses{' '}
      <TotalExpenseValue expense={totalExpenses} budget={budget}>
        ${totalExpenses}
      </TotalExpenseValue>
    </p>
  );
}

export default TotalExpense;
