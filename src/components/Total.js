import React from "react";

const Total = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const taxes = total * 0.13; // assuming 13% tax rate

  return (
    <div className="total">
      <h3>Total: ${total.toFixed(2)}</h3>
      <p>Taxes: ${taxes.toFixed(2)}</p>
    </div>
  );
};

export default Total;
