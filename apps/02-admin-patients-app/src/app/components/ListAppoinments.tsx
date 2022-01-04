import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function ListAppoinments({ appointment }: { appointment: any }) {
  return (
    <Wrap>
      {appointment.map((appointments: any) => (
        <section>
          <h2>{appointments.owner}</h2>
          <p>{appointments.pet}</p>
          <p>{appointments.date}</p>
          <button>delete</button>
        </section>
      ))}
    </Wrap>
  );
}

export default ListAppoinments;
