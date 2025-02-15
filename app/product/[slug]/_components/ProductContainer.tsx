"use client";

import { Fragment, useCallback, useEffect, useState } from "react";

import ProductAccordion from "./ProductAccordion";
import ProductSlider from "./ProductSlider";
import ProductDetails from "./ProductDetails";

import { Product } from "@/types/product";
import { ResponseApi } from "@/types/response";
import { fetcher } from "@/utils/fetcher";
import { PreLoader } from "@/components/template";

interface ProductContainerProps {
  slug: string;
}

type ProductResponse = ResponseApi<{
  product: Product;
}>;

const ProductContainer = ({ slug }: ProductContainerProps) => {
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchProduct = useCallback(async () => {
    if (!slug) return;
    setIsLoading(true);
    setError(null);

    try {
      const { data }: ProductResponse = await fetcher(`/api/product/${slug}`);

      if (data?.product) {
        setProduct(data.product);
      } else {
        setError("Product not found.");
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      setError("Failed to load product, please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  if (isLoading) return <PreLoader />;

  return (
    <Fragment>
      {error ? (
        <p className="container">{error}</p>
      ) : (
        product && (
          <section className="section-product padding-tb-50">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="bb-single-pro">
                    <div className="row">
                      <div className="col-lg-5 col-12 mb-24">
                        <ProductSlider images={product.images} />
                      </div>
                      <div className="col-lg-7 col-12 mb-24">
                        <ProductDetails product={product} />
                      </div>
                    </div>
                  </div>
                  <ProductAccordion />
                </div>
              </div>
            </div>
          </section>
        )
      )}
    </Fragment>
  );
};

export default ProductContainer;
