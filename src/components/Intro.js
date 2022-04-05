import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Paisajes3 from "../img/Paisajes3.jpg"

export const Intro = () => {
    return (
        <div>
            <div className="header-banner d-flex">
                <div className="col-5 p-5">
                    <h2 className="title-banner">Intro-Page</h2>
                    <p className="text-banner">Introduction for the Owner of the Site</p>
                    <button className="btn-banner">
                        <i className="fas fa-arrow-right mx-1"></i>
                        <span className="p-1">START NOW</span>
                    </button>
                </div>
            </div>
            <div className='d-flex'>
                <div class="col-7 p-5">
                    <h2 className='title-banner-desc'>Work with me and you will...</h2>
                    <p class="text-banner-desc"><i class="fas fa-check"></i>Stretch beyond anything you could do on your own</p>
                    <p class="text-banner-desc"><i class="fas fa-check"></i>Recognize outdated belief systems and learn how to instantly shift into what’s actually true</p>
                    <p class="text-banner-desc"><i class="fas fa-check"></i>Increase your agency for strategic personal and professional decision making</p>
                    <p class="text-banner-desc"><i class="fas fa-check"></i>Be free to act on what truly deeply matters to you</p>
                    <p class="text">I coach smart, passionate and self-directed business professionals who want to create meaningful personal and organizational change. They serve others before themselves, take responsibility for their choices, and care about their impact in the world around them.</p>
                    <p class="text">They are courageous enough to hear the uncomfortable truth --<em> and then commit to taking relevant, powerful action.</em></p>

                </div>
                <div className="col-5 p-5 d-flex align-items-center">
                    <img src={Paisajes3} alt="Paisaje" className='imgbanner' />
                </div>
            </div>

        </div>
    )
}
