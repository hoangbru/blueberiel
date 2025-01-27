const LoginContainer = () => {
  return (
    // <!-- Login -->
    <section className="section-login padding-tb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="section-title bb-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="section-detail">
                <h2 className="bb-title">
                  Log <span>In</span>
                </h2>
                <p>Best place to buy and sell digital products</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div
              className="bb-login-contact"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <form>
                <div className="bb-login-wrap">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="bb-login-wrap">
                  <label htmlFor="email">Password*</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="bb-login-wrap">
                  <a href="javascript:void(0)">Forgot Password?</a>
                </div>
                <div className="bb-login-button">
                  <button className="bb-btn-2" type="submit">
                    Login
                  </button>
                  <a href="register.html">Register</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginContainer;
