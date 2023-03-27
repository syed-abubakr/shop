import React from "react";
import Header from "./Header";

export const Details = ({detail, setdetail}) => {
  return (
    <div>
      <Header />
      {console.log(detail)}
      <img src={detail["images"]} className="dImg"/>
      <h1>{detail["title"]}</h1>
      <h3>Rs. {detail["price"]}</h3>
      <p>{detail["description"]}</p>
    </div>
  );
};
