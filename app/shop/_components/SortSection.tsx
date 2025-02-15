import { FC, useState } from "react";

import CustomSelectDropdown from "./CustomSelectDropdown";
import { useQuery } from "@/context/QueryContext";
import { sortOptions } from "@/data/products";

const SortSection: FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { setQuery } = useQuery();

  const toggleViewMode = (mode: "grid" | "list") => {
    setViewMode(mode);
  };

  const handleSortChange = (value: string) => {
    setQuery("sort", value);
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
                <div className="select">
                  <CustomSelectDropdown
                    options={sortOptions}
                    onChange={handleSortChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortSection;
