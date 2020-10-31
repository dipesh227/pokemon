import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./Header";
import Pokemon from "./Pokemon";

const Index = () => {
  const [search, setSearch] = useState("");
  const [pokecount, setPokecount] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const onInputSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1050`);
    setPokecount(res.data.results.length);
    setPokemon(res.data.results);
  };
  return (
    <>
      <Header search={search} onInputSearch={onInputSearch} />
      <Pokemon pokemon={pokemon} pokecount={pokecount} />
    </>
  );
};
export default Index;
