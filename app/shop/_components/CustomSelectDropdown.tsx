import { FC, Fragment, useState } from "react";

import { OptionSort } from "@/types/product";

interface CustomSelectDropdownProps {
  options: OptionSort[];
  onChange: (value: string) => void;
}

const CustomSelectDropdown: FC<CustomSelectDropdownProps> = ({
  options,
  onChange,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("Sort by");

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleOptionClick = (option: OptionSort) => {
    setSelectedOption(option.label);
    onChange(option.value);
    setIsActive(false);
  };

  return (
    <Fragment>
      {/* Selected option */}
      <div
        className={`custom-select ${isActive ? "active" : ""}`}
        onClick={toggleDropdown}
      >
        {selectedOption}
      </div>

      {/* Dropdown options */}
      {isActive && (
        <ul className={`select-options open`}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={selectedOption === option.label ? "active" : ""}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default CustomSelectDropdown;
