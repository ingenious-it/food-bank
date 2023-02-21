import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeCom1.css';
import {motion} from "framer-motion";




const DHome = () => {
    
  return (
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-6  p-4">
                    <h1>Why Is Feed God's Hungry
                        Children Helping To Solve Children 
                        Hunger
                    </h1><br></br>
                    <p>To end Child Hunger, we must work together to bring
                        nutritious food to the children who need it most.
                    </p><br></br>
                    <button type="button" class="btn btn-primary">LEARN WHY</button>
                </div>
            </div>

            <div class="row">
                <div class="col-6  p-4">
                    <motion.div animate={{x:[300,-100]}}>
                    <img class="sideImg rounded float-end"></img>
                    </motion.div>
                    
                </div>
            </div>
        </div>
        <div class="bottom container-fluid"></div>
      
        
    </div>
    
  )
}
export default DHome;