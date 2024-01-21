import {
  GET_GAMES,
  FILTER,
  ORIGIN,
  ORDER,
  SEARCH,
  PAGINADO,
  HOME,
  POST,
  GENRES,
} from "../actions/Actions-Types";

const initialState = {
  allGames: [],
  bckAllGames: [],
  gamesEdited: [],
  allGenres: [],
  btnBD: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      const gamesAux = [...action.payload];
      const gamesAuxSlic = [...gamesAux].slice(0, 15);

      return {
        ...state,
        gamesEdited: [...gamesAuxSlic],
        allGames: [...gamesAuxSlic],
        bckAllGames: [...gamesAux],
      };

    case FILTER:
      const filteredElement = [...state.bckAllGames].filter((element) => {
        return element.genres.some(
          (genre) => genre.name.toLowerCase() === action.payload.toLowerCase()
        );
      });

      return {
        ...state,
        gamesEdited: [...filteredElement],
      };

    case SEARCH:
      return {
        ...state,
        gamesEdited: [...action.payload],
      };

    case ORIGIN:
      let gamesFiltered = [];
      let btnBDaux;
      if (action.payload === "BD") {
        gamesFiltered = [...state.bckAllGames].filter((game) => isNaN(game.id));
        if (gamesFiltered) {
          console.log("Tengo datos en la BD", gamesFiltered);
          btnBDaux = false;
        }
      } else if (action.payload === "API") {
        console.log("Estaría filtrando datos para la API");
        gamesFiltered = [...state.allGames].filter((game) =>
          Number.isInteger(game.id)
        );
      }
      if (!gamesFiltered) console.log("no hay datos en la BD");
      console.log("Debería retornar todos los videojuegos", gamesFiltered);
      return {
        ...state,
        gamesEdited: gamesFiltered,
        btnBD: btnBDaux,
      };

    case ORDER:
      let gamesOrder = [];
      if (action.payload === "R") {
        gamesOrder = [...state.gamesEdited].sort((a, b) => {
          return b.rating - a.rating;
        });
      }
      if (action.payload === "RI") {
        gamesOrder = [...state.gamesEdited].sort((a, b) => {
          return a.rating - b.rating;
        });
      }
      if (action.payload === "A") {
        gamesOrder = [...state.gamesEdited].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      return {
        ...state,
        gamesEdited: [...gamesOrder],
      };

    case PAGINADO:
      const allGamesTemp = [...state.bckAllGames].slice(
        action.payload - 15,
        action.payload
      );
      return {
        ...state,
        allGames: [...allGamesTemp],
        gamesEdited: [...allGamesTemp],
      };
    case HOME:
      return {
        ...state,
        gamesEdited: [...state.allGames],
      };

    case POST: {
      return {
        ...initialState,
        btnBD: false,
      };
    }

    case GENRES: {
      return {
        ...state,
        allGenres: action.payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
