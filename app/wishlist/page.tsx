import { Fragment } from "react";
import "./wishlist.css";

import WishlistContainer from "./_components/WishlistContainer";
import { Breadcrumb } from "@/components/template";

export default function Wishlist() {
  return (
    <Fragment>
      <Breadcrumb />
      <WishlistContainer />
    </Fragment>
  );
}
