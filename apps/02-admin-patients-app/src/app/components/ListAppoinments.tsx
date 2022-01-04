import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled.section`
  background-color: #645c64;
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

function ListAppoinments({
  appointment,
  setAppointment,
}: {
  appointment: any[];
  setAppointment: any;
}) {
  const deleteAppointments = (id: number) => {
    const newAppointments = [...appointment];
    newAppointments.splice(id, 1);
    window.localStorage.setItem(
      'appointments',
      JSON.stringify(newAppointments)
    );
    setAppointment(newAppointments);
  };
  return (
    <Wrap>
      <h2>List of Appointments</h2>
      {appointment.length > 0 ? appointment.map((appointments: any, index: number) => (
        <Card key={index}>
          <h2>{index} - {appointments.owner}</h2>
          <p>{appointments.pet}</p>
          <p>{appointments.date}</p>
          <Button onClick={() => deleteAppointments(index)}>delete</Button>
        </Card>
      )) : <h1>No Appointments</h1>}
      {}
    </Wrap>
  );
}

export default ListAppoinments;
