import { Fragment } from "react";
import "./product.css";

import ProductContainer from "./_components/ProductContainer";
import { Breadcrumb } from "@/components/template";

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params
  return (
    <Fragment>
      <Breadcrumb title="Product" />
      {slug && <ProductContainer slug={slug} />}
    </Fragment>
  );
}
