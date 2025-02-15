"use client";

import Link from "next/link";

import { IconGridSquare, IconShield } from "@/components/icons";

const MainMenu = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/blog", label: "Blog" },
    { href: "/offer", label: "Offers", icon: <IconShield /> },
  ];

  return (
    <div className="bb-main-menu-desk">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bb-inner-menu-desk">
              {/* Sidebar Toggle Button */}
              <Link
                href="#"
                className="bb-header-btn bb-sidebar-toggle bb-category-toggle"
              >
                <IconGridSquare />
              </Link>

              {/* Navbar Toggler Button */}
              <button
                className="navbar-toggler shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="ri-menu-2-line"></i>
              </button>

              {/* Main Menu */}
              <div className="bb-main-menu" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  {navItems.map((item, index) => (
                    <li className="nav-item" key={index}>
                      <Link href={`${item.href}`} className="nav-link">
                        {item.icon && item.icon} {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
