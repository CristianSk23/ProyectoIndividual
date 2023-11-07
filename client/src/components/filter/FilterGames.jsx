import {
  genreFilter,
  getOrigin,
  home,
  order,
  orderCards,
} from "../actions/actions";

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
  const reset =() =>{
    dispatch(home())
  }

  return (
    <div>
      <div>
        <h4>Generos</h4>
        <select onChange={handleCheck}>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Arcade">Arcade</option>
          <option value="Board Games">Board Games</option>
          <option value="Card">Card</option>
          <option value="Casual">Casual</option>
          <option value="Educational">Educational</option>
          <option value="Family">Family</option>
          <option value="Fighting">Fighting</option>
          <option value="Indie">Indie</option>
          <option value="Massively Multiplayer">Massively Multiplayer</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Platformer">Platformer</option>
          <option value="Racing">Racing</option>
          <option value="RPG">RPG</option>
          <option value="Shooter">Shooter</option>
          <option value="Strategy">Strategy</option>
          <option value="Simulation">Simulation</option>
          <option value="Sports">Sports</option>
        </select>
      </div>
      <div>
        <h4>Origen</h4>
        <button value="BD" onClick={dataOrigin} disabled={stateBTN}>
          Base de Datos
        </button>
        <button value="API" onClick={dataOrigin}>
          API
        </button>
      </div>

      <div>
        <h4>Rating</h4>
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

      <div>
      </div>
    </div>
  );
};

export default FilterGames;
