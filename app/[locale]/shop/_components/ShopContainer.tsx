"use client";

import { Fragment, useEffect } from "react";

import BannerSection from "./BannerSection";
import ShopLeftSide from "./ShopLeftSide";
import ShopRightSide from "./ShopRightSide";

import { useLoading } from "@/context/LoadingContext";

const ShopContainer = () => {
  const { showLoader, hideLoader } = useLoading();

  useEffect(() => {
    showLoader();
    setTimeout(() => {
      hideLoader();
    }, 600);
  }, []);

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
