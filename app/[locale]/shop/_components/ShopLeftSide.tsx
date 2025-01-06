import Link from "next/link";

const ShopLeftSide = () => {
  return (
    <div className="col-lg-3 col-12 mb-24">
      <div className="bb-shop-wrap">
        <div className="bb-sidebar-block">
          <div className="bb-sidebar-title">
            <h3>Category</h3>
          </div>
          <div className="bb-sidebar-contact">
            <ul>
              {[
                "clothes",
                "Bags",
                "Shoes",
                "Cosmetics",
                "Electrics",
                "Phone",
                "Watch",
              ].map((category) => (
                <li key={category}>
                  <div className="bb-sidebar-block-item">
                    <input type="checkbox" />
                    <Link href="#">{category}</Link>
                    <span className="checked"></span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bb-sidebar-block">
          <div className="bb-sidebar-title">
            <h3>Weight</h3>
          </div>
          <div className="bb-sidebar-contact">
            <ul>
              {[
                "200gm pack",
                "500gm pack",
                "1kg pack",
                "5kg pack",
                "10kg pack",
              ].map((weight) => (
                <li key={weight}>
                  <div className="bb-sidebar-block-item">
                    <input type="checkbox" />
                    <Link href="#">{weight}</Link>
                    <span className="checked"></span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bb-sidebar-block">
          <div className="bb-sidebar-title">
            <h3>Color</h3>
          </div>
          <div className="bb-color-contact">
            <ul>
              {Array.from({ length: 10 }).map((_, index) => (
                <li
                  key={index}
                  className={index === 0 ? "color-sidebar-active" : ""}
                >
                  <div className="bb-sidebar-block-item">
                    <span className={`pro-color-${index + 1}`}></span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bb-sidebar-block">
          <div className="bb-sidebar-title">
            <h3>Price</h3>
          </div>
          <div className="bb-price-range">
            <div className="price-range-slider">
              <p className="range-value">
                <input type="text" id="amount" readOnly />
              </p>
              <div id="slider-range" className="range-bar"></div>
            </div>
          </div>
        </div>

        <div className="bb-sidebar-block">
          <div className="bb-sidebar-title">
            <h3>Tags</h3>
          </div>
          <div className="bb-tags">
            <ul>
              {[
                "Clothes",
                "Fruits",
                "Snacks",
                "Dairy",
                "Seafood",
                "Toys",
                "Perfume",
                "Jewelry",
                "Bags",
              ].map((tag) => (
                <li key={tag}>
                  <Link href="#">{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopLeftSide;
