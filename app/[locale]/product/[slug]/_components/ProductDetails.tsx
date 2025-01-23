"use client";

import { Fragment, useEffect, useState } from "react";

import RatingStar from "@/components/template/RatingStar";
import ActionButtons from "./ActionButtons";

import { sale } from "@/constants/value";
import { Product, Variant } from "@/types/product";
import { formatPrice } from "@/utils/format";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [variantSelected, setVariantSelected] = useState<Variant>(
    product.variants[0]
  );

  const newPrice = product.price * (1 - sale / 100);
  const outOfStock = product.stock <= 0;

  const SizeProductSelect = () => {
    const handleSizeClick = (newVariant: Variant) => {
      if (outOfStock || variantSelected?.id === newVariant.id) return;
      setVariantSelected(newVariant);
    };

    return (
      <div className="bb-single-pro-weight">
        <div className="pro-title">
          <h4>Size</h4>
        </div>
        <div className="bb-sizes">
          <ul>
            {product.variants.map((variant, index) => (
              <li
                key={index}
                className={
                  outOfStock
                    ? "disabled"
                    : variant.size === variantSelected?.size
                    ? "active"
                    : ""
                }
                onClick={() => handleSizeClick(variant)}
              >
                <span>{variant.size}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="bb-single-pro-contact">
        <div className="bb-sub-title">
          <h4>{product.name}</h4>
        </div>
        <div className="bb-single-rating">
          <RatingStar rating={product.rating} />
          <span className="bb-read-review">
            |&nbsp;&nbsp;
            <a href="#bb-spt-nav-review">{product.rating.count} Ratings</a>
          </span>
        </div>
        <p>{product.description}</p>
        <div className="bb-single-price-wrap">
          <div className="bb-single-price">
            <div className="price">
              <h5>
                {formatPrice(newPrice)} <span>-{sale}%</span>
              </h5>
            </div>
            <div className="mrp">
              <p>
                M.R.P. : <span>{formatPrice(product.price)}</span>
              </p>
            </div>
          </div>
          <div className="bb-single-price">
            <div className="sku">
              <h5>SKU#: {product.slug}</h5>
            </div>
            <div className="stock">
              <span style={outOfStock ? { color: "red" } : {}}>
                {outOfStock ? "Out of stock" : `In stock: ${variantSelected.stock}`}
              </span>
            </div>
          </div>
        </div>
        {/* <div className="bb-single-list">
          <ul>
            <li>
              <span>Closure :</span> Hook & Loop
            </li>
            <li>
              <span>Sole :</span> Polyvinyl Chloride
            </li>
            <li>
              <span>Width :</span> Medium
            </li>
            <li>
              <span>Outer Material :</span> A-Grade Standard Quality
            </li>
          </ul>
        </div> */}
        <SizeProductSelect />
        <ActionButtons product={product} variantSelected={variantSelected} />
      </div>
    </Fragment>
  );
};

export default ProductDetails;
