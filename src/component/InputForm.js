
import React from "react";

function InputForm({
  currentReading,
  setCurrentReading,
  previousReading,
  setPreviousReading,
  unitsConsumed,
  calculatePrice,
}) {
  return (
    <div className="container my-4">
      <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h5 className="card-title text-center mb-4">Bill Amount Calculator</h5>

        {/* Current Month Reading */}
        <div className="mb-3">
          <label className="form-label">Current Month Meter Reading</label>
          <input
            className="form-control"
            type="number"
            value={currentReading}
            onChange={(e) => setCurrentReading(e.target.value)}
            placeholder="Enter Current Month Reading"
          />
        </div>

        {/* Previous Month Reading */}
        <div className="mb-3">
          <label className="form-label">Previous Month Meter Reading</label>
          <input
            className="form-control"
            type="number"
            value={previousReading}
            onChange={(e) => setPreviousReading(e.target.value)}
            placeholder="Enter Previous Month Reading"
          />
        </div>

        {/* Units Consumed */}
        <div className="mb-3">
          <label className="form-label">Units Consumed</label>
          <input
            className="form-control"
            type="number"
            value={unitsConsumed}
            readOnly
            placeholder="Units Consumed"
          />
        </div>

        {/* Calculate Button (triggers modal) */}
        <div className="d-grid mt-3">
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#resultModal"  // <- modal ID must match Result.js
            onClick={calculatePrice}
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputForm;
