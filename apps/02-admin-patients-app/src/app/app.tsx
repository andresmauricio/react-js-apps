import { useEffect, useState } from 'react';
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

const getAppointmentStore = () => {
  const appointment = JSON.parse(
    window.localStorage.getItem('appointments') || '[]'
  );
  return appointment || [];
};

export function App() {
  const [appointment, setAppointment] = useState([]);
  useEffect(() => {
    if (appointment.length === 0) {
      setAppointment(getAppointmentStore());
      console.log('get ap localStorage');
    }
    console.log('run');
  }, []);
  return (
    <Main>
      <GlobalStyle />
      <Section>
        <Form setAppointment={setAppointment} appointment={appointment} />
        <ListAppoinments
          appointment={appointment}
          setAppointment={setAppointment}
        />
      </Section>
    </Main>
  );
}

export default App;
