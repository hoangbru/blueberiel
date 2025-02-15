"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";

import { IconGridSquare, IconStar, IconUser } from "@/components/icons";
import CartSidebar from "@/components/layout/header/_components/CartSidebar";
import { CustomSelect } from "@/components/template";
import MobileHeader from "./MobileHeader";

import { useWishlist } from "@/context/WishlistContext";
import api from "@/libs/axios";
import { ResponseApi } from "@/types/response";
import { categories } from "@/data/categories";
import { useUser } from "@/context/UserContext";

const BottomHeader = () => {
  const { wishlist } = useWishlist();
  const router = useRouter();
  const { profile } = useUser();

  const handleCategoryChange = (value: string) => {
    console.log("Selected city:", value);
  };

  const logout = async () => {
    try {
      const { meta }: ResponseApi = await api.post("/api/logout");

      toast.success(`${meta.message}`);
      localStorage.removeItem("_bbr_tk");

      router.push(`${process.env.NEXT_PUBLIC_BASE_URL}//login`);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="bottom-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="inner-bottom-header">
              <div className="cols bb-logo-detail">
                {/* Header Logo Start */}
                <div className="header-logo">
                  <Link href={`/`}>
                    <Image
                      src="/assets/img/logo/logo.png"
                      className="light"
                      alt="logo"
                      width={125}
                      height={43}
                    />
                    <Image
                      src="/assets/img/logo/logo-dark.png"
                      className="dark"
                      alt="logo"
                      width={125}
                      height={43}
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
                    <div className="inner-select">
                      <CustomSelect
                        options={categories}
                        onChange={handleCategoryChange}
                      />
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
                          <span className="bb-btn-stitle">
                            {profile?.email}
                          </span>
                        </div>
                      </div>
                      <ul className="bb-dropdown-menu">
                        {!profile && (
                          <Fragment>
                            <li>
                              <Link
                                href={`/register`}
                                className="dropdown-item"
                              >
                                Register
                              </Link>
                            </li>
                            <li>
                              <Link href={`/login`} className="dropdown-item">
                                Login
                              </Link>
                            </li>
                          </Fragment>
                        )}
                        {profile?.role === "user" && (
                          <Fragment>
                            <li>
                              <Link
                                href={`/track-order`}
                                className="dropdown-item"
                              >
                                Track Order
                              </Link>
                            </li>
                            <li>
                              <div
                                style={{ cursor: "pointer" }}
                                className="dropdown-item"
                                onClick={logout}
                              >
                                Logout
                              </div>
                            </li>
                          </Fragment>
                        )}
                      </ul>
                    </div>
                    <Link
                      href={`/wishlist`}
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
