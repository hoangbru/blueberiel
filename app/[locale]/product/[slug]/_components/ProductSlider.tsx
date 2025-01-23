import { FC, useRef } from "react";
import Slider, { Settings } from "react-slick";

import { ZoomImage } from "@/components/template";

interface ProductSliderProps {
  images: string[];
}

const ProductSlider: FC<ProductSliderProps> = ({ images }) => {
  const mainSliderRef = useRef<Slider | null>(null);
  const thumbSliderRef = useRef<Slider | null>(null);

  const mainSliderSettings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: thumbSliderRef.current ?? undefined,
  };

  const thumbSliderSettings: Settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    asNavFor: mainSliderRef.current ?? undefined,
  };

  return (
    <div className="single-pro-slider">
      {/* Main slider */}
      <Slider
        {...mainSliderSettings}
        ref={mainSliderRef}
        className="single-product-cover"
      >
        {images.map((image, index) => (
          <ZoomImage key={index}>
            <img
              className="img-responsive"
              src={image}
              alt={`product-${index + 1}`}
            />
          </ZoomImage>
        ))}
      </Slider>

      {/* Thumbnail slider */}
      <Slider
        {...thumbSliderSettings}
        ref={thumbSliderRef}
        className="single-nav-thumb"
      >
        {images.map((image, index) => (
          <div className="single-slide" key={index}>
            <img
              className="img-responsive"
              src={image}
              alt={`thumb-${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
