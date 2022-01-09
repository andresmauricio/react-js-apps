import React from 'react';

function Select({ options, label, onChange }: any) {
  return (
    <div>
      <label htmlFor="yourMondey">{label}</label>
      <select
        defaultValue={''}
        name=""
        id="yourMondey"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          Select yor option
        </option>
        {options.map((option: any) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
