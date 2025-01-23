import ProductsInCart from "./ProductsInCart";

const SummarrySection = () => {
  return (
    <div
      className="checkout-items"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div className="sub-title">
        <h4>Summary</h4>
      </div>
      <div className="checkout-summary">
        <ul>
          <li>
            <span className="left-item">sub-total</span>
            <span>$56</span>
          </li>
          <li>
            <span className="left-item">Delivery Charges</span>
            <span>$56</span>
          </li>
          <li>
            <span className="left-item">Coupon Discount</span>
            <span>
              <a href="javascript:void(0)" className="apply drop-coupon">
                Apply Coupon
              </a>
            </span>
          </li>
          <li>
            <div className="coupon-down-box">
              <form method="post">
                <input
                  className="bb-coupon"
                  type="text"
                  placeholder="Enter Your coupon Code"
                  name="bb-coupon"
                  required
                />
                <button className="bb-btn-2" type="submit">
                  Apply
                </button>
              </form>
            </div>
          </li>
        </ul>
      </div>
      <ProductsInCart />
    </div>
  );
};

export default SummarrySection;
