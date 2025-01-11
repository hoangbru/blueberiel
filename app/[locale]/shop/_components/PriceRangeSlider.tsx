"use client";

import { useState, useEffect, useRef, FC, MouseEvent } from "react";

const RangeSlider: FC = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Update the slider handles' positions
  const updateSliderHandles = () => {
    if (sliderRef.current) {
      const rangeBar = sliderRef.current.querySelector(
        ".ui-slider-range"
      ) as HTMLDivElement;
      const handleLeft = sliderRef.current.querySelectorAll(
        ".ui-slider-handle"
      )[0] as HTMLSpanElement;
      const handleRight = sliderRef.current.querySelectorAll(
        ".ui-slider-handle"
      )[1] as HTMLSpanElement;

      const totalWidth = sliderRef.current.offsetWidth;
      const leftPercentage = ((minValue - 0) / (100 - 0)) * 100;
      const rightPercentage = ((maxValue - 0) / (100 - 0)) * 100;

      rangeBar.style.left = `${leftPercentage}%`;
      rangeBar.style.width = `${rightPercentage - leftPercentage}%`;
      handleLeft.style.left = `${leftPercentage}%`;
      handleRight.style.left = `${rightPercentage}%`;
    }
  };

  // Handle changes in min and max values
  const handleSlide = (type: "min" | "max", value: number) => {
    if (type === "min" && value < maxValue) setMinValue(value);
    if (type === "max" && value > minValue) setMaxValue(value);
  };

  // Update handles when values change
  useEffect(() => {
    updateSliderHandles();
  }, [minValue, maxValue]);

  // Drag logic
  function handleDragStart(
    event: MouseEvent<HTMLSpanElement>,
    type: "min" | "max"
  ) {
    const handleDrag = (e: globalThis.MouseEvent) => {
      if (sliderRef.current) {
        const sliderLeft = sliderRef.current.getBoundingClientRect().left;
        const sliderWidth = sliderRef.current.offsetWidth;
        const newLeft = Math.min(
          Math.max(e.clientX - sliderLeft, 0),
          sliderWidth
        );
        const newValue = Math.round((newLeft / sliderWidth) * (100 - 0) + 0);

        handleSlide(type, newValue);
      }
    };

    const handleDragEnd = () => {
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("mouseup", handleDragEnd);
    };

    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleDragEnd);
  }

  return (
    <div className="bb-sidebar-block">
      <div className="bb-sidebar-title">
        <h3>Price</h3>
      </div>
      <div className="bb-price-range">
        <div className="price-range-slider">
          <p className="range-value">
            <input
              type="text"
              id="amount"
              value={`$${minValue} - $${maxValue}`}
              readOnly
            />
          </p>
          <div
            id="slider-range"
            className="range-bar ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
            ref={sliderRef}
          >
            <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
            <span
              tabIndex={0}
              className="ui-slider-handle ui-corner-all ui-state-default"
              onMouseDown={(e) => handleDragStart(e, "min")}
            ></span>
            <span
              tabIndex={0}
              className="ui-slider-handle ui-corner-all ui-state-default"
              onMouseDown={(e) => handleDragStart(e, "max")}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
