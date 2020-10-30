import React, { useEffect, useState } from "react";
import Axios from "axios";

const Pokecard = (props) => {
  useEffect(() => {
    getpoke();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  const { singleapiurl } = props;
 
  const getpoke = async () => {
    const res = await Axios.get(singleapiurl);
    // console.log(res.data.moves.[].move);
    setImage(res.data.sprites.other.dream_world.front_default);
    setName(res.data.name);
    setMoves(res.data.moves.length);

  };
  return (
    <>
      <div className="col-md-4 mb-5">
        <div className="card">
          <img src={image} className="img-thumbnail imgcss" alt={name} />
          <h4 className="card-title mt-4 text-center text-capitalize namepoke ">
            Name : {name}
          </h4>
          <hr />
          <h4 className="card-title mt-1 text-center text-capitalize namepoke">
            Moves : {moves}
          </h4>
          <hr />
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        
         
        </div>
      </div>
    </>
  );
};
export default Pokecard;
