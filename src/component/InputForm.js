import React from "react";

function InputForm({ unitsConsumed, setUnitsConsumed, calculatePrice }) {
  return (
    <div className="continer d-flex justify-content-center">
      <div class="input-group m-3 w-50">
        <span class="input-group-text">Units Consumed</span>
        <input className="col-sm-12" type="text" value={unitsConsumed} onChange={(e) => setUnitsConsumed(e.target.value)} class="form-control" placeholder="Enter Units" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <div class="col-12">
          <button class="btn btn-outline-primary mt-3" onClick={calculatePrice} type="submit">Calculate</button>
        </div>
      </div>
    </div>
  );
}

export default InputForm;
