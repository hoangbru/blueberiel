"use client";

import { useQuery } from "@/context/QueryContext";
import { colors } from "@/data/products";

const ColorSelect = () => {
  const { query, setQuery } = useQuery();

  const handleColorClick = (color: string) => {
    if (query?.color === color) {
      setQuery("color", "");
    } else {
      setQuery("color", color);
    }
  };

  return (
    <div className="bb-sidebar-block">
      <div className="bb-sidebar-title">
        <h3>Color</h3>
      </div>
      <div className="bb-color-contact">
        <ul>
          {colors.map((color) => (
            <li
              key={color}
              className={color === query.color ? "color-sidebar-active" : ""}
              onClick={() => handleColorClick(color)}
            >
              <div className="bb-sidebar-block-item">
                <span
                  style={{
                    backgroundColor: `#${color}`,
                    border: color === query.color ? "2px solid #000" : "none",
                  }}
                ></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ColorSelect;
