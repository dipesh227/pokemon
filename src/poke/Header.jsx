import React from "react";
const Header = (props) => {
    const {search,onInputSearch} = props;
    // https://pokeapi.co/api/v2/pokemon?limit=1050
  return (
    <>
      <div className="jumbotron ">
        <h1 className="display-1 mx-auto mb-5">Pokemon</h1>
        <div className="input-group w60 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search Your Favourite Pokemon"
            value={search}
            onChange={onInputSearch}
          />
          <div className="input-group-append">
            <button className="btn btn-dark ">Search Pokemon</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
