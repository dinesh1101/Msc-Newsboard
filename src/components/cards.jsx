import React from "react";

const Cards = (props) => {
  function handleClick(url) {
    window.open(url);
  }
  const url = props.url;

  return (
    <div className="card text-center ">
      <div className="card-body " style={{ overflow: "auto" }}>
        <div className="card-title ">
          <props.logo size="4rem " />
          <br />
          <div className="name">{props.name}</div>
        </div>

        <div className="card-text inner">{props.text}</div>
      </div>

      <div className="btn btn-primary  " onClick={() => handleClick(url)}>
        Follow Link
      </div>
    </div>
  );
};

export default Cards;
