import React from "react";

const Cards = (props) => {
  function handleClick(linc) {
    window.open(linc);
  }
  const linc = props.url;

  return (
    <div className="card text-center ">
      <div className="card-body">
        <div className="card-title">
          <props.logo size="4rem " />
          <br />
          <div className="name">{props.name}</div>
        </div>
        <div className="card-text inner">{props.text}</div>
      </div>

      <div className="btn btn-primary  " onClick={() => handleClick(linc)}>
        Follow Link
      </div>
    </div>
  );
};

export default Cards;
