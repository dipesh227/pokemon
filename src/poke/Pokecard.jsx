import React, { useEffect, useState } from "react";
import Axios from "axios";
import Pagination from "./Pagination";

const Pokecard = (props) => {
  useEffect(() => {
    getpoke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  const [id, setId] = useState(0);
  const [moveName, setMoveName] = useState([]);
  const { singleapiurl } = props;

  const getpoke = async () => {
    const res = await Axios.get(singleapiurl);
    // console.log(res);
    setImage(res.data.sprites.other.dream_world.front_default);
    setName(res.data.name);
    setMoves(res.data.moves.length);
    setId(res.data.id);
    setMoveName(res.data.moves);
  };
  const [showPerPageove, setShowPerPageove] = useState(4);
  const [pagination, setPegination] = useState({
    start: 0,
    end: showPerPageove,
  });
  const onPaginationChange = (start, end) => {
    setPegination({
      start: start,
      end: end,
    });
    setMoveDistan({
      start: start + 1,
      end: end,
    });
    setShowPerPageove(showPerPageove);
  };
  const [moveDistan, setMoveDistan] = useState({
    start: pagination.start + 1,
    end: pagination.end,
  });
  return (
    <>
      <div className="col-md-4 mb-5 ">
        <div className="card card-shadow">
          <img src={image} className="img-thumbnail imgcss" alt={name} />
          <ul className="list-group list-group-flush">
            <li className="list-group-item lifont">
              <h4 className=" text-center mt-1 text-capitalize namepoke ">
                Id : {id}
              </h4>
            </li>
            <li className="list-group-item lifont">
              <h4 className=" text-center mt-1 text-capitalize namepoke ">
                Name : {name}
              </h4>
            </li>
            <li className="list-group-item lifont">
              <h4 className="text-center mt-1 text-capitalize namepoke">
                Moves : {moves}
              </h4>
            </li>
            <li className="list-group-item lifont">
              <h4 className="text-center mt-1 text-capitalize namepoke">
                Moves : {moveDistan.start} To {moveDistan.end}
              </h4>
            </li>
            <Pagination
              showPerPageove={showPerPageove}
              onPaginationChange={onPaginationChange}
              movesCount={moves}
            />
            {moveName
              .slice(pagination.start, pagination.end)
              .map((item, index) => {
                return (
                  <li className="list-group-item lifont" key={index}>
                    {pagination.start + ++index} : {item.move.name}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Pokecard;
