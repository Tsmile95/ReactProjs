// import React from "react";

const Click = () => {
  function handleClick() {
    console.log("u clicked me");
  }

  function handleClickAgain() {
    console.log();
  }
  let clientname = 'Ejiro'
  function handleClickName(){
    clientname =
    console.log();
  }
  return (
    <div className="container">
      <h2 className="text-danger">Click Component</h2>
      <button className="btn btn-primary text-white" onClick={handleClick}>
        click moi
      </button>

      <button className="btn btn-primary text-white" onClick={handleClickAgain}>
        you don click mde again
      </button>
      <h2> {clientname} </h2>
      <button className="btn btn-primary text-white" onClick={handleClickName}>
        click moi
      </button>

    </div>
  );
};

export default Click;
