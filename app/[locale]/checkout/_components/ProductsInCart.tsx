"use client";

import Link from "next/link";

import RatingStar from "@/components/template/RatingStar";

import { useCart } from "@/context/CartContext";
import { useAppSetting } from "@/context/AppContext";
import { formatPrice } from "@/utils/format";

const ProductsInCart = () => {
  const { settings } = useAppSetting();
  const { cart: products } = useCart();

  return (
    <div className="bb-checkout-pro">
      {products.length
        ? products.map((product, index) => {
            return (
              <div className="pro-items" key={index}>
                <div className="image">
                  <img src={product.image} alt={product.slug} />
                </div>
                <div className="items-contact">
                  <h4>
                    <Link
                      href={`${settings.langPrefix}/product/${product.slug}`}
                    >
                      {product.name}
                    </Link>
                  </h4>
                  <RatingStar rating={product.rating} />
                  <div className="inner-price">
                    <span className="new-price">
                      {formatPrice(product.price)}
                    </span>
                    <span className="old-price">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  <div className="bb-pro-variation">
                    <ul>
                      <li className="active">
                        <a
                          href="javascript:void(0)"
                          className="bb-opt-sz"
                          data-tooltip="Small"
                        >
                          250g
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="bb-opt-sz"
                          data-tooltip="Medium"
                        >
                          500g
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="bb-opt-sz"
                          data-tooltip="Large"
                        >
                          1kg
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })
        : "No product in cart."}
    </div>
  );
};

export default ProductsInCart;
