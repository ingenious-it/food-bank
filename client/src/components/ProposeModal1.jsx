import React from 'react';
import './Donate.css';
import { useState } from 'react';
import { BsCheckCircle } from "react-icons/bs";



const ProposeModal1 = (props) => {
       // validation
       
            
       const [firstname, setFirstName] = useState('');
       const [lastname, setLastName] = useState('');
       const [nic, setNIC] = useState('');
       const [no, setNo] = useState('');
       const [street, setStreet] = useState('');
       const [city, setCity] = useState('');
       const [phonenumber, setPhoneNumber] = useState('');
       // const [preference, setPreference] = useState('comeToUs');
       const [errors, setErrors] = useState({});
       // change the content
       const [formSubmitted, setFormSubmitted] = useState(false);


     
       function handleSubmit(event) {
         event.preventDefault();
         const newErrors = validateInputs();
         if (Object.keys(newErrors).length === 0) {
           // submit form
           //  event.target.reset();
           setFirstName('');
           setLastName('');
           setNIC('');
           setNo('');
           setStreet('');
           setCity('');
           setPhoneNumber('');
           setFormSubmitted(true);
           setErrors('');
           console.log('Form submitted successfully!');
          
           
         } else {
           setErrors(newErrors);
         }
        
       }

       function handleClose(event){
         event.preventDefault();
         setFormSubmitted(false);
       }
     
       function validateInputs() {
         const newErrors = {};
         if (firstname.trim() === '') {  //remove any whitespace from the beginning and end of the user input
           newErrors.firstname = '*FirstName is required';
         }
         if (lastname.trim() === '') {
           newErrors.lastname = '*LastName is required';
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
          
          if (phonenumber.trim() === '') {
            newErrors.phonenumber = '* PhoneNumber is required';
          } else {
            const phoneNumberRegex = /^(0|94)[0-9]{9}$/;
            if (!phoneNumberRegex.test(phonenumber.trim())) {
              newErrors.phonenumber = '* Please enter a valid phone number';
            }
          }
         return newErrors;
       }
 
     
    
    return ( 

        <React.Fragment>
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
                                <input type="text" class="form-control" id="floatingInput" placeholder="firstname" 
                                value={firstname}
                                onChange={(e) => setFirstName(e.target.value)}/>
                                <label for="floatingInput" style={{ color: "black" }}>First Name</label>
                                {errors.firstname && <span className="error">{errors.firstname}</span>}
                                </div>

                                <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="lastname"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}/>
                                <label for="floatingInput" style={{ color: "black" }}>Last Name</label>
                                {errors.lastname && <span className="error">{errors.lastname}</span>}
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
                                <input type="text" class="form-control" id="floatingInput" placeholder="phonenumber" 
                                value={phonenumber} 
                                onChange={(e) => setPhoneNumber(e.target.value)}/>
                                <label for="floatingInput" style={{ color: "black" }}>Phone Number</label>
                                {errors.phonenumber && <span className="error">{errors.phonenumber}</span>}
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
                       
                    </form>
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