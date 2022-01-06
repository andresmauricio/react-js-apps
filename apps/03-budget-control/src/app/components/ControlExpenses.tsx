import React from 'react';
import styled from 'styled-components';

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
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
        <li>
          Name: {expense.name} - Price {expense.value}
        </li>
      ))}
    </Col>
  );
}

export default ControlExpenses;
