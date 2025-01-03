import Link from "next/link";
import { Fragment, useState } from "react";
import { IconCart } from "@/components/icons";

const CartSidebar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      title: "Organic Apple Juice Pack",
      image: "/assets/img/product/2.jpg",
      price: 15,
      quantity: 1,
    },
  ]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const removeCartItem = (index: number) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const vat = subTotal * 0.2;
  const total = subTotal + vat;
  return (
    <Fragment>
      {/* Cart Button */}
      <div className="bb-header-btn bb-cart-toggle" title="Cart" onClick={toggleCart}>
        <div className="header-icon">
          <IconCart />
          <span className="main-label-note-new"></span>
        </div>
        <div className="bb-btn-desc">
          <span className="bb-btn-title">
            <b className="bb-cart-count">2</b> items
          </span>
          <span className="bb-btn-stitle">Cart</span>
        </div>
      </div>

      <div>
        {/* Cart Overlay */}
        {isCartOpen && (
          <div className="bb-side-cart-overlay" onClick={toggleCart}></div>
        )}

        {/* Cart Sidebar */}
        <div className={`bb-side-cart ${isCartOpen ? "bb-open-cart" : ""}`}>
          <div className="row h-full">
            <div className="col-md-5 col-12 d-none-767">
              <div className="bb-top-contact">
                <div className="bb-cart-title">
                  <h4>Related Items</h4>
                </div>
              </div>
              <div className="bb-cart-box mb-minus-24 cart-related bb-border-right">
                {/* Related Items */}
                <div className="bb-deal-card mb-24">
                  <div className="bb-pro-box">
                    <div className="bb-pro-img">
                      <span className="flags">
                        <span>Hot</span>
                      </span>
                      <a href="javascript:void(0)">
                        <div className="inner-img">
                          <img
                            className="main-img"
                            src="/assets/img/product/2.jpg"
                            alt="product-2"
                          />
                          <img
                            className="hover-img"
                            src="/assets/img/product/back-2.jpg"
                            alt="product-2"
                          />
                        </div>
                      </a>
                      <ul className="bb-pro-actions">
                        <li className="bb-btn-group">
                          <a href="javascript:void(0)" title="Wishlist">
                            <i className="ri-heart-line"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group">
                          <a
                            href="javascript:void(0)"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#bry_quickview_modal"
                          >
                            <i className="ri-eye-line"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group">
                          <a href="compare.html" title="Compare">
                            <i className="ri-repeat-line"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group">
                          <a href="javascript:void(0)" title="Add To Cart">
                            <i className="ri-shopping-bag-4-line"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="bb-pro-contact">
                      <div className="bb-pro-subtitle">
                        <a href="shop-left-sidebar-col-3.html">Juice</a>
                        <span className="bb-pro-rating">
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-line"></i>
                        </span>
                      </div>
                      <h4 className="bb-pro-title">
                        <a href="product-left-sidebar.html">
                          Organic Apple Juice Pack
                        </a>
                      </h4>
                      <div className="bb-price">
                        <div className="inner-price">
                          <span className="new-price">$15</span>
                          <span className="item-left">3 Left</span>
                        </div>
                        <span className="last-items">100 ml</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-12">
              <div className="bb-inner-cart">
                <div className="bb-top-contact">
                  <div className="bb-cart-title">
                    <h4>My cart</h4>
                    <button
                      type="button"
                      className="bb-cart-close"
                      title="Close Cart"
                      onClick={toggleCart}
                    ></button>
                  </div>
                </div>
                <div className="bb-cart-box item">
                  <ul className="bb-cart-items">
                    {cartItems.map((item, index) => (
                      <li key={index} className="cart-sidebar-list">
                        <button
                          type="button"
                          className="cart-remove-item"
                          onClick={() => removeCartItem(index)}
                        >
                          <i className="ri-close-line"></i>
                        </button>
                        <Link href="/product" className="bb-cart-pro-img">
                          <img src={item.image} alt={item.title} />
                        </Link>
                        <div className="bb-cart-contact">
                          <Link href="/product" className="bb-cart-sub-title">
                            {item.title}
                          </Link>
                          <span className="cart-price">
                            <span className="new-price">${item.price}</span>x{" "}
                            {item.quantity}
                          </span>
                          <div className="qty-plus-minus">
                            <div className="dec bb-qtybtn">-</div>
                            <input
                              className="qty-input"
                              type="text"
                              value={item.quantity}
                              readOnly
                            />
                            <div className="inc bb-qtybtn">+</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bb-bottom-cart">
                  <div className="cart-sub-total">
                    <table className="table cart-table">
                      <tbody>
                        <tr>
                          <td className="title">Sub-Total :</td>
                          <td className="price">${subTotal}</td>
                        </tr>
                        <tr>
                          <td className="title">VAT (20%) :</td>
                          <td className="price">${vat}</td>
                        </tr>
                        <tr>
                          <td className="title">Total :</td>
                          <td className="price">${total}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="cart-btn">
                    <Link href="/cart" className="bb-btn-1">
                      <span onClick={toggleCart}> View Cart </span>
                    </Link>
                    <Link href="/checkout" className="bb-btn-2">
                      <span onClick={toggleCart}> Checkout </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartSidebar;
