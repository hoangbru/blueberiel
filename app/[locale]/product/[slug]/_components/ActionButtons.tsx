"use client";

import { FC, useState } from "react";

import { QuickViewModal } from "@/components/template";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Product, Variant } from "@/types/product";

interface ActionButtonsProps {
  product: Product;
  variantSelected: Variant;
}

const ActionButtons: FC<ActionButtonsProps> = ({
  product,
  variantSelected,
}) => {
  const { addItem } = useCart();
  const { wishlist, toggleWishlistItem } = useWishlist();
  const [quantity, setQuantity] = useState<number>(1);

  const isInWishlist = wishlist.some((item) => item.id === product.id);
  const outOfStock = variantSelected.stock <= 0;

  const updateQuantity = (newQuantity: number) => {
    if (outOfStock || quantity > variantSelected.stock) return;
    setQuantity(Math.max(1, Math.min(newQuantity, variantSelected.stock)));
  };

  const handleAddToCart = () => {
    if (outOfStock || quantity > variantSelected.stock) return;
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: variantSelected,
      image: product.images[0],
      quantity,
    });
  };

  const handleToggleWishlist = () => {
    toggleWishlistItem(product);
  };

  return (
    <div className="bb-single-qty">
      <div className="qty-plus-minus">
        <div
          className={`dec bb-qtybtn ${outOfStock && "disabled"}`}
          onClick={() => updateQuantity(quantity - 1)}
        >
          -
        </div>
        <input
          className={`qty-input ${outOfStock && "disabled"}`}
          type="text"
          value={quantity}
          min={1}
          max={variantSelected.stock}
          disabled={outOfStock}
          readOnly
        />
        <div
          className={`inc bb-qtybtn ${outOfStock && "disabled"}`}
          onClick={() => updateQuantity(quantity + 1)}
        >
          +
        </div>
      </div>

      <div className="buttons">
        <button
          onClick={handleAddToCart}
          disabled={outOfStock}
          className={`bb-btn-${outOfStock ? "disabled" : "2"}`}
        >
          Add To Cart
        </button>
      </div>
      <ul className="bb-pro-actions">
        <li className="bb-btn-group">
          <span
            className={`button-action ${isInWishlist && "active"}`}
            onClick={handleToggleWishlist}
          >
            <i className={isInWishlist ? "ri-heart-fill" : "ri-heart-line"}></i>
          </span>
        </li>
        <li>
          <QuickViewModal product={product} />
        </li>
      </ul>
    </div>
  );
};

export default ActionButtons;
