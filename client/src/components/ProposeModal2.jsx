import React from 'react';
import './Donate.css';
import { BsCheckCircle } from "react-icons/bs";

const ProposeModal2 = () => {
  return (
    <React.Fragment>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '600px', maxHeight: '600px' }}>
          <div class="modal-content bg-dark text-white" id='content1'>

            <div class="modal-body">
            <div class="container">

                <div class="row g-2">
                <h1>Victim Information</h1>
                <p className='mt-1'><i>“You have not lived today until you have done something for someone who can never repay you”</i></p>

                  <div className='d-flex justify-content-center '><BsCheckCircle size={80} /></div>
                  <h2>Thank You</h2>
                  <h3>Your Submission has been sent!</h3>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProposeModal2;
