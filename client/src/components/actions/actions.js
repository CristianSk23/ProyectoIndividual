import { ADD_GAME, GET_DETAIL, GET_DETAILNAME, GENRES } from "./Actions-Types";
import axios from "axios";

export const addFav = (character) => {
  return async (dispatch) => {
    try {
      console.log("Deberia despachar el personaje " + character.name);
      const endpoint = "http://localhost:3001/rickandmorty/fav";
      const { data } = await axios.post(endpoint, character);

      dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
      const characterRemove = (await axios.delete(endpoint)).data;
      dispatch({
        type: REMOVE_FAV,
        payload: characterRemove,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};
