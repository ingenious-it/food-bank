import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CLIENT_ID } from "../../config/config";
import { useState, useEffect } from "react";

const PayPalPrompt = () => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: 20,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
      console.log("Order successful . Your order id is--", orderID);
    }
  }, [success]);

  return (
    <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
      <div>
        <div className="wrapper">
          <div className="product-info">
            <div className="product-price-btn">
              <button
                className="buy-btn"
                type="submit"
                onClick={() => setShow(true)}
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
        <br></br>
        {show ? (
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={createOrder}
            onApprove={onApprove}
          />
        ) : null}
      </div>
    </PayPalScriptProvider>
  );
};
export default PayPalPrompt;