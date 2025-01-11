"use client";

import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import SortSection from "./SortSection";

import { Product } from "@/types/product";
import { Pagination } from "@/types/pagination";
import { ResponseApi } from "@/types/response";
import { fetcher } from "@/utils/fetcher";

type ProductsResponse = ResponseApi<{
  products: Product[];
  pagination: Pagination;
}>;

const ShopRightSide = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoadingFetching, setIsLoadingFetching] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [productsPagination, setProductsPagination] =
    useState<Pagination | null>(null);

  // // Calculate pagination details
  // const startItem = (currentPage - 1) * itemsPerPage + 1;
  // const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // // Page numbers array
  // const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    async function fetchPosts() {
      const { data, meta }: ProductsResponse = await fetcher("api/products");
      setProducts(data.products);
      setProductsPagination(data.pagination);
      setIsLoadingFetching(false);
    }
    fetchPosts();
  }, []);

  console.log(productsPagination);

  // Handle page change
  // const changePage = (page: number) => {
  //   if (page >= 1 && page <= totalPages) {
  //     setCurrentPage(page);
  //   }
  // };

  // const Pagination = () => {
  //   return (
  //     <div className="col-12">
  //       <div className="bb-pro-pagination">
  //         <p>
  //           Showing {startItem}-{endItem} of {totalItems} item(s)
  //         </p>
  //         <ul>
  //           {currentPage > 1 && (
  //             <li>
  //               <a
  //                 href="#"
  //                 onClick={() => changePage(currentPage - 1)}
  //                 className="prev"
  //               >
  //                 <i className="ri-arrow-left-s-line"></i> Prev
  //               </a>
  //             </li>
  //           )}

  //           {pageNumbers.map((page) => (
  //             <li key={page} className={page === currentPage ? "active" : ""}>
  //               <a href="#" onClick={() => changePage(page)}>
  //                 {page}
  //               </a>
  //             </li>
  //           ))}

  //           {currentPage < totalPages && (
  //             <li>
  //               <a
  //                 href="#"
  //                 onClick={() => changePage(currentPage + 1)}
  //                 className="next"
  //               >
  //                 Next <i className="ri-arrow-right-s-line"></i>
  //               </a>
  //             </li>
  //           )}
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className="col-lg-9 col-12 mb-24">
      <div className="bb-shop-pro-inner">
        <div className="row mb-minus-24">
          <SortSection />

          {isLoadingFetching ? (
            <p>Loading...</p>
          ) : products?.length ? (
            products.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))
          ) : (
            <p>Sản phẩm trong kho hiện đã hết.</p>
          )}

          {/* <Pagination /> */}
        </div>
      </div>
    </div>
  );
};

export default ShopRightSide;
