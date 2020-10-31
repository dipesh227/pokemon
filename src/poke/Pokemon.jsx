import React, { useState } from "react";
import Pagination from "./Pagination";
import Pokecard from "./Pokecard";
// import Pokecard from "./Pokecard";
const Pokemon = (props) => {
  const { pokemon, setPokecount } = props;
  // console.log(pokemon);
  const [showPerPageove, setShowPerPageove] = useState(30);
  const [pagination, setPegination] = useState({
    start: 0,
    end: showPerPageove,
  });
  const onPaginationChange = (start, end) => {
    setPegination({
      start: start,
      end: end,
    });
    setShowPerPageove(showPerPageove);
  };
  return (
    <>
      <Pagination
        showPerPageove={showPerPageove}
        onPaginationChange={onPaginationChange}
        movesCount={setPokecount}
      />
      <div className="container row mx-auto bg2">
        {pokemon.slice(pagination.start, pagination.end).map((poke, index) => {
          return <Pokecard singleapiurl={poke.url} key={poke.name} />;
        })}
      </div>
      <Pagination
        showPerPageove={showPerPageove}
        onPaginationChange={onPaginationChange}
        movesCount={setPokecount}
      />
    </>
  );
};
export default Pokemon;
