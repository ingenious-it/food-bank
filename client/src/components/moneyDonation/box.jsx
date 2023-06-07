import React from "react";
import { useState, useContext, useEffect } from "react";
import "./buttonText.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CLIENT_ID } from "../../config/config";

const DonatePrompt = () => {
  // state variables for amount, whether to show the donate prompt, whether the donation was successful, error message, and the order ID
  const [amount, setAmount] = useState(0);
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const [paymentTime, setPaymentTime] = useState(null);
  const [donations, setDonations] = useState(null);

  // function to handle clicking on the amount buttons
  const handleAmountButtonClick = (value) => {
    setAmount(value);
  };

  // function to handle changing the amount input field
  const handleInputChange = (event) => {
    setAmount(event.target.value);
  };

  // function to create a PayPal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Money Donation",
            amount: {
              currency_code: "USD",
              value: amount,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // function to handle successful payment approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
      // const now = new Date();
      // setPaymentTime(now);
      // const donation = {
      //   donationID: orderID,
      //   donationAmount: amount,
      //   dateAndTime: now.toISOString()
      // };

      // fetch('http://localhost:8080/MoneyDonate/saveDonation', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(donation)
      // })
      //   .then(response => response.json())
      //   .then(data => {
      //     console.log('Donation submitted successfully:', data);
      //   })
      //   .catch(error => {
      //     console.error('Error submitting donation:', error);
      //   });

      //   setDonations(JSON.stringify(donation));
    });
  };

  // function to handle payment errors
  const onError = (data, actions) => {
    setErrorMessage("An error occurred with your payment.");
  };

  // useEffect hook to handle displaying a success message when the payment is successful
  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
      const now = new Date();
      setPaymentTime(now);
      const donation = {
        donationID: orderID,
        donationAmount: amount,
        dateAndTime: now.toISOString(),
      };
      fetch("http://localhost:8080/MoneyDonate/saveDonation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donation),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Donation submitted successfully:", data);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error submitting donation:", error);
        });
      // console.log("Order successful. Your order ID is:", orderID);
      // console.log(paymentTime);
      setDonations(JSON.stringify(donation));
    }
  }, [success]);
  console.log("tHE JSON DATA IS: ", donations);

  return (
    <React.Fragment>
      <section className=" d-flex justify-content-around  dGrid">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div>
            <div
              className="card bg-dark bg-opacity-75 text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-3 text-center">
                <div className="bg-dark fw-bold rounded-pill text-uppercase">
                  <h2 className="p-2">Choose Amount</h2>
                </div>
                <div className="mb-md-5 mt-md-4 pb-5">
                  <p className="text-white-50 mb-5">
                    How much would you like to donate? As a contributor to Sight
                    For All we make sure your donation goes directly to
                    supporting our cause. Thank you for your generosity!
                  </p>

                  <div className="form-outline form-white mb-4 d-flex justify-content-center">
                    <h2 className="m-2">
                      <b>RS |</b>
                    </h2>
                    <input
                      type="text"
                      id="typeAmountX"
                      className="form-control-lg rounded-pill"
                      value={amount}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <div className="d-flex btn-group justify-content-evenly align-content-center my-2">
                      <button
                        style={{ fontSize: "15px" }}
                        className="btn btn-outline-warning btn-sm p-2 m-1 btn-warning text-black rounded-pill"
                        type="submit"
                        onClick={() => handleAmountButtonClick(100)}
                      >
                        <b>RS 100</b>
                      </button>
                      <button
                        style={{ fontSize: "15px" }}
                        className="btn btn-outline-warning btn-sm p-2 m-1 btn-warning text-black rounded-pill"
                        type="submit"
                        onClick={() => handleAmountButtonClick(200)}
                      >
                        <b>RS 200</b>
                      </button>
                      <button
                        style={{ fontSize: "15px" }}
                        className="btn btn-outline-warning btn-sm p-2 m-1 btn-warning text-black rounded-pill"
                        type="submit"
                        onClick={() => handleAmountButtonClick(300)}
                      >
                        <b>RS 500</b>
                      </button>
                      <button
                        style={{ fontSize: "15px" }}
                        className="btn btn-outline-warning btn-sm p-2 m-1 btn-warning text-black rounded-pill"
                        type="submit"
                        onClick={() => handleAmountButtonClick(1000)}
                      >
                        <b>RS 1000</b>
                      </button>
                    </div>
                    <div className="d-flex btn-group justify-content-evenly align-content-center my-2">
                      <button
                        style={{ fontSize: "15px" }}
                        className="btn btn-outline-warning btn-sm p-2 m-1 btn-warning text-black rounded-pill"
                        type="submit"
                        onClick={() => handleAmountButtonClick(2000)}
                      >
                        <b>RS 2000</b>
                      </button>
                      <button
                        style={{ fontSize: "15px" }}
                        className="btn btn-outline-warning btn-sm p-2 m-1 btn-warning text-black rounded-pill"
                        type="submit"
                        onClick={() => handleAmountButtonClick(5000)}
                      >
                        <b>RS 5000</b>
                      </button>
                      <button
                        style={{ fontSize: "15px" }}
                        className="btn btn-outline-warning btn-sm p-2 m-1 btn-warning text-black rounded-pill"
                        type="submit"
                        onClick={() => handleAmountButtonClick(10000)}
                      >
                        <b>RS 10000</b>
                      </button>
                      <button
                        style={{ fontSize: "15px" }}
                        className="btn btn-outline-warning btn-sm p-2 m-1 btn-warning text-black rounded-pill"
                        type="submit"
                        onClick={() => setAmount(amount)}
                      >
                        <b>Custom Amount</b>
                      </button>
                    </div>
                    <div className="wrapper">
                      <button
                        className="btn btn-outline-warning btn-lg p-2 m-3 btn-warning text-black rounded-pill"
                        onClick={() => setShow(true)}
                      >
                        <b className="m-3">Continue &gt; </b>
                      </button>
                    </div>
                    <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
                      <div className="container">
                        {show ? (
                          <PayPalButtons
                            style={{ layout: "vertical" }}
                            createOrder={createOrder}
                            onApprove={onApprove}
                          />
                        ) : null}
                      </div>
                    </PayPalScriptProvider>
                  </div>
                </div>
                <div>
                  <p className="mb-0 text-white-50 fw-bold">Secure Donation </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </React.Fragment>
  );
};

export default DonatePrompt;
