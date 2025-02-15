"use client";

import { Fragment } from "react";

import BannerSection from "./BannerSection";
import ShopLeftSide from "./ShopLeftSide";
import ShopRightSide from "./ShopRightSide";

const ShopContainer = () => {
  return (
    <Fragment>
      <BannerSection />
      <section className="section-shop padding-b-50">
        <div className="container">
          <div className="row mb-minus-24">
            <ShopLeftSide />
            <ShopRightSide />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ShopContainer;
