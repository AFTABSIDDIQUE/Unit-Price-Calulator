<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import InputForm from "./component/InputForm";
import Result from "./component/Result";
import "./App.css";

function App() {
  // Meter readings
  const [currentReading, setCurrentReading] = useState("");
  const [previousReading, setPreviousReading] = useState("");

  // Calculated units and charges
=======
import React, { useState } from "react";
import InputForm from "./component/InputForm";
import Result from "./component/Result";
import "./App.css"

function App() {
>>>>>>> d85eda7d37d1337be946adf5d1e129f9166338ce
  const [unitsConsumed, setUnitsConsumed] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [wheelingCharged, setWheelingCharged] = useState("");
  const [govttax, setTax] = useState("");
  const [fixedCharged, setFixedCharged] = useState("");
  const [energyCharged, setEnergyCharged] = useState("");
  const [electricityDuty, setElectricityDuty] = useState("");

<<<<<<< HEAD
  // Automatically calculate units when readings change
  useEffect(() => {
    if (currentReading !== "" && previousReading !== "") {
      const units = Number(currentReading) - Number(previousReading);
      setUnitsConsumed(units >= 0 ? units : 0); // Prevent negative units
    }
  }, [currentReading, previousReading]);

  // Calculate charges
  const calculatePrice = () => {
    const units = parseFloat(unitsConsumed);
    if (!isNaN(units)) {
      let fixedCharge, energyCharge;
      const wheel = units * 2.21;
      const taxs = units * 0.2604;

      if (units <= 100) {
        fixedCharge = 85;
        energyCharge = units * 3.45;
      } else {
        fixedCharge = 125;
        energyCharge = units * 4.18;
      }

      const electricityDutys = ((fixedCharge + wheel + energyCharge) * 16) / 100;

      // Set state
      setFixedCharged(fixedCharge);
      setWheelingCharged(wheel.toFixed(2));
      setEnergyCharged(energyCharge.toFixed(2));
      setElectricityDuty(electricityDutys.toFixed(2));
      setTax(taxs.toFixed(2));
      setTotalPrice(
        (fixedCharge + wheel + energyCharge + electricityDutys + taxs).toFixed(2)
      );
=======
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
>>>>>>> d85eda7d37d1337be946adf5d1e129f9166338ce
    }
  };

  return (
<<<<<<< HEAD
    <div className="container py-5">
      <h1 className="text-center mb-4">Electricity Unit to Price Calculator</h1>

      {/* Input Form */}
      <InputForm
        currentReading={currentReading}
        setCurrentReading={setCurrentReading}
        previousReading={previousReading}
        setPreviousReading={setPreviousReading}
        unitsConsumed={unitsConsumed}
        calculatePrice={calculatePrice}
      />

      {/* Result Modal */}
=======
    <div className="container p-5 bg-body-secondary text-center">
      <h1 className="display-6">Electricity Unit to Price Calculator</h1>
      <InputForm
        unitsConsumed={unitsConsumed}
        setUnitsConsumed={setUnitsConsumed}
        calculatePrice={calculatePrice}
      />
>>>>>>> d85eda7d37d1337be946adf5d1e129f9166338ce
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
