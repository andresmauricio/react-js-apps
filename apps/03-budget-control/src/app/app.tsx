import GlobalStyle from 'apps/03-budget-control/src/app/components/GlobalStyles';
import { useState } from 'react';
import styled from 'styled-components';
import AddExpenses from './components/AddExpenses';
import Budget from './components/Budget';
import Button from './components/Button';
import ControlExpenses from './components/ControlExpenses';
import Input from './components/Input';

const Card = styled.div`
  background-color: #efefef;
  padding: 20px 40px;
  border-radius: 5px;
  width: 70%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Col = styled.div``;

export function App() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState<any[]>([]);

  const addExpenses = (expense: { name: string; value: number }) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <Main>
      <GlobalStyle />
      <Card>
        {budget ? (
          <Row>
            <AddExpenses addExpenses={addExpenses} />
            <ControlExpenses expenses={expenses} budget={budget} />
          </Row>
        ) : (
          <Budget setBudget={setBudget} />
        )}
      </Card>
    </Main>
  );
}

export default App;
