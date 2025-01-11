import { ChangeEvent, FC, useState } from "react";

const SortSection: FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Handle view mode toggle
  const toggleViewMode = (mode: "grid" | "list") => {
    setViewMode(mode);
  };

  // Handle sorting option change
  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const sortValue = event.target.value;
    console.log("Selected sort option:", sortValue);
  };

  return (
    <div className="col-12">
      <div className="bb-pro-list-top">
        <div className="row">
          {/* Grid/List Toggle Buttons */}
          <div className="col-6">
            <div className="bb-bl-btn">
              <button
                type="button"
                className={`grid-btn btn-grid-100 ${
                  viewMode === "grid" ? "active" : ""
                }`}
                onClick={() => toggleViewMode("grid")}
              >
                <i className="ri-apps-line"></i>
              </button>
              {/* <button
                type="button"
                className={`grid-btn btn-list-100 ${
                  viewMode === "list" ? "active" : ""
                }`}
                onClick={() => toggleViewMode("list")}
              >
                <i className="ri-list-unordered"></i>
              </button> */}
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="col-6">
            <div className="bb-select-inner">
              <div className="custom-select">
                <select onChange={handleSortChange}>
                  <option value="" disabled >
                    Sort by
                  </option>
                  <option value="1">Position</option>
                  <option value="2">Relevance</option>
                  <option value="3">Name, A to Z</option>
                  <option value="4">Name, Z to A</option>
                  <option value="5">Price, low to high</option>
                  <option value="6">Price, high to low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortSection;
