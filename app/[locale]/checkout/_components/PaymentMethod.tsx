import { Fragment } from "react";

const PaymentMethod = () => {
  return (
    <Fragment>
      <div
        className="checkout-items"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="600"
      >
        <div className="sub-title">
          <h4>Payment Method</h4>
        </div>
        <div className="checkout-method">
          <span className="details">
            Please select the preferred shipping method to use on this order.
          </span>
          <div className="bb-del-option">
            <div className="inner-del">
              <div className="radio-itens">
                <input type="radio" id="Cash1" name="radio-itens" />
                <label htmlFor="Cash1">Cash On Delivery</label>
              </div>
            </div>
          </div>
        </div>
        <div className="about-order">
          <h5>Add Comments About Your Order</h5>
          <textarea name="your-commemt" placeholder="Comments"></textarea>
        </div>
      </div>
      <div
        className="checkout-items"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="800"
      >
        <div className="sub-title">
          <h4>Payment Method</h4>
        </div>
        <div className="payment-img">
          <img src="assets/img/payment/payment.png" alt="payment" />
        </div>
      </div>
    </Fragment>
  );
};

export default PaymentMethod;
