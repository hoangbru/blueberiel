"use client";

import { useQuery } from "@/context/QueryContext";

const SizeSelect = () => {
  const { query, setQuery } = useQuery();

  const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
  const handleSizeClick = (size: string) => {
    if (query?.size === size) {
      setQuery("size", "");
    } else {
      setQuery("size", size);
    }
  };

  return (
    <div className="bb-sidebar-block">
      <div className="bb-sidebar-title">
        <h3>Size</h3>
      </div>
      <div className="bb-sizes">
        <ul>
          {sizes.map((size) => (
            <li
              key={size}
              className={size === query.size ? "active" : ""}
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
