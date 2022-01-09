import React from 'react';

function Select({ options, label }: any) {
  return (
    <div>
      <label htmlFor="yourMondey">{label}</label>
      <select defaultValue={''} name="" id="yourMondey">
        <option value="" disabled>
          Select yor option
        </option>
        {options.map((option: any) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
