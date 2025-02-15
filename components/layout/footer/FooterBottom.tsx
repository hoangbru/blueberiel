"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const FooterBottom = () => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="bb-bottom-info">
            <div className="footer-copy">
              <div className="footer-bottom-copy">
                <div className="bb-copy">
                  Copyright © {currentYear}
                  <Link className="site-name" href={`/`}>
                    Blueberiel
                  </Link>{" "}
                  all rights reserved.
                </div>
              </div>
            </div>
            <div className="footer-bottom-right">
              <div className="footer-bottom-payment d-flex justify-content-center">
                <div className="payment-link">
                  <img src="/assets/img/payment/payment.png" alt="payment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
