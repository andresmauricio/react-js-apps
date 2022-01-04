import { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import ListAppoinments from './components/ListAppoinments';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [appointment, setAppointment] = useState([]);
  return (
    <>
      <Form setAppointment={setAppointment} appointment={appointment} />
      <ListAppoinments appointment={appointment} />
    </>
  );
}

export default App;
