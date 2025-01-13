import CategorySelect from "./CategorySelect";
import ColorSelect from "./ColorSelect";
import PriceSelect from "./PriceSelect";
import SizeSelect from "./SizeSelect";

const ShopLeftSide = () => {
  return (
    <div className="col-lg-3 col-12 mb-24">
      <div className="bb-shop-wrap">
        <CategorySelect />
        <ColorSelect />
        <PriceSelect />
        <SizeSelect />
      </div>
    </div>
  );
};

export default ShopLeftSide;
