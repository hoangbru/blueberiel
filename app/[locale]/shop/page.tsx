import { Fragment } from "react";
import "./shop.css";

import ShopContainer from "./_components/ShopContainer";
import { Breadcrumb } from "@/components/template";

export default function Shop() {
  return (
    <Fragment>
      <Breadcrumb />
      <ShopContainer />
    </Fragment>
  );
}
