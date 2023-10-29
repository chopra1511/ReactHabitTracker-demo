import React from 'react'
import classes from './NoContent.module.css'
import gif from '../../nohabits.gif'
import arrow from "../../arrow.png";

export default function NoContent() {
  return (
    <div className={classes.display}>
      <img className={classes.gif} src={gif} alt="bg"></img>
      <h1 className={classes.name}>No Habits...</h1>
      <span className={classes.description}>
        Create one by clicking on the plus button below.
      </span>
      <img className={classes.arrow} src={arrow} alt="bg"></img>
    </div>
  );
}
