import React from 'react'
import Paisajes3 from "../img/Paisajes3.jpg"
export const Description = () => {
    return (
        <div className='bg-grey p-5'>
            <div className='d-flex container'>
                <div className="col-5">
                    <img src={Paisajes3} alt="Paisaje" className='imgbanner' />
                </div>
                <div class="col-7 d-flex flex-column align-content-center">
                    <h2 className='title-banner-description'>Your Name</h2>
                    <span className='text-banner-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </span>
                    <button class="btn flexbutton">
                        <i class="fas fa-arrow-right flexbutton"></i>
                        <span>More About You</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
