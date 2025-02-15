import { ElementRef, FormEvent, useRef, useState } from "react";

import ProductsInCart from "./ProductsInCart";
import { Input } from "@/components/base";

import { useCart } from "@/context/CartContext";
import { deliveryCharge } from "@/constants/value";
import { formatPrice } from "@/utils/format";

const SummarrySection = () => {
  const { cart } = useCart();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [couponDiscount, setCouponDiscount] = useState<number>(0);
  const couponDownBoxRef = useRef<HTMLDivElement | null>(null);

  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = Math.max(subTotal + deliveryCharge - couponDiscount, 0);

  const handleToggleCollapsed = () => {
    setIsCollapsed((prev) => !prev);
    couponDownBoxRef.current?.classList.toggle("active", !isCollapsed);
  };

  const CouponApplyForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const inputRef = useRef<ElementRef<"input">>(null);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsLoading(true);

      const formData = new FormData(event.currentTarget);
      const data = {
        couponCode: formData.get("coupon-code"),
      };
      try {
        const res = await fetch("/api/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await res.json();
        console.log("Response:", result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    
    return (
      <form onSubmit={onSubmit}>
        <Input
          id="coupon-code"
          ref={inputRef}
          className="bb-coupon"
          placeholder="Enter Your coupon Code"
          name="coupon-code"
        />
        <button disabled={isLoading} type="submit" className="bb-btn-2">
          {isLoading ? "Loading..." : "Apply"}
        </button>
      </form>
    );
  };

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
            <span>{formatPrice(deliveryCharge)}</span>
          </li>
          <li>
            <span className="left-item">Shipping discount</span>
            <del style={{ color: "red" }}>{formatPrice(0)}</del>
          </li>
          {!!couponDiscount && (
            <li>
              <span className="left-item">Total doupon discount</span>
              <del style={{ color: "red" }}>{formatPrice(deliveryCharge)}</del>
            </li>
          )}
          <li style={{ padding: "5px 0" }}>
            <span className="left-item" style={{ fontWeight: "700" }}>
              Total (VAT included)
            </span>
            <span style={{ fontWeight: "700" }}>{formatPrice(total)}</span>
          </li>
        </ul>
      </div>
      <div className="checkout-summary">
        <ul>
          <li>
            <span className="left-item">Coupon Discount</span>
            <span onClick={handleToggleCollapsed} className="apply drop-coupon">
              Apply Coupon
            </span>
          </li>
          <li>
            <div className="coupon-down-box" ref={couponDownBoxRef}>
              <CouponApplyForm />
            </div>
          </li>
        </ul>
      </div>
      <ProductsInCart />
    </div>
  );
};

export default SummarrySection;
