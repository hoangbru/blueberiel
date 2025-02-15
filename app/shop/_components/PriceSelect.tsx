"use client";

import { useEffect, useState } from "react";

import { useQuery } from "@/context/QueryContext";
import { maxValuePrice } from "@/constants/value";
import { prices } from "@/data/products";

const PriceSelect = () => {
  const { query, setQuery } = useQuery();
  const [priceSelected, setPriceSelected] = useState<string>("all");

  useEffect(() => {
    if (query?.minPrice && query?.maxPrice) {
      setPriceSelected(`${query?.minPrice}-${query?.maxPrice}`);
    } else {
      setPriceSelected("all");
    }
  }, [query?.minPrice, query?.maxPrice]);

  const handlePriceClick = (price: string) => {
    if (price === "all") {
      setQuery("minPrice", "");
      setQuery("maxPrice", "");
    } else {
      const [min, max] = price.split("-").map(Number);
      setQuery("minPrice", min.toString());
      setQuery("maxPrice", max.toString());
    }
  };

  return (
    <div className="bb-sidebar-block">
      <div className="bb-sidebar-title">
        <h3>Price</h3>
      </div>
      <div className="bb-price-range">
        <div className="price-range-slider">
          <div className="range-value">
            <div className="bb-sizes mb-4">
              <ul>
                {prices.map((price) => (
                  <li
                    key={price}
                    className={priceSelected === price ? "active" : ""}
                    onClick={() => handlePriceClick(price)}
                  >
                    <span>
                      {price === "all"
                        ? price
                        : price === maxValuePrice
                        ? "$100+"
                        : `$${price}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <input
              type="text"
              id="amount"
              value={
                query.minPrice === "100"
                  ? "$100+"
                  : `$${query?.minPrice || 0} - $${query?.maxPrice || 100}`
              }
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSelect;
