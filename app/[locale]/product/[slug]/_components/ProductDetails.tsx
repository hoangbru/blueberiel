"use client";

import toast from "react-hot-toast";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

interface ProductProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductProps) => {
  const { cart, addItem, updateQuantity } = useCart();
  const quantity = cart.find((item) => item.id === product.id)
    ?.quantity as number;

  const addToCart = () => {
    addItem({
      id: product.id,
      name: product.title,
      price: product.newPrice,
      image: product.image,
      quantity: 1,
    });
    toast.success(`'${product.title}' has been added to the cart.`);
  };
  return (
    <div className="bb-single-pro-contact">
      <div className="bb-sub-title">
        <h4>{product.title}</h4>
      </div>
      <div className="bb-single-rating">
        <span className="bb-pro-rating">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={
                index + 1 <= Math.floor(product.rating)
                  ? "ri-star-fill"
                  : index + 1 - product.rating <= 0.5
                  ? "ri-star-half-line"
                  : "ri-star-line"
              }
            ></i>
          ))}
        </span>
        <span className="bb-read-review">
          |&nbsp;&nbsp;
          <a href="#bb-spt-nav-review">{product.rating} Ratings</a>
        </span>
      </div>
      <p>{product.description}</p>
      <div className="bb-single-price-wrap">
        <div className="bb-single-price">
          <div className="price">
            <h5>
              ${product.newPrice.toFixed(2)} <span>-{product.newPrice}%</span>
            </h5>
          </div>
          <div className="mrp">
            <p>
              M.R.P. : <span>${product.oldPrice.toFixed(2)}</span>
            </p>
          </div>
        </div>
        <div className="bb-single-price">
          <div className="sku">
            <h5>SKU#: {product.id}</h5>
          </div>
          <div className="stock">
            <span>{product.availability}</span>
          </div>
        </div>
      </div>
      <div className="bb-single-list">
        <ul>
          {/* {product.specifications.map((spec) => (
                            <li key={spec.label}>
                              <span>{spec.label} :</span> {spec.value}
                            </li>
                          ))} */}
        </ul>
      </div>
      <div className="bb-single-qty">
        <div className="qty-plus-minus">
          <div
            className="dec bb-qtybtn"
            onClick={() => updateQuantity(product.id, quantity - 1)}
          >
            -
          </div>
          <input
            className="qty-input"
            type="text"
            value={quantity}
            min="1"
            onChange={(e) => updateQuantity(product.id, Number(e.target.value))}
          />
          <div
            className="inc bb-qtybtn"
            onClick={() => updateQuantity(product.id, quantity + 1)}
          >
            +
          </div>
        </div>
        <div className="buttons">
          <button onClick={addToCart} className="bb-btn-2">
            Add To Cart
          </button>
        </div>
        <ul className="bb-pro-actions">
          <li className="bb-btn-group">
            <a href="javascript:void(0)">
              <i className="ri-heart-line"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
