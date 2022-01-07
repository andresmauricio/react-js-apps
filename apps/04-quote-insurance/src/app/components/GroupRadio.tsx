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
    <>
      {labels.map((label: string, index: number) => (
        <div className="form-check" key={index}>
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
    </>
  );
}

export default GroupRadio;
