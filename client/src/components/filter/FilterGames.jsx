import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { genreFilter, getSource, orderCards } from "../actions/actions";

const FilterGames = () => {
  const dispatch = useDispatch();

  const handleCheck = (event) => {
    dispatch(genreFilter(event.target.value));

  };
  return (
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
  );
};

export default FilterGames;
