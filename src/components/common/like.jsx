import React from "react";

const Like = (props) => {
    let classes = "fa fa-heart";
    if(props.liked) classes += "-o";
  return (
    <React.Fragment>
      <i className={classes} style={{cursor: "pointer"}} onClick={props.onClick}></i>
    </React.Fragment>
  );
};

export default Like;
