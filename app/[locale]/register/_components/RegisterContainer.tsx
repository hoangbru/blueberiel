const RegisterContainer = () => {
  return (
    // <!-- Register -->
    <section className="section-register padding-tb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="bb-register"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="row">
                <div className="col-12">
                  <div className="section-title bb-center">
                    <div className="section-detail">
                      <h2 className="bb-title">Register</h2>
                      <p>Best place to buy and sell digital products</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <form method="post">
                    <div className="bb-register-wrap bb-register-width-50">
                      <label>First Name*</label>
                      <input
                        type="text"
                        name="firstname"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="bb-register-wrap bb-register-width-50">
                      <label>Last Name*</label>
                      <input
                        type="text"
                        name="Lasttname"
                        placeholder="Enter your Last name"
                      />
                    </div>
                    <div className="bb-register-wrap bb-register-width-50">
                      <label>Email*</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                      />
                    </div>
                    <div className="bb-register-wrap bb-register-width-50">
                      <label>Phone Number*</label>
                      <input
                        type="text"
                        name="phonenumber"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="bb-register-wrap bb-register-width-100">
                      <label>Address*</label>
                      <input
                        type="text"
                        name="phonenumber"
                        placeholder="Address Line 1"
                      />
                    </div>
                    <div className="bb-register-wrap bb-register-width-50">
                      <label>City*</label>
                      <div className="custom-select">
                        <select>
                          <option value="option1">city 1</option>
                          <option value="option2">city 2</option>
                          <option value="option3">city 3</option>
                          <option value="option4">city 4</option>
                        </select>
                      </div>
                    </div>
                    <div className="bb-register-wrap bb-register-width-50">
                      <label>Post Code*</label>
                      <input
                        type="text"
                        name="phonenumber"
                        placeholder="Post Code"
                      />
                    </div>
                    <div className="bb-register-wrap bb-register-width-50">
                      <label>Country*</label>
                      <div className="custom-select">
                        <select>
                          <option value="option1">Country 1</option>
                          <option value="option2">Country 2</option>
                          <option value="option3">Country 3</option>
                          <option value="option4">Country 4</option>
                        </select>
                      </div>
                    </div>
                    <div className="bb-register-wrap bb-register-width-50">
                      <label>Region State*</label>
                      <div className="custom-select">
                        <select>
                          <option value="option1">Region/State 1</option>
                          <option value="option2">Region/State 2</option>
                          <option value="option3">Region/State 3</option>
                          <option value="option4">Region/State 4</option>
                        </select>
                      </div>
                    </div>
                    <div className="bb-register-button">
                      <button type="button" className="bb-btn-2">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterContainer;
