import React from 'react';

function Select({
  label,
  options,
  updateQuote,
}: {
  label: any;
  options: any;
  updateQuote: any;
}) {
  return (
    <div className="row g-3 align-items-center mb-3 mt-3">
      <div className="col-6">
        <label htmlFor="inputPassword6" className="col-form-label">
          {label}
        </label>
      </div>
      <div className="col-6">
        <select
          id="disabledSelect"
          className="form-select"
          name={label.toLowerCase()}
          onChange={(e: any) => updateQuote(e)}
          defaultValue={''}
        >
          <option value="" disabled>Select one option</option>
          {options.map((option: any) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;
