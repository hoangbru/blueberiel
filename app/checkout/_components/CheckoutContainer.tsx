"use client";

import { Fragment, useState } from "react";
import toast from "react-hot-toast";

import { Button } from "@/components/base";
import DeliveryMethod from "./DeliveryMethod";
import PaymentMethod from "./PaymentMethod";
import SummarrySection from "./SummarrySection";
import BillingDetails from "./BillingDetails";

import { useProfile } from "@/context/ProfileContext";
import { useOrder } from "@/context/OrderContext";
import { mutation } from "@/utils/fetcher";
import { ResponseApi } from "@/types/response";
import { Order } from "@/types/order";
import { useCart } from "@/context/CartContext";

const CheckoutContainer = () => {
  const { profile } = useProfile();
  const { cart } = useCart();
  const { order } = useOrder();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const cartChanged = cart.map((item) => ({
    productId: item.productId,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    size: item.size,
  }));

  const handleSubmitCheckout = async () => {
    if (cartChanged.length === 0) {
      toast.error("Cart is empty!");
      return;
    }

    setIsLoading(true);
    try {
      const payload = {
        ...order,
        shippingAddress: order.shippingAddress
          ? order.shippingAddress
          : profile?.address,
        items: cartChanged,
      };

      const apiResponse: ResponseApi<{ order: Order }> = await mutation(
        "/api/orders",
        payload,
        "POST"
      );

      toast.success(apiResponse.meta.message);
    } catch (error: unknown) {
      const err = error as { message: string };
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      {profile && (
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
                  <BillingDetails />
                  <DeliveryMethod />
                  <PaymentMethod />
                  <div className="inner-button">
                    <Button
                      type="button"
                      disabled={isLoading}
                      onClick={handleSubmitCheckout}
                    >
                      Place Order
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default CheckoutContainer;
