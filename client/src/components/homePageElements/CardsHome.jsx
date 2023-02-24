import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardsHome.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";

const DCards = () => {
    return ( 
        <div className='major'>
            
            <div className='maincontainer d-flex justify-content-center align-items-center flex-column text-center'>
                    <h1 className='m-3'>Together We're On A Plan To End Child Hunger</h1>
                    <p>Donate To Feed God's Hungry Children</p>

           </div>

           <div className='cardcontainer d-flex align-items-center justify-content-around mt-4 '>
            <div className='moneyd mb-4 rounded  text-center'>
                <div className='m-2'>
                    <FaShoppingCart className='icon' />
                <h3>Food Donation</h3>
                <p>Give to join us in providing nutritious meals to children facing malnutrition.</p>
                <button type="button" class="btn btn-outline-warning">GIVE TODAY</button>
                </div>
            </div>
           
            <div className='foodd mb-4 rounded text-center '>
                <div className='m-2'>
                <FaHandHoldingUsd className='icon' /> 
                    <h3>Money Donation</h3>
                <p>Give $100+ monthly to join our stop<br></br>
                    Child Hunger Digest and receive our <br></br>
                    monthly newsletter with updates on no <br></br>
                    longer facing Child Hunger.</p>
                    <button type="button" class="btn btn-outline-light">START GIVING MONTHLY</button>

</div>
                
            </div>

            <div className='propose mb-4 rounded text-center'>
                <div className='m-2'>
                <FiUserPlus className='icon' />
                <h3>Propose Victims</h3>
                <p>Give using our Corporate Match directory, all you have to do is select your employer and they'll match your donation dollar for dollar</p>
                <button type="button" class="btn btn-outline-warning">FIND YOUR COMPANY</button>

                </div>
                

            </div>

           </div>

            


        </div>
     );
}
 
export default DCards;