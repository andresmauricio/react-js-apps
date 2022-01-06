import GlobalStyle from 'apps/03-budget-control/src/app/components/GlobalStyles';
import styled from 'styled-components';
import Budget from './components/Budget';

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

export function App() {
  return (
    <Main>
      <GlobalStyle />
      <Card>
        <Budget />
      </Card>
    </Main>
  );
}

export default App;
