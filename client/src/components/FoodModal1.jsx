import React, { useState, useEffect } from "react";
import "./Donate.css";
import { GrSecure } from "react-icons/gr";
import { BsCheckCircle } from "react-icons/bs";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwtDecode from "jwt-decode";

const FoodModal1 = () => {
  const [donationAddress, setdonationAddress] = useState("");
  const [donationDate, setDonationDate] = useState("");
  const [nearestLocation, setNearestLocation] = useState("");
  const [locationOptions, setLocationOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [errors, setErrors] = useState({});

  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  // change the content
  const [formSubmitted, setFormSubmitted] = useState(false);

  // useEffect(() => {
  //   // Fetch datalist options from backend
  //   fetch("http://your-api-endpoint.com/locations")
  //     .then((response) => response.json())
  //     .then((data) => setLocationOptions(data.locations))
  //     .catch((error) => console.log(error));
  // }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const newErrors = validateInputs();
    if (Object.keys(newErrors).length === 0) {
      // submit form
      const foodDonate = { donationAddress, donationDate, nearestLocation, selectedOption };
      try {
        const response = await axios.post(
          "http://localhost:8080/FoodDonate/saveDonation",
          foodDonate
        ); 
        console.log(response.data);
        setFormSubmitted(true);
        // Display a success message to the user
        toast.success("Form submitted successfully!");
      } catch (error) {
        console.error(error);
        // Display an error message to the user
        toast.error("An error occurred while submitting the form. Please try again later.");
      }
  
      // event.target.reset();
      setdonationAddress("");
      setDonationDate("");
      setNearestLocation("");
     
      setErrors("");
    } else {
      setErrors(newErrors);
    }
  }
  

  function handleClose(event) {
    event.preventDefault();
    setFormSubmitted(false);
  }

  function validateInputs() {
    const newErrors = {};
    if (donationAddress.trim() === "") {
      //remove any whitespace from the beginning and end of the user input
      newErrors.donationAddress = "*Donation Address is required";
    }
    if (donationDate.trim() === "") {
      newErrors.donationDate = "*Donation Date is required";
    }
    if (nearestLocation.trim() === "") {
      newErrors.location = "* Location is required";
    }
    return newErrors;
  }

  return (
    <React.Fragment>
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
/>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl d-flex">
          <div class="modal-content bg-dark text-white" id="content1">
            <div class="modal-body">
              <img
                src={require("../images/image113.png")}
                class="img-fluid"
                alt="modal1"
              />
              <p className="mt-1">
                <i>
                  “The meaning of life is to find your gift. The purpose of life
                  is to give it away.”
                </i>
              </p>

              <p>
                {" "}
                You can donate food items mentioned here. As a contributor to
                Sight For All we make sure your donation goes directly to
                supporting our cause. Thank you for your generosity!
              </p>

              <div class="container">
                <div class="row g-2">
                  <div class="gr col-6">
                    <div class="p-3 border bg-color rounded">RICE</div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-color rounded">SUGAR</div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-color rounded">DHAL</div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-color rounded">FLOUR</div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-color rounded">COOKING OIL</div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-color rounded">MILK POWDER</div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-color rounded">DRY FOODS</div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-color rounded">BISCUITS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-content bg-dark text-white " id="content2">
            <div class="modal-header  d-flex flex-column-reverse ">
              <h3 class="modal-title">Donate Food Items</h3>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body ">
              {formSubmitted ? (
                <React.Fragment>
                  <form onSubmit={handleClose}>
                    <h4 className="text-center">
                      Thank you for your generosity
                    </h4>
                    <div className="d-flex justify-content-center mb-2 mt-4">
                      <BsCheckCircle size={80} />
                    </div>
                    <p className="mt-3">
                      <i>
                        {" "}
                        <center> Your Submission has been sent! </center>
                      </i>
                    </p>

                    <div className="d-flex justify-content-center">
                      <button
                        className="btn text-white btncolor  mt-3 ps-5 pe-5 "
                        type="submit"
                      >
                        close{" "}
                      </button>
                    </div>
                  </form>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <p className="text-center">
                    Fill out this form to inform us about your food donations.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="donationAddress"
                        value={donationAddress}
                        onChange={(e) => setdonationAddress(e.target.value)}
                      />
                      <label for="floatingInput" style={{ color: "black" }}>
                        My Address
                      </label>
                      {errors.donationAddress && (
                        <span className="error">{errors.donationAddress}</span>
                      )}
                    </div>

                    <div class="form-floating mb-3">
                      <input
                        type="date"
                        class="form-control"
                        id="floatingInput"
                        placeholder=""
                        value={donationDate}
                        onChange={(e) => setDonationDate(e.target.value)}
                      />
                      <label for="floatingInput" style={{ color: "black" }}>
                        Donation Date
                      </label>
                      {errors.donationDate && (
                        <span className="error">{errors.donationDate}</span>
                      )}
                    </div>

                    <div class="form-floating mb-3">
                      <input
                        class="form-control"
                        list="datalistOptions"
                        id="exampleDataList"
                        placeholder="nearestLocation"
                        value={nearestLocation}
                        onChange={(e) => setNearestLocation(e.target.value)}
                      />
                      <label
                        for="exampleDataList"
                        class="form-label"
                        style={{ color: "black" }}
                      >
                        Nearest Location
                      </label>
                      {errors.location && (
                        <span className="error">{errors.location}</span>
                      )}
                      <datalist id="datalistOptions">
                        <option value="Galle" />
                        <option value="Matara" />
                        <option value="Ambalangoda" />
                        <option value="Welligama" />
                        <option value="Hambantota" />

                        {locationOptions.map((locationOption) => (
                          <option key={locationOption} value={locationOption} />
                        ))}
                      </datalist>
                    </div>

                    <p>
                      To continue with the food donation you have two options,
                      either you can bring them to us or we can come and collect
                      them. Please select your preference.
                    </p>
                    <div className="roption d-flex flex-column align-items-center">
                      <div className="form-check bg-color text-dark mb-2 ps-4 p-2 rounded">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value="come to us"
                          checked={selectedOption === "come to us"}
                          onChange={(e) => setSelectedOption(e.target.value)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          I will come and Donate to You
                        </label>
                      </div>
                      <div className="form-check bg-color text-dark mb-2 ps-4 p-2 rounded">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          value="go to them"
                          checked={selectedOption === "go to them"}
                          onChange={(e) => setSelectedOption(e.target.value)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          You Have To Collect My Donation
                        </label>
                      </div>
                    </div>
                    <p className="text-center mt-1">
                      Click here to submit your details.
                    </p>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn text-white btncolor  ps-5 pe-5 "
                        type="submit"
                      >
                        Submit{" "}
                      </button>
                    </div>
                  </form>
                </React.Fragment>
              )}
            </div>

            <div class="modal-footer d-flex justify-content-center">
              <GrSecure className="sicon" />{" "}
              <p>
                <b>Secure Donation</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FoodModal1;
