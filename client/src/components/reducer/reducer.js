import {
  GET_GAMES,
  FILTER,
  ORIGIN,
  ORDER,
  SEARCH,
  PAGINADO,
  HOME,
} from "../actions/Actions-Types";

const initialState = {
  allGames: [],
  bckAllGames: [],
  gamesEdited: [],
  btnBD: true,
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
      let gamesFiltered;
      let btnBDaux = true;
      if (action.payload === "DB") {
        gamesFiltered = [...state.allGames].filter(
          (game) => !Number.isInteger(game.id)
        );
        if (gamesFiltered) {
          btnBDaux = false;
        }
      } else if (action.payload === "API") {
        gamesFiltered = [...state.allGames].filter((game) =>
          Number.isInteger(game.id)
        );
      }
      return {
        ...state,
        gamesEdited: gamesFiltered,
        btnBD: btnBDaux,
      };

    case ORDER:
      let gamesOrder = [];
      if (action.payload === "R") {
        gamesOrder = [...state.allGames].sort((a, b) => {
          return b.rating - a.rating;
        });
      }
      if (action.payload === "RI") {
        gamesOrder = [...state.allGames].sort((a, b) => {
          return a.rating - b.rating;
        });
      }
      if (action.payload === "A") {
        gamesOrder = [...state.allGames].sort((a, b) => {
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
        gamesEdited: [...state.bckAllGames],
      };

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
