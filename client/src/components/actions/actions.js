import {
  GET_GAMES,
  FILTER,
  ORIGIN,
  ORDER,
  SEARCH,
  PAGINADO,
  HOME,
  POST,
} from "./Actions-Types";
import axios from "axios";
const URLg = `http://localhost:3001/videogames`; //* Ruta para traer los videojuegos
const URLs = `http://localhost:3001/videogames/name?`; //* Ruta para buscar videjuegos por su nombre
const URLp = `http://localhost:3001/videogames/`; //* Ruta para postear videojuegos
const URLge = `http://localhost:3001/genres`;

export const getGames = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(URLg);
      await axios(URLge);
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

export const getOrigin = (source) => {
  //* Nos filtra si los datos son de la API o de la BD
  return {
    type: ORIGIN,
    payload: source,
  };
};
export const getName = (value) => {
  //*Hace un llamado de busqueda a la ruta donde buscará en la BD y en la API si algun elementos coincide con el criterio de búsqueda.
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

export const order = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};

export const home = () => {
  //* Nos carga todos los videojuegos traidos de el llamado a la ruta
  return {
    type: HOME,
  };
};

export const paginado = (index) => {
  const maxGames = 15;
  let firstIndex = parseInt(index) * maxGames;
  console.log("indice del paginado ", firstIndex);
  if (firstIndex === 100) return;
  return {
    type: PAGINADO,
    payload: firstIndex,
  };
};

export const postGame = (value) => {
  console.log("Esto llega como videojuego ", value);
  axios
    .post(URLp, value, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("Éxito:", response.data); // Maneja la respuesta exitosa del servidor
    })
    .catch((error) => {
      throw Error(error.message);
    });

  return {
    type: POST,
    payload: value,
  };
};
