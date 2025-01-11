import { Fragment } from "react";

import ProductAccordion from "./ProductAccordion";
import ProductSlider from "./ProductSlider";
import ProductDetails from "./ProductDetails";
import { Product } from "@/types/product";
import { products } from "@/data/products";

interface ProductContainerProps {
  slug: string;
}

const ProductContainer = ({ slug }: ProductContainerProps) => {
  const product = products.find((item) => item.slug === slug) as Product;

  return (
    <Fragment>
      <section className="section-product padding-tb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bb-single-pro">
                <div className="row">
                  <div className="col-lg-5 col-12 mb-24">
                    {/* <ProductSlider /> */}
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
    </Fragment>
  );
};

export default ProductContainer;
