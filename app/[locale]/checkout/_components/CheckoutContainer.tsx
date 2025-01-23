import DeliveryMethod from "./DeliveryMethod";
import PaymentMethod from "./PaymentMethod";
import SummarrySection from "./SummarrySection";

const CheckoutContainer = () => {
  return (
    <section className="section-checkout padding-tb-50">
      <div className="container">
        <div className="row mb-minus-24">
          <div className="col-lg-4 col-12 mb-24">
            <div className="bb-checkout-sidebar">
              <SummarrySection />
              <DeliveryMethod />
              <PaymentMethod />
            </div>
          </div>
          <div className="col-lg-8 col-12 mb-24">
            <div
              className="bb-checkout-contact"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div className="main-title">
                <h4>New Customer</h4>
              </div>
              <label className="inner-title">Checkout Options</label>
              <div className="checkout-radio">
                <div className="radio-itens">
                  <input type="radio" id="del1" name="account" checked />
                  <label htmlFor="del1">Register Account</label>
                </div>
                <div className="radio-itens">
                  <input type="radio" id="del2" name="account" />
                  <label htmlFor="del2">Guest Account</label>
                </div>
              </div>
              <p>
                By creating an account you will be able to shop faster, be up to
                date on an order's status, and keep track of the orders you have
                previously made.
              </p>
              <div className="inner-button">
                <a href="javascript:void(0)" className="bb-btn-2">
                  Continue
                </a>
              </div>
              
              <div className="main-title">
                <h4>Billing Details</h4>
              </div>
              <div className="checkout-radio">
                <div className="radio-itens">
                  <input type="radio" id="address1" name="address" checked />
                  <label htmlFor="address1">
                    I want to use an existing address
                  </label>
                </div>
                <div className="radio-itens">
                  <input type="radio" id="address2" name="address" />
                  <label htmlFor="address2">I want to use new address</label>
                </div>
              </div>
              <div className="input-box-form">
                <form method="post">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="input-item">
                        <label>First Name *</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your First Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-item">
                        <label>Last Name *</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your Last Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-item">
                        <label>Address *</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Address Line 1"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-item">
                        <label>City *</label>
                        <div className="custom-select">
                          <select>
                            <option value="option1">City</option>
                            <option value="option1">City 1</option>
                            <option value="option2">City 2</option>
                            <option value="option3">City 3</option>
                            <option value="option4">City 4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-item">
                        <label>Post Code *</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Post Code"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-item">
                        <label>Country *</label>
                        <div className="custom-select">
                          <select>
                            <option value="option1">Country</option>
                            <option value="option1">Country 1</option>
                            <option value="option2">Country 2</option>
                            <option value="option3">Country 3</option>
                            <option value="option4">Country 4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="input-item">
                        <label>Region State *</label>
                        <div className="custom-select">
                          <select>
                            <option value="option1">Region/State</option>
                            <option value="option1">Region/State 1</option>
                            <option value="option2">Region/State 2</option>
                            <option value="option3">Region/State 3</option>
                            <option value="option4">Region/State 4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-button">
                        <button type="button" className="bb-btn-2">
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutContainer;
