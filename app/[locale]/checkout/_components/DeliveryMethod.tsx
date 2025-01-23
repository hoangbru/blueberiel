const DeliveryMethod = () => {
  return (
    <div
      className="checkout-items"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="400"
    >
      <div className="sub-title">
        <h4>Delivery Method</h4>
      </div>
      <div className="checkout-method">
        <span className="details">
          Please select the preferred shipping method to use on this order.
        </span>
        <div className="bb-del-option">
          <div className="inner-del">
            <span className="bb-del-head">Free Shipping</span>
            <div className="radio-itens">
              <input type="radio" id="rate1" name="rate" checked />
              <label htmlFor="rate1">Rate - $0 .00</label>
            </div>
          </div>
          <div className="inner-del">
            <span className="bb-del-head">Flat Rate</span>
            <div className="radio-itens">
              <input type="radio" id="rate2" name="rate" />
              <label htmlFor="rate2">Rate - $5.00</label>
            </div>
          </div>
        </div>
      </div>
      <div className="about-order">
        <h5>Add Comments About Your Order</h5>
        <textarea name="your-commemt" placeholder="Comments"></textarea>
      </div>
    </div>
  );
};

export default DeliveryMethod;
