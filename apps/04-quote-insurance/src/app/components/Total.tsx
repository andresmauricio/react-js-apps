import React from 'react';

function Total({ total }: { total: number }) {
  return (
    <div className="alert alert-dismissible alert-info mt-4">
      <h4 className="alert-heading text-center">Total price your insurance</h4>
      <p className="mb-0 h6">
        We execute algorithm for calculate the total price of your insurance.
        You price for access to services   is ${total}
      </p>
    </div>
  );
}

export default Total;
