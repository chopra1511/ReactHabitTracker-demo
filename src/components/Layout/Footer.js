import React from "react";
import classes from "./Footer.module.css";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import { NavLink } from "react-router-dom";

export default function Footer(props) {
  const dispatch = useDispatch();
  // const show = useSelector((state) => state.showAddHabit);

  const createHandler = () => {
    dispatch(uiActions.openAddHabit());
  };

  return (
    <div className={classes.btns}>
      {/* <div className={classes.btn}>
        <NavLink
          to="/today"
          style={({ isActive }) => ({ color: isActive ? "#9dcbf7" : "#000" })}
        >
          <HomeIcon className={classes.actions} sx={{ fontSize: 40 }} />
        </NavLink>
        <p>Today</p>
      </div> */}
      <div className={classes.btn}>
        <NavLink
          to="/habitio"
          style={({ isActive }) => ({ color: isActive ? "#9dcbf7" : "#000" })}
        >
          <AddCircleRoundedIcon
            className={classes.actions}
            sx={{ fontSize: 40 }}
            onClick={createHandler}
          />
        </NavLink>
        <p>Create new</p>
      </div>
      <div className={classes.btn}>
        <NavLink
          to="/week-view"
          style={({ isActive }) => ({ color: isActive ? "#9dcbf7" : "#000" })}
        >
          <CheckCircleRoundedIcon
            className={classes.actions}
            sx={{ fontSize: 40 }}
          />
        </NavLink>
        <p>All Habits</p>
      </div>
    </div>
  );
}
