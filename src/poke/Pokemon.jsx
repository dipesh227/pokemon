import React from "react";
import Pokecard from "./Pokecard";
// import Pokecard from "./Pokecard";
const Pokemon = (props) => {
  const { pokemon } = props;
  return (
    <div className="container row mx-auto bg2">
      {pokemon.map((poke, index) => {
        return <Pokecard singleapiurl={poke.url} key={poke.name}/>;
      })}
    </div>
  );
};
export default Pokemon;
