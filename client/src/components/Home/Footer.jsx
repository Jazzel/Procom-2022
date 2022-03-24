import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <center>
      <Typography>&copy; {new Date().getFullYear()} Copyright</Typography>
    </center>
  );
};

export default Footer;
