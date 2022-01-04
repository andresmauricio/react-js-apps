import { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* align-items: center; */
  /* justify-content: center; */
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  padding-left: 15px;
  border: none;
  outline: none;
  border: 1px solid #645c64;
  border-radius: 5px;
  background-color: #645c64;
  color: #999999;
  font-weight: bold;

  ::placeholder {
    color: #999999;
    font-weight: bold;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 35px;
  padding-left: 15px;
  border: none;
  outline: none;
  border: 1px solid #645c64;
  border-radius: 5px;
  background-color: #645c64;
  color: #999999;
  font-weight: bold;
`;

const Button = styled.button`
  width: 100%;
  height: 30px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #35b5ad;
  color: #ffffff;
  font-weight: bold;
`;

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
    <FormContainer onSubmit={onSubmit}>
      <h2>Create Appointment</h2>
      <Input
        type="text"
        placeholder="Name Owner"
        name="owner"
        onChange={updateForm}
        required
      />
      <Input
        type="text"
        placeholder="Name Pet"
        name="pet"
        onChange={updateForm}
        required
      />
      <Input
        type="date"
        placeholder="Date"
        name="date"
        onChange={updateForm}
        required
      />
      <TextArea
        name="information"
        id=""
        cols={20}
        rows={5}
        onChange={updateForm}
        required
      ></TextArea>
      <Button type="submit">Send</Button>
    </FormContainer>
  );
}

export default Form;
