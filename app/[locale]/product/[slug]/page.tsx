import { Fragment } from "react";
import "./product.css";

import ProductContainer from "./_components/ProductContainer";
import { Breadcrumb } from "@/components/template";

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <Fragment>
      <Breadcrumb />
      <ProductContainer slug={slug}/>
    </Fragment>
  );
}
