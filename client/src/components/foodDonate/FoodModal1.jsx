import React from 'react';
import './Donate.css';
import {GrSecure} from 'react-icons/gr';

const FoodModal1 = () => {
    return ( 
        <React.Fragment>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                 <div class="modal-dialog modal-dialog-centered modal-xl d-flex">
                     <div class="modal-content bg-dark text-white" id='content1'>
   
                         <div class="modal-body">
                         <img src={require('../images/image113.png')} class="img-fluid" alt="modal1" />
                            <p className='mt-1'><i>“The meaning of life is to find your gift. The purpose of life is to give it away.”</i></p>

                            <p> You can donate food items mentioned here. As a contributor to Sight For All we make
                                 sure your donation goes directly to supporting our cause. Thank you for your generosity!</p>

                                 <div class="container">
                                    <div class="row g-2">
                                        <div class="gr col-6">
                                        <div class="p-3 border bg-color rounded">RICE</div>
                                        </div>
                                        <div class="col-6">
                                        <div class="p-3 border bg-warning rounded">SUGAR</div>
                                        </div>
                                        <div class="col-6">
                                        <div class="p-3 border bg-warning rounded">DHAL</div>
                                        </div>
                                        <div class="col-6">
                                        <div class="p-3 border bg-warning rounded">FLOUR</div>
                                        </div>
                                        <div class="col-6">
                                        <div class="p-3 border bg-warning rounded">COOKING OIL</div>
                                        </div>
                                        <div class="col-6">
                                        <div class="p-3 border bg-warning rounded">MILK POWDER</div>
                                        </div>
                                        <div class="col-6">
                                        <div class="p-3 border bg-warning rounded">DRY FOODS</div>
                                        </div>
                                        <div class="col-6">
                                        <div class="p-3 border bg-warning rounded">BISCUITS</div>
                                        </div>
                                    </div>
                                    </div>
        
                         </div>

                    </div>

                    <div class="modal-content bg-dark text-white " id='content2'>
                         <div class="modal-header  d-flex flex-column-reverse ">

                            <h3 class="modal-title" >Donate Food Items</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                         <div class="modal-body">

                            <form>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Address</label>
                                </div>
                                <div class="form-floating mb-3">
                                <input type="date" class="form-control" id="floatingPassword" placeholder="date" />
                                <label for="floatingPassword">Donation Date</label>
                            </div>
                            <div class="form-floating mb-3">
                            <label for="exampleDataList" class="form-label">Nearest Location</label>
                                <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                                <datalist id="datalistOptions">
                                <option value="Galle" />
                                <option value="Matara" />
                                <option value="Ambalangoda" />
                                <option value="Welligama" />
                                <option value="Hambantota" />
                                </datalist>
                            </div>  

                            <p>To continue with the food donation you have two options, either you can bring them to us or we can come and 
                                collect them. Please select your preference.</p>  
                            <div className='roption d-flex flex-column align-items-center '>
                                <div class="form-check bg-warning  mb-2  ps-4 p-2 rounded">
                                    <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                                    <label class="form-check-label " for="flexRadioDefault1">
                                        I will come and Donate to You
                                    </label>
                                    </div>
                                    <div class="form-check bg-warning  mb-2 ps-4 p-2 rounded">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                    You Have To Collect My Donation
                                    </label>
                                </div>
                                </div>
                            </form>

        
                         </div>
                        <div class="modal-footer d-flex justify-content-center">
                           <GrSecure/> <p><b>Secure Donation</b></p>
                        </div>
                    </div>
  </div>

</div>
        </React.Fragment>
     );
}
 
export default FoodModal1;