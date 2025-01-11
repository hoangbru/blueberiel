import React, { FC } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import useGetLangPrefix from "@/hooks/useLangPrefix";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: FC<ProductCardProps> = ({ product, index }) => {
  const { addItem: addToCart } = useCart();
  const {
    wishlist,
    removeItem: removeFromWishlist,
    addItem: addToWishlist,
  } = useWishlist();
  const pathname = usePathname();
  const langPrefix = useGetLangPrefix(pathname);
  
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.newPrice,
      image: product.image,
      quantity: 1,
    });
    toast.success(`'${product.title}' has been added to the cart.`);
  };

  const handleToggleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
      toast.success(`'${product.title}' has been removed from the wishlist.`);
    } else {
      addToWishlist(product);
      toast.success(`'${product.title}' has been added to the wishlist.`);
    }
  };
  return (
    <div
      className="col-md-4 col-6 mb-24 bb-product-box pro-bb-content"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={200 * (index + 1)}
    >
      <div className="bb-pro-box">
        <div className="bb-pro-img">
          <span className="flags">
            <span>New</span>
          </span>
          <Link href={`${langPrefix}/product/${product.slug}`}>
            <div className="inner-img">
              <img
                className="main-img"
                src={product.image}
                alt={`product-${product.slug}`}
              />
              <img
                className="hover-img"
                src={product.hoverImage}
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
              <a
                href="#"
                data-link-action="quickview"
                title="Quick view"
                data-bs-toggle="modal"
                data-bs-target="#bry_quickview_modal"
              >
                <i className="ri-eye-line"></i>
              </a>
            </li>

            {/* Add to Cart */}
            <li className="bb-btn-group">
              <div onClick={handleAddToCart}>
                <i className="ri-shopping-bag-4-line"></i>
              </div>
            </li>
          </ul>
        </div>
        <div className="bb-pro-contact">
          <div className="bb-pro-subtitle">
            <Link href="#">{product.category}</Link>
            <span className="bb-pro-rating">
              {Array.from({ length: product.rating }).map((_, i) => (
                <i key={i} className="ri-star-fill"></i>
              ))}
              {Array.from({ length: 5 - product.rating }).map((_, i) => (
                <i key={i} className="ri-star-line"></i>
              ))}
            </span>
          </div>
          <h4 className="bb-pro-title">
            <Link href={`${langPrefix}/product/${product.slug}`}>{product.title}</Link>
          </h4>
          <p>{product.description}</p>
          <div className="bb-price">
            <div className="inner-price">
              <span className="new-price">${product.newPrice}</span>
              <span className="old-price">${product.oldPrice}</span>
            </div>
            <span className="last-items">{product.weight}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
