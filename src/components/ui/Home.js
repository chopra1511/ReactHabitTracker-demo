import classes from "./Home.module.css";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";
import bg from "../../bg.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <img className={classes.bgImg} src={bg} alt="bg"></img>
      <div className={classes.title}>
        <h1 className={classes.name}>Habitio</h1>
        <span className={classes.description}>
          Become the best version of yourself
        </span>
        <NavLink to="/start-page">
          <IconButton>
            <EastIcon fontSize="large" />
          </IconButton>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
