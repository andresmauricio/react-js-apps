import { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import GlobalStyle from './components/GlobalsStyles';
import ListAppoinments from './components/ListAppoinments';

const Main = styled.main`
  width: 100%;
  height: 100vh;
`;

export function App() {
  const [appointment, setAppointment] = useState([]);
  return (
    <Main>
      <GlobalStyle />
      <Form setAppointment={setAppointment} appointment={appointment} />
      <ListAppoinments appointment={appointment} />
    </Main>
  );
}

export default App;
