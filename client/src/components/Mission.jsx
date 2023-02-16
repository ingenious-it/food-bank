import React from 'react';
import {motion} from 'framer-motion';

 const Mission = () => {
    return ( 
        <React.Fragment>
                    <motion.div
                     initial={{width:0}}
                     animate={{width:"100vw"}}
                     exit={{x:window.innerWidth, transition:{duration:0.2}}}
        >

            </motion.div>
        </React.Fragment>
     );
 }
  
 export default Mission;