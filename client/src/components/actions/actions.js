import { GET_GAMES, FILTER, SOURCE, ORDER } from "./Actions-Types";
import axios from "axios";
const URLg = `http://localhost:3001/videogames/`;

export const getGames = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(URLg);
      const games = data;

      return dispatch({
        type: GET_GAMES,
        payload: games,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const genreFilter = (genre) => {
  return {
    type: FILTER,
    payload: genre,
  };
};

export const getSource = (source) => {
  return {
    type: SOURCE,
    payload: source,
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};
