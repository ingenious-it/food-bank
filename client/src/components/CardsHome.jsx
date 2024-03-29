import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardsHome.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import ProposeModal1 from './ProposeModal1';
import FoodModal1 from "./FoodModal1";

const DCards = () => {
  const [openFoodModal, setOpenFoodModal] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [openProposeModal, setOpenProposeModal] = useState(false);
  return (
    <div className="major w-100">
      <div className="maincontainer d-flex justify-content-center align-items-center flex-column text-center">
        <h1 className="m-3">Together We're On A Plan To End Human Hunger</h1>
        <p>Donate To FOOD BANK</p>
      </div>

      <div className="cardcontainer d-flex align-items-center justify-content-around mt-4 ">
        <div className="moneyd mb-4 rounded  text-center">
          <div className="m-2">
            <FaShoppingCart className="icon" />
            <h3>Food Donation</h3>
            <p>
              Give to join us in providing nutritious meals to people facing
              malnutrition. By donating food, you are helping to address the
              issue of hunger, which affects thousands of people around Sri
              Lanka, including in your local community.
            </p>
            <button
              type="button"
              class="btn btn-outline-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => {
                setOpenFoodModal(true);
              }}
            >
              DONATE FOOD
            </button>
          </div>
        </div>
        {openFoodModal && <FoodModal1 />}

        <div className="foodd mb-4 rounded text-center">
          <div className="m-2">
            <FaHandHoldingUsd className="icon" />
            <h3>Money Donation</h3>
            <p>
              Join us in providing nutritious meals to people facing
              malnutrition by making a monetary donation. Your donation will go
              towards providing essential food supplies to those in need, giving
              them a chance to lead a healthy and fulfilling life
            </p>

            <button
              className="btn btn-outline-light"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Donate
            </button>
          </div>
        </div>

        <div className="propose mb-4 rounded text-center">
          <div className="m-2">
            <FiUserPlus className="icon" />
            <h3>Propose Victims</h3>
            <p>
              We invite you to submit the details of individuals or families
              affected by food crisis who are in need of assistance. Through the
              generous donations from compassionate individuals, we provide them with
              the necessary aid
            </p>

            <button
              className="btn btn-outline-success mb-2 ps-5 pe-5"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal3"
              onClick={() => {
                setOpenProposeModal(true);
              }}
            >
              Propose Victim{" "}
            </button>
          </div>

          {openProposeModal && <ProposeModal1 />}
        </div>
      </div>
    </div>
  );
};

export default DCards;
