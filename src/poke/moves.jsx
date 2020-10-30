import React from "react";
// import Axios from "axios";
const Moves = (props) => {
  const { move } = props;
  //   const getpoke = async () => {
  //     const res = await Axios.get();
  //     // console.log(res.data.moves);

  //   };

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
