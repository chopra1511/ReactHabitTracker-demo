import React from "react";
import classes from "./Habits.module.css";
import Card from "../ui/Card";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";

export default function Habits(props) {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(uiActions.removeHabit(props.id));
  };

  return (
    <div>
      <div>
        <Card
          value={props.id}
          className={classes.card}
          style={{ backgroundColor: "#c6def1" }}
        >
          <div className={classes.content}>
            <div className={classes.items}>
              <TagFacesIcon sx={{ fontSize: 40, color: "white" }} />
              <h1 className={classes.title}>{props.name}</h1>
            </div>
            <div className={classes.btn}>
              <IconButton onClick={deleteHandler}>
                <DeleteOutlineIcon
                  sx={{ fontSize: 40, color: "white", cursor: "pointer" }}
                />
              </IconButton>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
