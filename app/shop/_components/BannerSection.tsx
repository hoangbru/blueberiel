import Image from "next/image";

const BannerSection = () => {
  return (
    <section className="section-bnr-details padding-t-50 mb-24">
      <div className="container">
        <div
          className="bnr-details-bg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="row">
            {/* Left Image Section */}
            <div className="col-lg-6 col-12 mb-24">
              <div className="bb-bnr-details">
                <div className="bb-image">
                  <Image
                    src="/assets/img/shop-bnr/one.jpg"
                    alt="one"
                    width={521}
                    height={271}
                  />
                </div>
                <div className="overlay-bnr"></div>
                <div className="inner-contact">
                  <h4>50%</h4>
                  <p>
                    Fresh <br />
                    Vegetable
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="col-lg-6 col-12 mb-24">
              <div className="bb-bnr-details">
                <div className="bb-image">
                  <Image
                    src="/assets/img/shop-bnr/two.jpg"
                    alt="two"
                    width={521}
                    height={271}
                  />
                </div>
                <div className="overlay-bnr"></div>
                <div className="inner-contact">
                  <h4>30%</h4>
                  <p>
                    Fresh & <br />
                    Healthy Fruit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
