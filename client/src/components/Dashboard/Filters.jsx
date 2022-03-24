import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const Filters = () => {
  return (
    <div style={{ width: "100%" }}>
      <Button variant="contained">
        <FilterAltIcon sx={{ mr: 1 }} />
        Filter
      </Button>
      <Button sx={{ ml: 1 }} variant="contained">
        <AccessTimeIcon sx={{ mr: 1 }} />
        Set Time
      </Button>

      <hr />
    </div>
  );
};

export default Filters;
