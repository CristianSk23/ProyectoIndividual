import {
  genreFilter,
  getOrigin,
  home,
  order,
  orderCards,
} from "../actions/actions";
import "./style.css";

import { useDispatch } from "react-redux";

const FilterGames = ({ stateBTN }) => {
  const dispatch = useDispatch();

  const handleCheck = (event) => {
    const valor = event.target.value;
    dispatch(genreFilter(valor));
  };
  const dataOrigin = (event) => {
    const valor = event.target.value;

    dispatch(getOrigin(valor));
  };
  const getOrder = (event) => {
    const valor = event.target.value;
    dispatch(order(valor));
  };
  const reset = () => {
    dispatch(home());
  };

  const genresList = [
    "Action",
    "Adventure",
    "Arcade",
    "Board Games",
    "Card",

    "Casual",
    "Educational",
    "Family",
    "Fighting",
    "Indie",

    "Massively Multiplayer",
    "Puzzle",
    "Platformer",
    "Racing",
    "RPG",

    "Shooter",
    "Strategy",
    "Simulation",
    "Sports",
  ];

  return (
    <div className="contenstyle">
      <div className="contenOrigin">
        <h4>Origen</h4>
        <div className="contenBTN">
          <button
            value="BD"
            onClick={dataOrigin}
            disabled={stateBTN}
            id="styleBtn"
          >
            Base de Datos
          </button>
          <button value="API" onClick={dataOrigin} id="styleBtn">
            API
          </button>
        </div>
      </div>

      <div className="contenGenres">
        <div>
          <h4>Generos</h4>
        </div>
        <div className="contenBTNgenres">
          <select onChange={handleCheck}>
            {genresList.map((genre) => (
              <option key={genre} value={genre} id="styleOption">
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="contenFilter">
        <div>
          <h4>Filtrar</h4>
        </div>
        <div className="contenBtnFilter">
          <button value="R" onClick={getOrder}>
            Mayor Rating
          </button>
          <button value="RI" onClick={getOrder}>
            Menor Rating
          </button>
          <button value="A" onClick={getOrder}>
            Alfabeticamente
          </button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default FilterGames;
