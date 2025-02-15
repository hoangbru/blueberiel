import Image from "next/image";
import Link from "next/link";

const AboutContent = () => {
  return (
    <section className="section-about padding-tb-50">
      <div className="container">
        <div className="row mb-minus-24">
          <div className="col-lg-6 col-12 mb-24">
            <div className="bb-about-img">
              <Image
                src="/assets/img/about/one.png"
                alt="about-one"
                width={553}
                height={455}
              />
            </div>
          </div>
          <div className="col-lg-6 col-12 mb-24">
            <div className="bb-about-contact">
              <div
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className="section-detail">
                  <h2 className="bb-title">
                    About the <span>Blueberiel</span>
                  </h2>
                </div>
              </div>
              <div
                className="about-inner-contact"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <h4>Farm-fresh Goodness, just a click Away.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit, rem! Et obcaecati rem nulla, aut assumenda unde
                  minima earum distinctio porro excepturi veritatis officiis
                  dolorem quod. sapiente amet rerum beatae dignissimos aperiam
                  id quae quia velit. Ab optio doloribus hic quas sit corporis
                  numquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit, rem! Et obcaecati rem nulla, aut assumenda unde
                  minima earum distinctio porro excepturi veritatis officiis
                  dolorem quod. sapiente amet rerum beatae dignissimos aperiam
                  id quae quia velit. Ab optio doloribus hic quas sit corporis
                  numquam.
                </p>
              </div>
              <div
                className="bb-vendor-rows row mb-minus-24"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <div className="col-sm-4 mb-24">
                  <div className="bb-vendor-box">
                    <div className="bb-count">
                      <h5 className="counter">200 +</h5>
                    </div>
                    <div className="inner-text">
                      <p>vendors</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-24">
                  <div className="bb-vendor-box">
                    <div className="bb-count">
                      <h5 className="counter">654k +</h5>
                    </div>
                    <div className="inner-text">
                      <p>Sales</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-24">
                  <div className="bb-vendor-box">
                    <div className="bb-count">
                      <h5 className="counter">587k +</h5>
                    </div>
                    <div className="inner-text">
                      <p>Customers</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Optional link to "Learn More" or other section */}
              <Link href="/about-more" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
