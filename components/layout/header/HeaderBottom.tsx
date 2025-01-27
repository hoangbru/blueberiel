"use client";

import { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";

import { IconGridSquare, IconStar, IconUser } from "@/components/icons";
import CartSidebar from "@/components/layout/header/_components/CartSidebar";
import MobileHeader from "./MobileHeader";

import { useAppSetting } from "@/context/AppContext";
import { useWishlist } from "@/context/WishlistContext";

const BottomHeader = () => {
  const { settings } = useAppSetting();
  const { wishlist } = useWishlist();
  const options = ["vegetables", "Cold Drinks", "Fruits", "Bakery"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (event: MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
    document.addEventListener("click", closeDropdown);
  };

  const closeDropdown = () => {
    setIsOpen(false);
    document.removeEventListener("click", closeDropdown);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div className="bottom-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="inner-bottom-header">
              <div className="cols bb-logo-detail">
                {/* Header Logo Start */}
                <div className="header-logo">
                  <Link href={`${settings.langPrefix}/`}>
                    <img
                      src="/assets/img/logo/logo.png"
                      alt="logo"
                      className="light"
                    />
                    <img
                      src="/assets/img/logo/logo-dark.png"
                      alt="logo"
                      className="dark"
                    />
                  </Link>
                </div>
                {/* Header Logo End */}
                <Link href="#" className="bb-sidebar-toggle bb-category-toggle">
                  <IconGridSquare />
                </Link>
              </div>
              <div className="cols">
                <div className="header-search">
                  <form className="bb-btn-group-form" action="#">
                    <div className="inner-select" onClick={toggleDropdown}>
                      <div className="custom-select">{selectedOption}</div>
                      {isOpen && (
                        <ul className="select-options">
                          {options.map((option, index) => (
                            <li
                              key={index}
                              onClick={() => selectOption(option)}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <input
                      className="form-control bb-search-bar"
                      placeholder="Search products..."
                      type="text"
                    />
                    <button className="submit" type="submit">
                      <i className="ri-search-line"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="cols bb-icons">
                <div className="bb-flex-justify">
                  <div className="bb-header-buttons">
                    <div className="bb-acc-drop">
                      <div
                        className="bb-header-btn bb-header-user dropdown-toggle bb-user-toggle"
                        title="Account"
                      >
                        <div className="header-icon">
                          <IconUser />
                        </div>
                        <div className="bb-btn-desc">
                          <span className="bb-btn-title">Account</span>
                          <span className="bb-btn-stitle">Login</span>
                        </div>
                      </div>
                      <ul className="bb-dropdown-menu">
                        <li>
                          <Link
                            href={`${settings.langPrefix}/register`}
                            className="dropdown-item"
                          >
                            Register
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`${settings.langPrefix}/track-order`}
                            className="dropdown-item"
                          >
                            Track Order
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`${settings.langPrefix}/login`}
                            className="dropdown-item"
                          >
                            Login
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Link
                      href={`${settings.langPrefix}/wishlist`}
                      className="bb-header-btn bb-wish-toggle"
                      title="Wishlist"
                    >
                      <div className="header-icon">
                        <IconStar />
                      </div>
                      <div className="bb-btn-desc">
                        <span className="bb-btn-title">
                          <b className="bb-wishlist-count">{wishlist.length}</b>{" "}
                          items
                        </span>
                        <span className="bb-btn-stitle">Wishlist</span>
                      </div>
                    </Link>
                    <CartSidebar />
                    <MobileHeader />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
