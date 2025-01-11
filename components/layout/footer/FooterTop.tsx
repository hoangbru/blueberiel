"use client";

import useGetLangPrefix from "@/hooks/useLangPrefix";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterTop = () => {
  const pathname = usePathname();
  const langPrefix = useGetLangPrefix(pathname);

  const footerNavItems = [
    { href: "/about", label: "About Us" },
    { href: "/track-order", label: "Delivery" },
    { href: "/faq", label: "Legal Notice" },
    { href: "/terms", label: "Terms & conditions" },
    { href: "/contact", label: "Contact Us" },
  ];
  return (
    <div className="footer-top padding-tb-50">
      <div className="container">
        <div
          className="row m-minus-991"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {/* Company Section */}
          <div className="col-sm-12 col-lg-4 bb-footer-cat">
            <div className="bb-footer-widget bb-footer-company">
              <img
                src="/assets/img/logo/logo.png"
                className="bb-footer-logo"
                alt="footer logo"
              />
              <img
                src="/assets/img/logo/logo-dark.png"
                className="bb-footer-dark-logo"
                alt="footer logo"
              />
              <p className="bb-footer-detail">
                Blueberiel is the biggest market of grocery products. Get your
                daily needs from our store.
              </p>
              <div className="bb-app-store">
                <Link href="#" className="app-img">
                  <img
                    src="/assets/img/app/android.png"
                    className="adroid"
                    alt="apple"
                  />
                </Link>
                <Link href="#" className="app-img">
                  <img
                    src="/assets/img/app/apple.png"
                    className="apple"
                    alt="apple"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Company Links Section */}
          <div className="col-sm-12 col-lg-4 bb-footer-account">
            <div className="bb-footer-widget">
              <h4 className="bb-footer-heading">Company</h4>
              <div className="bb-footer-links bb-footer-dropdown">
                <ul className="align-items-center">
                  {footerNavItems.map((item, index) => (
                    <li className="bb-footer-link" key={index}>
                      <Link href={`${langPrefix}${item.href}`}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact & Social Section */}
          <div className="col-sm-12 col-lg-4 bb-footer-cont-social">
            <div className="bb-footer-contact">
              <div className="bb-footer-widget">
                <h4 className="bb-footer-heading">Contact</h4>
                <div className="bb-footer-links bb-footer-dropdown">
                  <ul className="align-items-center">
                    <li className="bb-footer-link bb-foo-location">
                      <span className="mt-15px">
                        <i className="ri-map-pin-line"></i>
                      </span>
                      <p>
                        971 Lajamni, Motavarachha, Surat, Gujarat, Bharat
                        394101.
                      </p>
                    </li>
                    <li className="bb-footer-link bb-foo-call">
                      <span>
                        <i className="ri-whatsapp-line"></i>
                      </span>
                      <Link href="tel:+009876543210">+00 9876543210</Link>
                    </li>
                    <li className="bb-footer-link bb-foo-mail">
                      <span>
                        <i className="ri-mail-line"></i>
                      </span>
                      <Link href="mailto:example@email.com">
                        example@email.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bb-footer-social">
              <div className="bb-footer-widget">
                <div className="bb-footer-links bb-footer-dropdown">
                  <ul className="align-items-center">
                    <li className="bb-footer-link">
                      <Link href="#">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li className="bb-footer-link">
                      <Link href="#">
                        <i className="ri-twitter-fill"></i>
                      </Link>
                    </li>
                    <li className="bb-footer-link">
                      <Link href="#">
                        <i className="ri-linkedin-fill"></i>
                      </Link>
                    </li>
                    <li className="bb-footer-link">
                      <Link href="#">
                        <i className="ri-instagram-line"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
