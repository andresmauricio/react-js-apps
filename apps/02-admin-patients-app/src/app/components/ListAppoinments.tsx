import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled.section`
  background-color:#645c64;
  border-radius: 5px;
  padding: 10px 20px;
  min-width: 300px;
  text-align: center;
`;

const Button = styled.button`
  width: 60%;
  height: 30px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #7a69b0;
  color: #ffffff;
  font-weight: bold;
`;

function ListAppoinments({ appointment }: { appointment: any }) {
  return (
    <Wrap>
      {appointment.map((appointments: any) => (
        <Card>
          <h2>{appointments.owner}</h2>
          <p>{appointments.pet}</p>
          <p>{appointments.date}</p>
          <Button>delete</Button>
        </Card>
      ))}
    </Wrap>
  );
}

export default ListAppoinments;
