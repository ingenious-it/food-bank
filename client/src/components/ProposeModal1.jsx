import React from 'react';
import './Donate.css';
import { useState } from 'react';
import ProposeModal2 from './ProposeModal2';


const ProposeModal1 = () => {
    const [openProposeModal,setOpenProposeModal]=useState(false);
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
                            
                                <p> As a humanitarian organization helping victims of the food crisis, values any information provided about affected 
                   individuals or communities. Your contribution is confidential and won't be shared with external parties. 
                   Please share any relevant information to assist us in providing support to those in need.</p>
         {/* <p>“You have not lived today until you have done something for ”</p> */}
                         </div>

                    </div>

                   
                    <div class="modal-content bg-dark text-white" id='content2'>
                        
                         <div class="modal-header  d-flex flex-column-reverse ">

                            <h3 class="modal-title" >Victim Information</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                         <div class="modal-body">

                    <form>       

                        
                                <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput" style={{ color: "black" }}>First Name</label>
                                </div>

                                <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput" style={{ color: "black" }}>Last Name</label>
                                </div>

                                <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput" style={{ color: "black" }}>NIC</label>
                                </div>

                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div className="form-floating mb-3" style={{ marginRight: "10px", width: "20%"  }}>
                                 <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                 <label htmlFor="floatingInput" style={{ color: "black" }}>No </label>
                                </div>
      
                                <div className="form-floating mb-3" style={{ marginLeft: "10px",width: "40%"  }}>
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput" style={{ color: "black" }}>Street</label>
                                </div>

                                <div className="form-floating mb-3" style={{ marginLeft: "10px",width: "40%"  }}>
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput" style={{ color: "black" }}>City</label>
                                </div>
                                </div>

                                <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput" style={{ color: "black" }}>Phone Number</label>
                                </div>

                                <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput" style={{ color: "black" }}>Description</label>
                                </div>

                        <div className='d-flex justify-content-center mt-4 mb-5'>
                    
                        <button className="btn text-white btncolor mb-2 ps-5 pe-5" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{
                        setOpenProposeModal(true);       
                        }}>
                         Submit </button>
                        </div>
                        {openProposeModal && <ProposeModal2/>} 
                       
                    </form>

                </div>
                       
                </div>
  
  </div>
</div>
        </React.Fragment>
     );
}
 
export default ProposeModal1;