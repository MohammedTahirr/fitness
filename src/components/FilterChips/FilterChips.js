import React from "react";
import { Chip } from "@mui/material";
import "./FilterChips.css";

const FilterChips = ({ label, color, key, onClick }) => {
  return (
    <div className="chip" key={key} onClick={() => onClick(label)}>
      <Chip label={label} color={color} />
    </div>
  );
};

export default FilterChips;
