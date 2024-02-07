import React from "react";

function Result({
  totalPrice,
  fixedCharged,
  wheel,
  energyCharged,
  electricityDuty,
  tax,
}) {
  return (
    <div>
      <p className="blockquote">Fixed Charge : ₹ {fixedCharged}</p>
      <p className="blockquote">Wheel Charge : ₹ {wheel}</p>
      <p className="blockquote">energy Charge : ₹ {energyCharged}</p>
      <p className="blockquote">Electricity Duty: ₹ {electricityDuty}</p>
      <p className="blockquote">Tax : ₹ {tax}</p>
      <p className="blockquote">Total Price : ₹ {totalPrice}</p>
    </div>
  );
}

export default Result;
