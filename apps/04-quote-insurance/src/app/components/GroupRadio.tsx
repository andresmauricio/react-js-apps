import React from 'react';

function GroupRadio({
  labels,
  name,
  updateQuote,
}: {
  labels: any;
  name: string;
  updateQuote: any;
}) {
  return (
    <div className="row mt-3 mb-3">
      <h6 className="col-6" >Plan</h6>
      {labels.map((label: string, index: number) => (
        <div className="form-check col-3" key={index}>
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={'RadioOption' + label + index}
            onChange={(e) => updateQuote(e)}
            value={label}
          />
          <label
            className="form-check-label"
            htmlFor={'RadioOption' + label + index}
          >
            {label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default GroupRadio;
