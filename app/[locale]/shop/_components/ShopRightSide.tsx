"use client";

import { useState } from "react";

import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import SortSection from "./SortSection";

const ShopRightSide = () => {
  const itemsPerPage = 9; // Adjust the number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination details
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Get the products for the current page
  const currentProducts = products.slice(startItem - 1, endItem);

  // Page numbers array
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Handle page change
  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div className="col-lg-9 col-12 mb-24">
      <div className="bb-shop-pro-inner">
        <div className="row mb-minus-24">
          <SortSection />

          {currentProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}

          <div className="col-12">
            <div className="bb-pro-pagination">
              <p>
                Showing {startItem}-{endItem} of {totalItems} item(s)
              </p>
              <ul>
                {currentPage > 1 && (
                  <li>
                    <a
                      href="#"
                      onClick={() => changePage(currentPage - 1)}
                      className="prev"
                    >
                      <i className="ri-arrow-left-s-line"></i> Prev
                    </a>
                  </li>
                )}

                {pageNumbers.map((page) => (
                  <li
                    key={page}
                    className={page === currentPage ? "active" : ""}
                  >
                    <a href="#" onClick={() => changePage(page)}>
                      {page}
                    </a>
                  </li>
                ))}

                {currentPage < totalPages && (
                  <li>
                    <a
                      href="#"
                      onClick={() => changePage(currentPage + 1)}
                      className="next"
                    >
                      Next <i className="ri-arrow-right-s-line"></i>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopRightSide;
