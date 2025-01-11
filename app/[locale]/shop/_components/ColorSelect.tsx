"use client";

import { useState } from "react";

const ColorSelect = () => {
  const [selectedColor, setSelectedColor] = useState(0);

  const handleColorClick = (index: number) => {
    setSelectedColor(index);
  };

  return (
    <div className="bb-sidebar-block">
      <div className="bb-sidebar-title">
        <h3>Color</h3>
      </div>
      <div className="bb-color-contact">
        <ul>
          {Array.from({ length: 10 }).map((_, index) => (
            <li
              key={index}
              className={index === selectedColor ? "color-sidebar-active" : ""}
              onClick={() => handleColorClick(index)}
            >
              <div className="bb-sidebar-block-item">
                <span className={`pro-color-${index + 1}`}></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ColorSelect;
