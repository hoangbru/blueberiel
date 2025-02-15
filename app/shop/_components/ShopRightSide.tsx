"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import ProductCard from "@/components/template/ProductCard";
import SortSection from "./SortSection";
import PaginationSection from "./PaginationSection";

import { useQuery } from "@/context/QueryContext";
import { Product } from "@/types/product";
import { ResponseApi } from "@/types/response";
import { PaginationType } from "@/types/pagination";
import { fetcher } from "@/utils/fetcher";

type ProductsResponse = ResponseApi<{
  products: Product[];
  pagination: PaginationType;
}>;

const ShopRightSide = () => {
  const { query } = useQuery();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<PaginationType | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const queryString = useMemo(() => {
    const params = new URLSearchParams({
      page: currentPage.toString(),
      ...query,
    });
    return params.toString();
  }, [query, currentPage]);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { data }: ProductsResponse = await fetcher(
        `/api/products?${queryString}`
      );
      if (data) {
        setProducts(data.products);
        setPagination(data.pagination);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to load products, please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, [queryString]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handlePageChange = (page: number) => {
    if (!pagination) return;
    const { totalPages } = pagination;

    if (page !== currentPage && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
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
