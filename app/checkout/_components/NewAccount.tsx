"use client";

import { useState, useEffect, FormEvent, Fragment } from "react";
import Link from "next/link";

import { Input } from "@/components/base";

import { useProfile } from "@/context/ProfileContext";

const NewAccount = () => {
  const { profile } = useProfile();
  const [isNewAccount, setIsNewAccount] = useState<boolean>(!profile);

  useEffect(() => {
    setIsNewAccount(!profile);
  }, [profile]);

  const handleAccountChange = (e: FormEvent<HTMLInputElement>) => {
    setIsNewAccount(e.currentTarget.id === "newAccount");
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
            checked={!isNewAccount}
            onChange={handleAccountChange}
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
      {isNewAccount && (
        <Fragment>
          <p>
            By creating an account you will be able to shop faster, be up to
            date on an order&apos;s status, and keep track of the orders you
            have previously made.
          </p>
          <div className="input-button" style={{ margin: "16px 0 0" }}>
            <Link href={`/register`} className="bb-btn-2">
              Register
            </Link>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default NewAccount;
