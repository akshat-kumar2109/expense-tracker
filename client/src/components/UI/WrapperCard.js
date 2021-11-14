import React from "react";
import "./WrapperCard.css";

function WrapperCard(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default WrapperCard;
