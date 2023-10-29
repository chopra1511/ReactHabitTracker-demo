import React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className={classes.nav}>
      <h1 className={classes.title}>Habitio</h1>
      <p className={classes.stats}>
        <NavLink
          to="/week-view"
          style={({ isActive }) => ({
            color: isActive ? "#000" : "#8a8a8a",
            textDecoration: "none",
          })}
        >
          My stats
          <span>
            <BarChartIcon />
          </span>
        </NavLink>
      </p>
    </div>
  );
}
