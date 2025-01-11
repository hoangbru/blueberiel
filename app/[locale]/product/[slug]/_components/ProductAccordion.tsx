const ProductAccordion = () => {
  return (
    <div className="bey-single-accordion">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Product Detail
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="bb-details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, voluptatum. Vitae dolores alias repellat eligendi,
                  officiis, exercitationem corporis quisquam delectus cum non
                  recusandae numquam dignissimos molestiae magnam hic natus.
                  Cumque.
                </p>
                <div className="details-info">
                  <ul>
                    <li>
                      Any Product types that You want - Simple, Configurable
                    </li>
                    <li>Downloadable/Digital Products, Virtual Products</li>
                    <li>Inventory Management with Backordered items</li>
                    <li>Flatlock seams throughout.</li>
                  </ul>
                  <ul>
                    <li>
                      <span>Highlights</span>Form FactorWhole
                    </li>
                    <li>
                      <span>Seller</span>No Returns Allowed
                    </li>
                    <li>
                      <span>Services</span>Cash on Delivery available
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Information
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="information">
                <ul>
                  <li>
                    <span>Weight</span> 500 g
                  </li>
                  <li>
                    <span>Dimensions</span> 17 × 15 × 3 cm
                  </li>
                  <li>
                    <span>Color</span> black,yellow,red
                  </li>
                  <li>
                    <span>Brand</span> Wonder Fort
                  </li>
                  <li>
                    <span>Form Factor</span>Whole
                  </li>
                  <li>
                    <span>Quantity</span>1
                  </li>
                  <li>
                    <span>Container Type</span>Pouch
                  </li>
                  <li>
                    <span>Shelf Life</span>12 Months
                  </li>
                  <li>
                    <span>Ingredients</span>Dalchini, Dhaniya, Badi Elaichi,
                    Laung
                  </li>
                  <li>
                    <span>Other Features</span>Ingredient Type: Vegetarian
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Reviews
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="bb-reviews">
                <div className="reviews-bb-box">
                  <div className="inner-image">
                    <img src="/assets/img/reviews/1.jpg" alt="img-1" />
                  </div>
                  <div className="inner-contact">
                    <h4>Mariya Lykra</h4>
                    <div className="bb-pro-rating">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-line"></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illo, hic expedita asperiores eos neque cumque impedit
                      quam, placeat laudantium soluta repellendus possimus a
                      distinctio voluptate veritatis nostrum perspiciatis est!
                      Commodi!
                    </p>
                  </div>
                </div>
                <div className="reviews-bb-box">
                  <div className="inner-image">
                    <img src="/assets/img/reviews/2.jpg" alt="img-2" />
                  </div>
                  <div className="inner-contact">
                    <h4>Saddika Alard</h4>
                    <div className="bb-pro-rating">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-line"></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illo, hic expedita asperiores eos neque cumque impedit
                      quam, placeat laudantium soluta repellendus possimus a
                      distinctio voluptate veritatis nostrum perspiciatis est!
                      Commodi!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bb-reviews-form">
                <h3>Add a Review</h3>
                <div className="bb-review-rating">
                  <span>Your rating:</span>
                  <div className="bb-pro-rating">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                  </div>
                </div>
                <form action="#">
                  <div className="input-box">
                    <input type="text" placeholder="Name" name="your-name" />
                  </div>
                  <div className="input-box">
                    <input type="email" placeholder="Email" name="your-email" />
                  </div>
                  <div className="input-box">
                    <textarea
                      name="your-comment"
                      placeholder="Enter Your Comment"
                    ></textarea>
                  </div>
                  <div className="input-button">
                    <a href="" className="bb-btn-2">
                      View Cart
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAccordion;
