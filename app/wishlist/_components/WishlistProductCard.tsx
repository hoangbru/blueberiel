import { FC } from "react";
import Link from "next/link";

import RatingStar from "@/components/template/RatingStar";
import { QuickViewModal } from "@/components/template";

import { useWishlist } from "@/context/WishlistContext";
import { Product } from "@/types/product";
import { formatPrice } from "@/utils/format";

interface WishlistProductCardProps {
  product: Product;
  index: number;
}

const WishlistProductCard: FC<WishlistProductCardProps> = ({ product, index }) => {
  const { wishlist, toggleWishlistItem } = useWishlist();
  

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleToggleWishlist = () => {
    toggleWishlistItem(product);
  };

  return (
    <div
      className="col-lg-3 col-md-6 col-12 mb-24 bb-wishlist"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={200 * (index + 1)}
    >
      <div className="bb-pro-box">
        <div className="bb-pro-img">
          <span className="flags">
            <span>New</span>
          </span>
          <Link href={`/product/${product.slug}`}>
            <div className="inner-img">
              <img
                className="main-img"
                src={product.images[0]}
                alt={`product-${product.slug}`}
              />
              <img
                className="hover-img"
                src={product.images[1]}
                alt={`product-${product.slug}`}
              />
            </div>
          </Link>
          <ul className="bb-pro-actions">
            {/* Add to Wishlist */}
            <li className={`bb-btn-group ${isInWishlist && "active"}`}>
              <div onClick={handleToggleWishlist}>
                <i
                  className={isInWishlist ? "ri-heart-fill" : "ri-heart-line"}
                ></i>
              </div>
            </li>

            {/* Quick View */}
            <li className="bb-btn-group">
              <QuickViewModal product={product} />
            </li>
          </ul>
        </div>
        <div className="bb-pro-contact">
          <div className="bb-pro-subtitle">
            <span>{product?.category?.name}</span>
            <RatingStar rating={product.rating} />
          </div>
          <h4 className="bb-pro-title">
            <Link href={`/product/${product.slug}`}>
              {product.name}
            </Link>
          </h4>
          <div className="bb-price">
            <div className="inner-price">
              <span className="new-price">{formatPrice(product.price)}</span>
              <span
                className={`${product.stock === 0 ? "item-left" : "old-price"}`}
              >
                {product.stock === 0
                  ? "Out of stock"
                  : formatPrice(product.price)}
              </span>
            </div>
            <div className="last-items">
              {product.variants.map((item) => item.size).join(", ")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistProductCard;
