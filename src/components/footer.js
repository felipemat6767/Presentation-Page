import React from 'react'

export const Footer = () => {
    return (
        <div className='footer row mt-4 p-5'>
            <div className='col-4 mt-4'>
                <span className=''>Address of the Owner of the Site</span>
            </div>
            <div className='col-4'>
                <h3 className='mb-2'>Quick Links</h3>
                <div className='d-flex flex-column'>
                    <span><i class="fas fa-arrow-right"></i>Home</span>
                    <span><i class="fas fa-arrow-right"></i>Contact</span>
                </div>
            </div>
            <div className='col-4'>
                <h3>Social Media</h3>
                <div className="d-flex">
                    <i><span className="fab fa-facebook" title="icono"></span></i>
                    <i><span className="fab fa-youtube" title="icono"></span></i>
                </div>
            </div>
        </div>
    )
}
