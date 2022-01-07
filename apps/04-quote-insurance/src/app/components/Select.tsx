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
    <div className="row g-3 align-items-center">
      <div className="col-auto">
        <label htmlFor="inputPassword6" className="col-form-label">
          {label}
        </label>
      </div>
      <div className="col-auto">
        <select
          id="disabledSelect"
          className="form-select"
          name={label.toLowerCase()}
          onChange={(e: any) => updateQuote(e)}
        >
          {options.map((option: any) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;
