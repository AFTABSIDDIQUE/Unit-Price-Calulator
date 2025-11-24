
import React from "react";

function Result({
  totalPrice,
  wheel,
  tax,
  fixedCharged,
  energyCharged,
  electricityDuty,
}) {
  return (
    <>
      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="resultModal"
        tabIndex="-1"
        aria-labelledby="resultModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="resultModalLabel">
                Bill Summary
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Fixed Charge</span> <span>{fixedCharged}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Wheeling Charge</span> <span>{wheel}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Energy Charge</span> <span>{energyCharged}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Electricity Duty</span> <span>{electricityDuty}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Government Tax</span> <span>{tax}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between fw-bold">
                  <span>Total Price</span> <span>{totalPrice}</span>
                </li>
              </ul>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
