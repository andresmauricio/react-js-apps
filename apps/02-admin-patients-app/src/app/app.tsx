import { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import GlobalStyle from './components/GlobalsStyles';
import ListAppoinments from './components/ListAppoinments';

const Main = styled.main`
  width: 100%;
  height: 100vh;
  padding: 50px;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
`;

export function App() {
  const [appointment, setAppointment] = useState([]);
  return (
    <Main>
      <GlobalStyle />
      <Section>
        <Form setAppointment={setAppointment} appointment={appointment} />
        <ListAppoinments appointment={appointment} setAppointment={setAppointment} />
      </Section>
    </Main>
  );
}

export default App;
