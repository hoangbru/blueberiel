const images = [
  "/assets/img/new-product/1.jpg",
  "/assets/img/new-product/2.jpg",
  "/assets/img/new-product/3.jpg",
  "/assets/img/new-product/4.jpg",
  "/assets/img/new-product/5.jpg",
];

const ProductSlider = () => {
  return (
    <div className="single-pro-slider">
      <div className="single-product-cover">
        {images.map((image, index) => (
          <div className="single-slide zoom-image-hover" key={index}>
            <img
              className="img-responsive"
              src={image}
              alt={`product-${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="single-nav-thumb">
        {images.map((image, index) => (
          <div className="single-slide" key={index}>
            <img
              className="img-responsive"
              src={image}
              alt={`thumb-${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
