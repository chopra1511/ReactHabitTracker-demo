import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { uiActions } from "../../store/uiSlice";

export default function WeekDisplay({ id, habitId, day, hStatus }) {
    const dispatch = useDispatch();
    // const Status = useSelector(
    //     (state) => state.ui[habitId]?.[day] || "None"
    //     );
        const [habitStatus, setHabitStatus] = useState(hStatus);
    // console.log(habitStatus)
    


    const progressHandler = () => {
        // let newStatus;
        setHabitStatus((prevStatus) => {
            switch (prevStatus) {
                case "Done":
                return "Not Done";

                case "Not Done":
                return "None";

                default:
                    return "Done";
            }
        })
        console.log(habitStatus);
        dispatch(uiActions.setID({ id }));
      dispatch(
        uiActions.setHabitStatus({ id, habitId, day, Status: habitStatus })
      );
      dispatch(uiActions.addCounter({ id, status: habitStatus }));
    };
    

    let icon;
    
      switch (habitStatus) {
        case "Done":
          icon = <CheckCircleIcon color="success" />;

          break;
        case "Not Done":
          icon = <CancelIcon sx={{ color: "red" }} />;

          break;
        default:
          icon = <CheckCircleOutlineIcon />;
      }
    


  return <IconButton onClick={progressHandler}>{icon}</IconButton>;
}

