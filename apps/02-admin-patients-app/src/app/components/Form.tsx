import { useState } from 'react';

function Form({
  setAppointment,
  appointment,
}: {
  setAppointment: (appointment: any) => void;
  appointment: any;
}) {
  const [form, setForm] = useState({
    owner: '',
    pet: '',
    date: '',
    information: '',
  });

  const updateForm = (event: any) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    setAppointment([...appointment, form]); 
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Name Owner"
        name="owner"
        onChange={updateForm}
        required
      />
      <input
        type="text"
        placeholder="Name Pet"
        name="pet"
        onChange={updateForm}
        required
      />
      <input
        type="date"
        placeholder="Date"
        name="date"
        onChange={updateForm}
        required
      />
      <textarea
        name="information"
        id=""
        cols={20}
        rows={5}
        onChange={updateForm}
        required
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

export default Form;
