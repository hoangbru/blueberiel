"use client";

import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import SortSection from "./SortSection";
import PaginationSection from "./PaginationSection";

import { QueryParams, useQuery } from "@/context/QueryContext";
import { Product } from "@/types/product";
import { ResponseApi } from "@/types/response";
import { PaginationType } from "@/types/pagination";
import { fetcher } from "@/utils/fetcher";

type ProductsResponse = ResponseApi<{
  products: Product[];
  pagination: PaginationType;
}>;

const ShopRightSide = () => {
  const { query, setQuery } = useQuery();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<PaginationType | null>(null);

  const currentPage = parseInt(query.page || "1", 10);

  useEffect(() => {
    setQuery("page", currentPage.toString());
  }, []);

  useEffect(() => {
    fetchProducts(query);
  }, [query]);

  const fetchProducts = async (queryParams: QueryParams) => {
    const queryString = new URLSearchParams(queryParams).toString();
    try {
      const { data }: ProductsResponse = await fetcher(
        `api/products?${queryString}`
      );
      setProducts(data.products);
      setPagination(data.pagination);
      setError(null);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to load products, please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    if (
      pagination &&
      page !== currentPage &&
      page >= 1 &&
      page <= pagination.totalPages
    ) {
      setQuery("page", page.toString());
    }
  };

  return (
    <div className="col-lg-9 col-12 mb-24">
      <div className="bb-shop-pro-inner">
        <div className="row mb-minus-24">
          <SortSection />

          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : products.length ? (
            products.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))
          ) : (
            <p>Sản phẩm trong kho hiện đã hết.</p>
          )}

          {pagination && (
            <PaginationSection
              currentPage={currentPage}
              pagination={pagination}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopRightSide;
