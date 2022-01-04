import { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [appointment, setAppointment] = useState([
    {
      owner: 'Joe Doe',
      pet: 'Doggy',
      date: new Date(),
      information: 'Lorem ipsum dolor sit amet, consectetur adip',
    },
  ]);
  return <Form setAppointment={setAppointment} appointment={appointment} />;
}

export default App;
