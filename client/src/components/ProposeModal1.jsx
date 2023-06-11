import React from 'react';
import './Donate.css';
import { useState,useEffect} from 'react';
import { BsCheckCircle } from "react-icons/bs";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwtDecode from "jwt-decode";

const token = localStorage.getItem("token");





const ProposeModal1 = (props) => {

  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        
        if (decodedToken && decodedToken.exp > Date.now() / 1000) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        setIsLoggedIn(false);
      }
    }
  }, []);
       // validation
       const [firstName, setfirstName] = useState('');
       const [lastName, setlastName] = useState('');
       const [nic, setNIC] = useState('');
       const [no, setNo] = useState('');
       const [street, setStreet] = useState('');
       const [city, setCity] = useState('');
       const [phoneNumber, setphoneNumber] = useState('');
       const [description,setDescriotion]=useState('');
       const [isVerified,setIsVerified]=useState(false);
       const [isAccepted,setIsAccepted]=useState(false);
       const [isDeliverySelected,setIsDeliverySelected]=useState(false);
       const [PackageType, setPackageType] = useState("");

      

      //  const [victim,setVictim] = useState({
      //   firstName : "",
      //   lastName : "",
      //   nic : "",
      //   street : "",
      //   city : "",
      //   no : "",
      //   phoneNumber : "",
      //  })

       // const [preference, setPreference] = useState('comeToUs');
       const [errors, setErrors] = useState({});
       // change the content
       const [formSubmitted, setFormSubmitted] = useState(false);

     
       async function handleSubmit(event) {
        event.preventDefault();
        const newErrors = validateInputs();
      
        if (Object.keys(newErrors).length === 0) {
          //const token = localStorage.getItem("token");
      
          if (!isLoggedIn) {
            // User is not logged in, display an error message
            toast.error("You must be logged in to submit the form.");
            return;
          }
      
          const victimData = { firstName, lastName, nic, no, street, city, phoneNumber, isVerified, description, isAccepted, isDeliverySelected, PackageType };
      
          try {
            const response = await axios.post("http://localhost:8080/Victim/saveVictimDetails", victimData);
            console.log(response.data);
            setFormSubmitted(true);
            // Display a success message to the user
            toast.success("Form submitted successfully!");
          } catch (error) {
            console.error(error);
            // Display an error message to the user
            toast.error("An error occurred while submitting the form. Please try again later.");
          }
      
          setfirstName('');
          setlastName('');
          setNIC("");
          setNo('');
          setStreet('');
          setCity('');
          setphoneNumber('');
          setDescriotion("");
          setFormSubmitted(true);
          setErrors('');
          console.log('Form submitted successfully!');
        } else {
          setErrors(newErrors);
        }
      }
      

      //  const saveVictim = (e) =>{
      //   VictimService.saveVictim(victim).then(res =>{
      //     console.log(res);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   })
      //  }

       function handleClose(event){
         event.preventDefault();
         setFormSubmitted(false);
       }

      //  const handleChange = (field, value) => {
      //     setVictim({
      //       ...victim,
      //       [field]:value
      //     });
      //  }
     
       function validateInputs() {
         const newErrors = {};
         if (firstName.trim() === '') {  //remove any whitespace from the beginning and end of the user input
           newErrors.firstName = '*firstName is required';
         }
         if (lastName.trim() === '') {
           newErrors.lastName = '*lastName is required';
         }
         if (nic.trim() === '') {
            newErrors.nic = '*NIC is required';
          } else {
            const nicRegex = /^[0-9]{9}([vVxX]|[0-9]{3})$/;
            if (!nicRegex.test(nic)) {
              newErrors.nic = '*Invalid NIC format';
            }
          }
         if (no.trim() === '') {
            newErrors.no = '* No is required';
          }
          if (street.trim() === '') {
            newErrors.street = '* Street is required';
          }
          if (city.trim() === '') {
            newErrors.city = '* City is required';
          }
          
          if (phoneNumber.trim() === '') {
            newErrors.phoneNumber = '* phoneNumber is required';
          } else {
            const phoneNumberRegex = /^(0|94)[0-9]{9}$/;
            if (!phoneNumberRegex.test(phoneNumber.trim())) {
              newErrors.phoneNumber = '* Please enter a valid phone number';
            }
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
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                 <div class="modal-dialog modal-dialog-centered modal-xl d-flex">
                     <div class="modal-content bg-dark text-white" id='content1'>
   
                     <div class="modal-body">
                         <img src={require('../images/Imagev1.png')} class="img-fluid" alt="modal1" />
                            <p className='mt-1'><i>“You have not lived today until you have done something for someone who can never repay you”</i></p>

                            <p> You can provide information about victims of food crisis.As a contributor for the sight, All we make sure your provided 
                                information will not be disclose to any external party.</p>
                        <div>
                            <p>Who are suitable to get this donation?</p>
                                <ul>
                                <li>Orphans</li>
                                <li>Families with low income - poverty</li>
                                <li>Unemployed</li>
                                </ul>
                        </div>

                             <p> <b>Your actions can change lives. Make a difference by joining us. </b></p> 
                                
                     </div>

                     </div>

                    <div class="modal-content bg-dark text-white" id='content2'>
                        
                         <div class="modal-header  d-flex flex-column-reverse ">
                             <h3 class="modal-title" >Victim Information</h3>
                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                         <div class="modal-body">
                         {formSubmitted ? (

<React.Fragment>
                <form onSubmit={handleClose}>
                
                <p className='mt-1'><i>“You have not lived today until you have done something for someone who can never repay you”</i></p>
                <div className='d-flex justify-content-center mb-2'><BsCheckCircle size={80} /></div>
                <h2 className='text-center mt-1'>Thank You</h2>
                <p className='mt-1' ><i> <center> Your Submission has been sent! </center></i></p>

                <div className='d-flex justify-content-center'>
                <button className="btn text-white btncolor  ps-5 pe-5 " type='submit'>
                 Close </button>
                </div>
              
                </form>

</React.Fragment>
    
  ) : (
 <React.Fragment>

                 <form onSubmit={handleSubmit}>       
                                <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="firstName" 
                                // value={firstName}
                                // onChange={(e) => setfirstName(e.target.value)}
                                value={firstName}  
                                onChange={(e) => setfirstName(e.target.value)}/>
                                <label for="floatingInput" style={{ color: "black" }}>First Name</label>
                                {errors.firstName && <span className="error">{errors.firstName}</span>}
                                </div>

                                <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="lastName"
                                value={lastName}
                                onChange={(e) => setlastName(e.target.value)}/>
                                <label for="floatingInput" style={{ color: "black" }}>Last Name</label>
                                {errors.lastName && <span className="error">{errors.lastName}</span>}
                                </div>

                                <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="nic"
                                value={nic}
                                onChange={(e) => setNIC(e.target.value)}/>
                                <label for="floatingInput" style={{ color: "black" }}>NIC</label>
                                {errors.nic && <span className="error">{errors.nic}</span>}
                                </div>
                                 <p>Enter the Address</p>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div className="form-floating mb-3" style={{ marginRight: "10px", width: "20%"  }}>
                                 <input type="text" className="form-control" id="floatingInput" placeholder="no"
                                 value={no}
                                 onChange={(e) => setNo(e.target.value)}/>
                                 <label htmlFor="floatingInput" style={{ color: "black" }}>No </label>
                                 {errors.no && <span className="error">{errors.no}</span>}
                                </div>
      
                                <div className="form-floating mb-3" style={{ marginLeft: "10px",width: "40%"  }}>
                                <input type="text" className="form-control" id="floatingInput" placeholder="street"
                                value={street} 
                                onChange={(e) => setStreet(e.target.value)}/>
                                <label htmlFor="floatingInput" style={{ color: "black" }}>Street</label>
                                {errors.street && <span className="error">{errors.street}</span>}
                                </div>

                                <div className="form-floating mb-3" style={{ marginLeft: "10px",width: "40%"  }}>
                                <input type="text" className="form-control" id="floatingInput" placeholder="city"
                                value={city}  
                                onChange={(e) => setCity(e.target.value)}/>
                                <label htmlFor="floatingInput" style={{ color: "black" }}>City</label>
                                {errors.city && <span className="error">{errors.city}</span>}
                                </div>
                                </div>

                                <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="phoneNumber" 
                                value={phoneNumber} 
                                onChange={(e) => setphoneNumber(e.target.value)}/>
                                <label for="floatingInput" style={{ color: "black" }}>Phone Number</label>
                                {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                                </div>

                                <div class="form-floating mb-3">
                                <textarea class="form-control" id="floatingInput" placeholder="description" value={description} onChange={(e)=>setDescriotion(e.target.value)}></textarea>
                                <label for="floatingInput" style={{ color: "black" }}>Description</label>
                                </div>

                                 <p className='text-center mt-1'>Click here to submit your details.</p>
                                 <div className='d-flex justify-content-center'>
                                 <button className="btn text-white btncolor  ps-5 pe-5 " type='submit'>
                                 Submit </button>
                                 </div>
                       
                    </form>
                    {/* <form onSubmit={(e) => handleSubmit(e)}>       
                                <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="firstName" 
                                value={victim.firstName}
                                onChange={(e) => handleChange("firstName",e.target.value)}/>
                                <label for="floatingInput" style={{ color: "black" }}>First Name</label>
                                {errors.firstName && <span className="error">{errors.firstName}</span>}
                                </div>

                                <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="lastName"
                                value={victim.lastName}
                                onChange={(e) => handleChange("lastName",e.target.value)}/>
                                <label for="floatingInput" style={{ color: "black" }}>Last Name</label>
                                {errors.lastName && <span className="error">{errors.lastName}</span>}
                                </div>

                                <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="nic"
                                value={victim.nic}
                                onChange={(e) => handleChange("nic",e.target.value)}/>
                                <label for="floatingInput" style={{ color: "black" }}>NIC</label>
                                {errors.nic && <span className="error">{errors.nic}</span>}
                                </div>
                                 <p>Enter the Address</p>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div className="form-floating mb-3" style={{ marginRight: "10px", width: "20%"  }}>
                                 <input type="text" className="form-control" id="floatingInput" placeholder="no"
                                 value={victim.no}
                                 onChange={(e) => handleChange("no",e.target.value)}/>
                                 <label htmlFor="floatingInput" style={{ color: "black" }}>No </label>
                                 {errors.no && <span className="error">{errors.no}</span>}
                                </div>
      
                                <div className="form-floating mb-3" style={{ marginLeft: "10px",width: "40%"  }}>
                                <input type="text" className="form-control" id="floatingInput" placeholder="street"
                                value={victim.street} 
                                onChange={(e) => handleChange("street",e.target.value)}/>
                                <label htmlFor="floatingInput" style={{ color: "black" }}>Street</label>
                                {errors.street && <span className="error">{errors.street}</span>}
                                </div>

                                <div className="form-floating mb-3" style={{ marginLeft: "10px",width: "40%"  }}>
                                <input type="text" className="form-control" id="floatingInput" placeholder="city"
                                value={victim.city}
                                onChange={(e) => handleChange("city",e.target.value)}/>
                                <label htmlFor="floatingInput" style={{ color: "black" }}>City</label>
                                {errors.city && <span className="error">{errors.city}</span>}
                                </div>
                                </div>

                                <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="phoneNumber" 
                                value={victim.phoneNumber} 
                                onChange={(e) => handleChange("phoneNumber",e.target.value)}/>
                                <label for="floatingInput" style={{ color: "black" }}>Phone Number</label>
                                {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                                </div>
                                <div class="form-floating mb-3">
                                <textarea class="form-control" id="floatingInput" placeholder="description"></textarea>
                                <label for="floatingInput" style={{ color: "black" }}>Description</label>
                                </div>

                                 <p className='text-center mt-1'>Click here to submit your details.</p>
                                 <div className='d-flex justify-content-center'>
                                 <button className="btn text-white btncolor  ps-5 pe-5 " type='submit'>
                                 Submit </button>
                                 </div>
                       
                    </form> */}
 </React.Fragment>
  )
  }

                  </div>     
                </div>
             </div>
          </div>
        </React.Fragment>
     );
}
 
export default ProposeModal1;