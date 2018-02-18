import React from "react";


export const Images = (props) => {
  return (
    <div className="list-overflow-container">
    <img onClick={() =>{props.clickMe(props.country,props.myth)}} src={props.url} ></img>
    </div>
  );
};