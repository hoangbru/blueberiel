import { Fragment } from "react";
import "./shop.css";

import Breadcrumb from "@/components/template/breadcrumb/Breadcrumb";
import ShopContainer from "./_components/ShopContainer";

export default function Shop() {
  return (
    <Fragment>
      <Breadcrumb />
      <ShopContainer />
    </Fragment>
  );
}
