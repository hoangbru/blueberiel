"use client";

import Link from "next/link";

import { useCart } from "@/context/CartContext";
import { useAppSetting } from "@/context/AppContext";
import { formatPrice } from "@/utils/format";

const ProductsInCart = () => {
  const { settings } = useAppSetting();
  const { cart: products } = useCart();

  return (
    <div className="bb-checkout-pro">
      {products.length ? (
        products.map((item, index) => {
          return (
            <div className="pro-items" key={index}>
              <div className="image">
                <Link href={`${settings.langPrefix}/product/${item.slug}`}>
                  <img src={item.image} alt={`product-${item.variant.id}`} />
                </Link>
              </div>
              <div className="items-contact">
                <h4>
                  <Link href={`${settings.langPrefix}/product/${item.slug}`}>
                    {item.name}
                  </Link>
                </h4>

                <div className="inner-price">
                  <span className="new-price">{formatPrice(item.price)}</span>
                  <span className="old-price">{formatPrice(item.price)}</span>
                </div>
                <div className="bb-pro-variation">
                  <ul>
                    <li>
                      <span>x{item.quantity}</span>
                    </li>
                    <li className="active">
                      <span>{item.variant.size}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p style={{ paddingBottom: "5px" }}>No product in cart.</p>
      )}
    </div>
  );
};

export default ProductsInCart;
