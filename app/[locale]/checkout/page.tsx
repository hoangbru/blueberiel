import { Fragment } from "react";
import "./checkout.css";

import CheckoutContainer from "./_components/CheckoutContainer";
import { Breadcrumb } from "@/components/template";

export default function Checkout() {
  return (
    <Fragment>
      <Breadcrumb />
      <CheckoutContainer />;
    </Fragment>
  );
}
