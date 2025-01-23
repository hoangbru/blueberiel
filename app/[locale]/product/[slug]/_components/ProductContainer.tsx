"use client";

import { Fragment, useEffect, useState } from "react";

import ProductAccordion from "./ProductAccordion";
import ProductSlider from "./ProductSlider";
import ProductDetails from "./ProductDetails";

import { Product } from "@/types/product";
import { ResponseApi } from "@/types/response";
import { fetcher } from "@/utils/fetcher";
import { useLoading } from "@/context/LoadingContext";

interface ProductContainerProps {
  slug: string;
}

type ProductResponse = ResponseApi<{
  product: Product;
}>;

const ProductContainer = ({ slug }: ProductContainerProps) => {
  const { showLoader, hideLoader } = useLoading();
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | undefined>(undefined);
  
  useEffect(() => {
    fetchProduct(slug);
  }, [slug]);

  const fetchProduct = async (slug: string) => {
    showLoader();
    try {
      const { data }: ProductResponse = await fetcher(`api/product/${slug}`);
      setProduct(data.product);
      setError(null);
    } catch (error) {
      console.error("Error fetching product:", error);
      setError("Failed to load product, please try again later.");
    } finally {
      hideLoader();
    }
  };

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
