import React from "react";
const Moves = (props) => {
  const { move } = props;

  console.log(move);
  return (
    <>
      {move.name.map((mymove) => {
        return <li className="list-group-item">{mymove}</li>;
      })}
    </>
  );
};
export default Moves;
