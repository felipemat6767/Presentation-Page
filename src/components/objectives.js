import React from 'react'
import Paisajes3 from "../img/Paisajes3.jpg"
import Paisajes5 from "../img/Paisaje5.jpg"
const Objectives = () => {
    return (
        <div>
            <div className='flex'>
                <div class="col">
                    <img src="https://publissoft.ca/test/progra18/wp-content/uploads/2020/10/Life-coaching-icon.png" alt="Coaching Business" className='img-coach' />
                    <h5 className='objective-title'>ELEMENT 1</h5>
                    <span className='objective-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </span>
                </div>
                <div class="col">
                    <img src="https://publissoft.ca/test/progra18/wp-content/uploads/2020/10/business.png" alt="Coaching professionals" className='img-coach' />
                    <h5 className='objective-title'>ELEMENT 2</h5>
                    <span className='objective-text'>HLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                </div>
                <div class="col">
                    <img src="https://publissoft.ca/test/progra18/wp-content/uploads/2020/10/minf-body-integration-icon.png" alt="ADHD Coaching" className='img-coach' />
                    <h5 className='objective-title'>ELEMENT 3</h5>
                    <span className='objective-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </span>
                </div>
            </div>
            <div className='containercentered mt-4'>
                <img src={Paisajes5} alt="Cinque Terre" height="300" />
                <div class="containercenteredtext">
                    <h2>Is something inside of you calling for more?</h2>
                </div>
            </div>
        </div>

    )
}

export default Objectives
