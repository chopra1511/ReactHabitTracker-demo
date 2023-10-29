import React from "react";
import classes from "./WeekView.module.css";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Card from "../ui/Card";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import NoContent from "./NoContent";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import CancelIcon from "@mui/icons-material/Cancel";
import WeekDisplay from "./WeekDisplay";

export default function WeekView(props) {
    const dispatch = useDispatch();
    const habits = useSelector((state) => state.ui.habits);
    const week = useSelector((state) => state.ui.week);
    
  const deleteHandler = (e) => {
    dispatch(uiActions.removeHabit(e.currentTarget.value));
    };
    

  let content;
  if (habits.length === 0) {
    content = <NoContent />;
  }

  return (
    <div>
      <Header />
      <div className={classes.habits}>
        {content}
        <div>
          {habits.map((data) => (
            <Card
              key={data.id}
              className={classes.card}
              style={{ backgroundColor: "#c6def1" }}
            >
              <div className={classes.content}>
                <div className={classes.items}>
                  <TagFacesIcon sx={{ fontSize: 40, color: "white" }} />
                  <h1 className={classes.title}>{data.name}</h1>
                </div>
                <div className={classes.btn}>
                  <span className={classes.count}>{data.counter}/7</span>
                  <IconButton value={data.id} onClick={deleteHandler}>
                    <DeleteOutlineIcon
                      sx={{ fontSize: 40, color: "white", cursor: "pointer" }}
                    />
                  </IconButton>
                </div>
              </div>

              <div className={classes.weekView}>
                {week.map((day, index) => (
                  <div key={index}>
                    <h4 className={classes.day}>{day.day}</h4>
                        <WeekDisplay id={data.id} habitId={day.id} day={day.day} hStatus={day.status} />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
          <Footer />
    </div>
  );
}
