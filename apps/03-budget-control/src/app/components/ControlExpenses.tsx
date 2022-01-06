import React from 'react';
import styled from 'styled-components';

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height:300px;
  overflow: hidden;
  overflow-y: scroll;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Expense = styled.span`
  background-color: #2c2b3f;
  color: #fff;
  font-weight: bold;
  padding: 4px 8px;
`;

function ControlExpenses({
  expenses,
  budget,
}: {
  expenses: any;
  budget: number;
}) {
  return (
    <Col>
      <h4>Control Budget - Initial Budget ${budget}</h4>
      {expenses.map((expense: any) => (
        <Wrap>
          <span>{expense.name}</span>
          <Expense>${expense.value}</Expense>
        </Wrap>
      ))}
    </Col>
  );
}

export default ControlExpenses;
