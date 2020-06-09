import React from "react";
import { Typography, Link } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright by{" "}
      <Link color="inherit" href="https://github.com/raynear">
        raynear
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default Copyright;
