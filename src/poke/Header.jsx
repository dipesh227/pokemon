import React from "react";
const Header = (props) => {
    const {search,onInputSearch} = props;
    // https://pokeapi.co/api/v2/pokemon?limit=1050
  return (
    <>
      <div className="jumbotron ">
        <h1 className="display-1 mx-auto mb-5 pokeheading">Pokemon</h1>
        <div className="input-group w60 mx-auto">
          <input
            type="text"
            className="form-control w30 mt-2"
            placeholder="Search Favourite Pokemon"
            value={search}
            onChange={onInputSearch}
          />
          <div className="input-group-append w20 mt-2">
            <button className="btn btn-dark f20">Search Pokemon</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
