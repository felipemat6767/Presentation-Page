import React from 'react'

export const Contact = () => {
  return (
    <div class='m-0'>
      <div className="Contact-back row">
        <div className="d-flex flex-column col-7 align-items-center">
          <div className=''>
            <h3 className='title-Contact-description'>Contact</h3>
            <p className='text-Contact-description'>YOUR NAME</p>
          </div>
          <div className="btn btn-contact">
            <button href="c"><i className="fas fa-arrow-right"></i>
              I'M READY FOR CHANGE
            </button>
          </div>
        </div>
      </div>
      <div className="text-center d-flex col-12 row">
        <div className="col-8 Contact-text">
          <div className='Contactext'><h3>Say “yes” as if it were possible.<p className='text-center'>Because it is.</p></h3></div>
          <p className='Contactparragraph'>Increased agency, confidence and inner clarity are yours to choose.</p>
          <p className='Contactparragraph'> To get started, please fill out the appropriate questionnaire below. I invite you to share openly, especially about what would be a truly meaningful shift in your life. Take your time. This is for you.</p>
          <p className='Contactparragraph'> Please know that I will read everything carefully and get back to you within 24 hours.</p>
          <p className='Contactparragraph'>
            With love and gratitude, YOUR NAME</p>
        </div>

      </div>

      <div className='form'>
        <h2 className='mb-5 text-center'>Contact Me Below</h2>
        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-6">
            <label for="validationCustom01" class="form-label">First name</label>
            <input type="text" class="form-control" id="validationCustom01"  required />
              <div class="valid-feedback">
                Looks good!
              </div>
          </div>
          <div class="col-md-6">
            <label for="validationCustom02" class="form-label">Last name</label>
            <input type="text" class="form-control" id="validationCustom02"  required />
              <div class="valid-feedback">
                Looks good!
              </div>
          </div>
          <div class="col-md-12">
            <label for="validationCustom05" class="form-label">Email</label>
            <input type="email" class="form-control" id="validationCustom05" required />
              <div class="invalid-feedback">
                Please provide a valid Email.
              </div>
          </div>
          <div class="col-md-12">
            <label for="validationCustom03" class="form-label">Comment</label>
            <textarea type="textarea" class="form-control" id="validationCustom03" required />
            <div class="invalid-feedback">
                Please provide a valid Comment.
            </div>
          </div>
          
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                <label class="form-check-label" for="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
      </div>
    </div>
  )
}
