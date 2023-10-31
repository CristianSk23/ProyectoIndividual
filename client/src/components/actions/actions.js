import {
  GET_GAMES,
  FILTER,
  SOURCE,
  ORDER,
  SEARCH,
  NEXT,
  PREV,
} from "./Actions-Types";
import axios from "axios";
const URLg = `http://localhost:3001/videogames`;
const URLs = `http://localhost:3001/videogames/name?`;

export const getGames = (page) => {
  console.log("Numero de pagina",page);
  return async (dispatch) => {
    try {
      const { data } = await axios(`${URLg}?page=${page}`);
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
export const getName = (value) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${URLs}name=${value}`);
      const searchGame = data;
      return dispatch({
        type: SEARCH,
        payload: searchGame,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};
export const nextPage = () => {
  return {
    type: NEXT,
  };
};
export const PrevPage = () => {
  return {
    type: PREV,
  };
};
