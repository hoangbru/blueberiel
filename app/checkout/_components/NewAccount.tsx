import { FormEvent, useState } from "react";
import Link from "next/link";

import { Input } from "@/components/base";

const NewAccount = () => {
  const [isNewAccount, setIsNewAccount] = useState<boolean>(false);

  const handleAccountChange = (e: FormEvent<HTMLInputElement>) => {
    setIsNewAccount(e.currentTarget.checked);
  };
  
  return (
    <div
      className="bb-checkout-contact"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="400"
    >
      <div className="main-title">
        <h4>New Account</h4>
      </div>
      <div className="checkout-radio">
        <div className="radio-items">
          <Input
            type="radio"
            id="existingAccount"
            name="account"
            defaultChecked={!isNewAccount}
            onChange={() => setIsNewAccount(false)}
          />
          <label htmlFor="existingAccount">Register Account</label>
        </div>
        <div className="radio-items">
          <Input
            type="radio"
            id="newAccount"
            name="account"
            checked={isNewAccount}
            onChange={handleAccountChange}
          />
          <label htmlFor="newAccount">Guest Account</label>
        </div>
      </div>
      <p>
        By creating an account you will be able to shop faster, be up to date on
        an order&apos;s status, and keep track of the orders you have previously
        made.
      </p>
      {isNewAccount && (
        <div className="input-button" style={{ margin: "16px 0 0" }}>
          <Link href={`/register`} className="bb-btn-2">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default NewAccount;
