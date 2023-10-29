import classes from "./HabitPage.module.css";
import gif from "../../habit.gif";
import arrow from "../../arrow.png";

import CreateHabit from "../habitio/CreateHabit";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import Habits from "../habitio/Habits";

const HabitPage = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.ui.showAddHabit);
  const habits = useSelector((state) => state.ui.habits);
  const hideModalHandler = () => {
    dispatch(uiActions.closeAddHabit());
  };

  let addContent;
  if (habits.length === 0) {
    addContent = (
      <div className={classes.display}>
        <img className={classes.gif} src={gif} alt="bg"></img>
        <h1 className={classes.name}>Create new Habit</h1>
        <span className={classes.description}>
          Create one by clicking on the plus button below.
        </span>
        <img className={classes.arrow} src={arrow} alt="bg"></img>
      </div>
    );
  }

  return (
    <div>
      {show && <CreateHabit onClose={hideModalHandler} />}
      <Header />
      <div className={classes.habits}>
        {habits.map((habit, index) => (
          <Habits key={index} id={habit.name} name={habit.name} />
        ))}
        {addContent}
      </div>
      <Footer />
    </div>
  );
};

export default HabitPage;
