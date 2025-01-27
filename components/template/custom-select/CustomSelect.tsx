"use client";

import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

const CustomSelect = ({
  options,
  onChange,
}: {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange(value);
    setIsOpen(false);
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOnClickOutside(selectRef, handleClickOutside);

  return (
    <div className="custom-select">
      <div className="select" ref={selectRef}>
        <select
          className="hide-select"
          value={selected}
          onChange={(e) => handleSelect(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div
          className={`custom-select ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {options.find((option) => option.value === selected)?.label ||
            options[0].label}
        </div>

        {isOpen && (
          <ul className={`select-options ${isOpen ? "open" : ""}`}>
            {options.map((option) => (
              <li key={option.value} onClick={() => handleSelect(option.value)}>
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;