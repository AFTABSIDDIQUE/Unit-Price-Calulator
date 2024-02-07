import React, { useState } from "react";
import InputForm from "./component/InputForm";
import Result from "./component/Result";
import "./App.css"

function App() {
  const [unitsConsumed, setUnitsConsumed] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [wheelingCharged, setWheelingCharged] = useState("");
  const [govttax, setTax] = useState("");
  const [fixedCharged, setFixedCharged] = useState("");
  const [energyCharged, setEnergyCharged] = useState("");
  const [electricityDuty, setElectricityDuty] = useState("");

  const calculatePrice = () => {
    const units = parseFloat(unitsConsumed);
    if (!isNaN(units)) {
      if (units <= 100) {
        const fixedCharge = 85;
        setFixedCharged(fixedCharge);
        const wheel = units * 2.21;
        setWheelingCharged(wheel);
        const energyCharge = units * 3.45;
        setEnergyCharged(energyCharge.toFixed(2));
        const electricityDutys =
          ((fixedCharge + wheel + energyCharge) * 16) / 100;
        setElectricityDuty(electricityDutys.toFixed(2));
        const taxs = units * 0.2604;
        setTax(taxs.toFixed(2));
        const total =
          fixedCharge + wheel + energyCharge + electricityDutys + taxs;
        setTotalPrice(total.toFixed(2));
      } else if (units > 100) {
        const fixedCharge = 125;
        setFixedCharged(fixedCharge);
        const wheel = units * 2.21;
        setWheelingCharged(wheel);
        const energyCharge = units * 4.18;
        setEnergyCharged(energyCharge.toFixed(2));
        const electricityDutys =
          ((fixedCharge + wheel + energyCharge) * 16) / 100;
        setElectricityDuty(electricityDutys.toFixed(2));
        const taxs = units * 0.2604;
        setTax(taxs.toFixed(2));
        const total =
          fixedCharge + wheel + energyCharge + electricityDutys + taxs;
        setTotalPrice(total.toFixed(2));
      }
    }
  };

  return (
    <div className="container p-5 bg-body-secondary text-center">
      <h1 className="display-6">Electricity Unit to Price Calculator</h1>
      <InputForm
        unitsConsumed={unitsConsumed}
        setUnitsConsumed={setUnitsConsumed}
        calculatePrice={calculatePrice}
      />
      <Result
        totalPrice={totalPrice}
        wheel={wheelingCharged}
        tax={govttax}
        fixedCharged={fixedCharged}
        energyCharged={energyCharged}
        electricityDuty={electricityDuty}
      />
    </div>
  );
}

export default App;
