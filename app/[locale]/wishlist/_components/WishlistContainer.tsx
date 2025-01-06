"use client";

import { useWishlist } from "@/context/WishlistContext";
import { Fragment } from "react";
import ProductCard from "../../shop/_components/ProductCard";

const WishlistContainer = () => {
  const { wishlist: products } = useWishlist();
  return (
    <Fragment>
      {/* wishlist */}
      <section className="section-wishlist padding-tb-50">
        <div className="container">
          <div className="row mb-minus-24 bb-wish-rightside">
            {products.length === 0 ? (
              <p className="bb-wishlist-msg">Your wishlist is empty!</p>
            ) : (
              <Fragment>
                {products.map((product, index) => (
                  <ProductCard product={product} index={index} />
                ))}
              </Fragment>
            )}{" "}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WishlistContainer;
