"use client";

import { useEffect } from "react";

import DeliveryMethod from "./DeliveryMethod";
import PaymentMethod from "./PaymentMethod";
import SummarrySection from "./SummarrySection";
import BillingDetails from "./BillingDetails";
import NewAccount from "./NewAccount";

import { useLoading } from "@/context/LoadingContext";

const CheckoutContainer = () => {
  const { showLoader, hideLoader } = useLoading();

  useEffect(() => {
    showLoader();
    setTimeout(() => {
      hideLoader();
    }, 600);
  }, []);

  return (
    <section className="section-checkout padding-tb-50">
      <div className="container">
        <div className="row mb-minus-24">
          <div className="col-lg-4 col-12 mb-24">
            <div className="bb-checkout-sidebar">
              <SummarrySection />
            </div>
          </div>
          <div className="col-lg-8 col-12 mb-24">
            <div className="bb-checkout-sidebar">
              <NewAccount />
              <DeliveryMethod />
              <BillingDetails />
              <PaymentMethod />
              <div className="inner-button">
                <a href="#" className="bb-btn-2">
                  Place Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutContainer;
