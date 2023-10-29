import classes from "./StartPage.module.css";
import img from "../../plan.png";
import { NavLink } from "react-router-dom";

const StartPage = () => {
  return (
    <div>
      <img className={classes.startImg} src={img} alt="bg"></img>
      <div className={classes.title}>
        <h1 className={classes.name}>Practice & Track</h1>
        <span className={classes.description}>
          Track your progress and keep going!
        </span>
        <NavLink to="/habitio">
          <button className={classes.btn}>Get Started </button>
        </NavLink>
      </div>
    </div>
  );
};

export default StartPage;
