import React from "react";
import DonatePrompt from "./moneyDonation/box";

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-secondary">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
            <DonatePrompt/>
            </h1>
          </div>

        </div>
      </div>
  );
};

export default Modal;