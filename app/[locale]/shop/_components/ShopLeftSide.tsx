import CategorySelect from "./CategorySelect";
import ColorSelect from "./ColorSelect";
import PriceRangeSlider from "./PriceRangeSlider";
import SizeSelect from "./SizeSelect";

const ShopLeftSide = () => {
  return (
    <div className="col-lg-3 col-12 mb-24">
      <div className="bb-shop-wrap">
        <CategorySelect/>
        <ColorSelect />
        <PriceRangeSlider />
        <SizeSelect />
      </div>
    </div>
  );
};

export default ShopLeftSide;
