import { Fragment } from "react";
import "./product.css";

import Breadcrumb from "@/components/template/breadcrumb/Breadcrumb";
import ProductContainer from "./_components/ProductContainer";

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  console.log(slug)
  return (
    <Fragment>
      <Breadcrumb />
      <ProductContainer slug={slug}/>
    </Fragment>
  );
}
