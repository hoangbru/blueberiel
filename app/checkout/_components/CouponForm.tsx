import { FormEvent, useRef, useState } from "react";

import { Input } from "@/components/base";

const CouponForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      couponCode: formData.get("coupon-code"),
    };
    try {
      console.log(data)
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        id="coupon-code"
        ref={inputRef}
        className="bb-coupon"
        placeholder="Enter Your coupon Code"
        name="coupon-code"
      />
      <button disabled={isLoading} type="submit" className="bb-btn-2">
        {isLoading ? "Loading..." : "Apply"}
      </button>
    </form>
  );
};

export default CouponForm;
