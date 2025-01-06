import { Fragment } from "react";
import "./wishlist.css";

import Breadcrumb from "@/components/template/breadcrumb/Breadcrumb";
import WishlistContainer from "./_components/WishlistContainer";

export default function Wishlist() {
  return (
    <Fragment>
      <Breadcrumb />
      <WishlistContainer />
    </Fragment>
  );
}
