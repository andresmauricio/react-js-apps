import React from 'react';

function ListAppoinments({ appointment }: { appointment: any }) {
  return appointment.map((appointments: any) => (
    <section>
      <h2>{appointments.owner}</h2>
      <p>{appointments.pet}</p>
      <p>{appointments.date}</p>
      <button>delete</button>
    </section>
  ));
}

export default ListAppoinments;
