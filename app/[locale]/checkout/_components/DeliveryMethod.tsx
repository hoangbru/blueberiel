import { formatPrice } from "@/utils/format";

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
        <div className="bb-del-option">
          <div className="inner-del">
            <span className="bb-del-head">Standard</span>
            <div className="radio-items">
              <input type="radio" id="rate1" name="rate" />
              <label htmlFor="rate1">Rate - {formatPrice(0)}</label>
            </div>
          </div>
          <div className="inner-del">
            <span className="bb-del-head">Express</span>
            <div className="radio-items">
              <input type="radio" id="rate2" name="rate" />
              <label htmlFor="rate2">Rate - {formatPrice(5)}</label>
            </div>
          </div>
        </div>
        <span className="details">
          Please select the preferred shipping method to use on this order.
        </span>
      </div>
    </div>
  );
};

export default DeliveryMethod;
