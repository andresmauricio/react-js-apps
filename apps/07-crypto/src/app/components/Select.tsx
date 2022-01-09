import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  text-transform: uppercase;
  font-weight: bold;
  color: white;
`;

const SelectOption = styled.select`
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 5px;
  height: 35px;
  padding-left: 10px;
`;

function Select({ options, label, onChange }: any) {
  return (
    <Row>
      <Label htmlFor="yourMondey">{label}</Label>
      <SelectOption
        defaultValue={''}
        id="yourMondey"
        onChange={(e: any) => onChange(e.target.value)}
      >
        <option value="" disabled>
          Select yor option
        </option>
        {options.map((option: any) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SelectOption>
    </Row>
  );
}

export default Select;
