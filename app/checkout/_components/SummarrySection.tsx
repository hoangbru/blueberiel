import ProductsInCart from "./ProductsInCart";

import { useCart } from "@/context/CartContext";
import { deliveryCharge } from "@/constants/value";
import { formatPrice } from "@/utils/format";
import { useOrder } from "@/context/OrderContext";

const SummarrySection = () => {
  const { cart } = useCart();
  const { order } = useOrder();
  // const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  // const couponDownBoxRef = useRef<HTMLDivElement | null>(null);

  const shippingFee = order.deliveryMethod === "standard" ? 0 : deliveryCharge;
  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = Math.max(subTotal + shippingFee, 0);

  // const handleToggleCollapsed = () => {
  //   setIsCollapsed((prev) => !prev);
  //   couponDownBoxRef.current?.classList.toggle("active", !isCollapsed);
  // };

  return (
    <div
      className="checkout-items"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div className="sub-title">
        <h4>Order summary ({cart.length} items)</h4>
      </div>
      <div className="checkout-summary">
        <ul>
          <li>
            <span className="left-item">Item(s) subtotal</span>
            <span>{formatPrice(subTotal)}</span>
          </li>
          <li>
            <span className="left-item">Shipping</span>
            <span>{formatPrice(shippingFee)}</span>
          </li>
          <li>
            <span className="left-item">Shipping discount</span>
            <del style={{ color: "red" }}>{formatPrice(0)}</del>
          </li>

          {/* Coupon discount */}
          {/* <li>
            <span className="left-item">Total coupon discount</span>
            <del style={{ color: "red" }}>{formatPrice(deliveryCharge)}</del>
          </li> */}
          <li style={{ padding: "5px 0" }}>
            <span className="left-item" style={{ fontWeight: "700" }}>
              Total (VAT included)
            </span>
            <span style={{ fontWeight: "700" }}>{formatPrice(total)}</span>
          </li>
        </ul>
      </div>
      {/* Coupon Form */}
      {/* <div className="checkout-summary">
        <ul>
          <li>
            <span className="left-item">Coupon Discount</span>
            <span onClick={handleToggleCollapsed} className="apply drop-coupon">
              Apply Coupon
            </span>
          </li>
          <li>
            <div className="coupon-down-box" ref={couponDownBoxRef}>
              <CouponForm />
            </div>
          </li>
        </ul>
      </div> */}
      <ProductsInCart />
    </div>
  );
};

export default SummarrySection;
