import React from 'react';
import './Donate.css'

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

                    <div class="modal-content " id='content2'>
                         <div class="modal-header  d-flex flex-column-reverse ">

                            <h3 class="modal-title" >Donate Food Items</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                         <div class="modal-body">
        
                         </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                         <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
  </div>

</div>
        </React.Fragment>
     );
}
 
export default FoodModal1;