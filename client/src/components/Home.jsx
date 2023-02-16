import React from 'react';
import ImageComp from './imageComponent';
import BodyIntro from './introbody';
import './Home.css';
import {motion} from 'framer-motion';
import DonatePrompt from './moneyDonation/box';


const Home = () => {
    return ( 
        <React.Fragment>
            <motion.div
             initial={{width:0}}
             animate={{width:"100vw"}}
             exit={{x:window.innerWidth, transition:{duration:0.1}}}
        >
        


        
            <ImageComp/>
            <BodyIntro/>

            <div>
        {/* <section>
            <h2>title</h2>
            <p>Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                recently with desktop publishing software like Aldus PageMaker including versions
                 of Lorem Ipsum.
                 Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                recently with desktop publishing software like Aldus PageMaker including versions
                 of Lorem Ipsum
                 Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                recently with desktop publishing software like Aldus PageMaker including versions
                 of Lorem Ipsum</p>
        </section> */}

            <div className="img11 bg-dark">
                <div class="img-overlay">
                    <h1>How Do You End Child Hunger? You Start With Nutritious Fruits & Vegetables.</h1>
                    <p>3 Proven areas of focus help distribute, supply and provide children the nutrition needed to help prevent Child Hunger.</p> 
                    <button type="button" class="btn btn-outline-light mb-3 mt-3">View Our Programs</button>
                </div>
            </div>
        <section className='m-3'>
        <h2>title</h2>
            <p>Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                recently with desktop publishing software like Aldus PageMaker including versions
                 of Lorem Ipsum.
                 Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                recently with desktop publishing software like Aldus PageMaker including versions
                 of Lorem Ipsum
                 Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                recently with desktop publishing software like Aldus PageMaker including versions
                 of Lorem Ipsum</p>
                
        </section>

        <div className="img12 bg-dark">
                <div class="img-overlay">
                    <h1>What you give today will help prevent Child Hunger in the lives of many tomorrow.</h1>
                    <p>We're on a mission to #StopChild Hunger! Join our network of heroes and begin changing lives today.</p> 
                    <button type="button" class="btn btn-outline-light mb-3 mt-3">Sign Up Now</button>
                </div>
            </div>

            <section className='m-3'>
        <h2>title</h2>
            <p>Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                recently with desktop publishing software like Aldus PageMaker including versions
                 of Lorem Ipsum.
                 Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                recently with desktop publishing software like Aldus PageMaker including versions
                 of Lorem Ipsum
                 Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                recently with desktop publishing software like Aldus PageMaker including versions
                 of Lorem Ipsum</p>
        </section>
    </div>
    </motion.div>
    <section >
        <h2 className='text-center fw-bold mb-3'>Frequently Asked Questions</h2>
        <div className='d-flex justify-content-center'>
        <div class="accordion  mb-3 " id="accordionPanelsStayOpenExample">
  <div class="accordion-item mb-1 ">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button bg-dark text-white icon-white " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item mb-1">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item mb-1">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</div>
        </section>
       

        </React.Fragment>
     );
}
 
export default Home;