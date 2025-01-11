"use client";

import { useState } from "react";

const SizeSelect = () => {
  const [selectedSize, setSelectedSize] = useState<string>("");

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="bb-sidebar-block">
      <div className="bb-sidebar-title">
        <h3>Sizes</h3>
      </div>
      <div className="bb-sizes">
        <ul>
          {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
            <li
              key={size}
              className={size === selectedSize ? "active" : ""}
              onClick={() => handleSizeClick(size)}
            >
              <span>{size}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SizeSelect;
