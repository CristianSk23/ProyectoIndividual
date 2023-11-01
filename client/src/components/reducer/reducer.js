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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        gamesEdited: [...action.payload].slice(0, 15),
        allGames: [...state.gamesEdited],
        bckAllGames: [...action.payload],
      };

    case FILTER:
      const filteredElement = state.allGames.filter((element) => {
        return element.genres.some(
          (genre) => genre.name.toLowerCase() === action.payload.toLowerCase()
        );
      });
      if (filteredElement) {
      }
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

      if (action.payload === "DB") {
        gamesFiltered = state.bckAllGames.filter(
          (game) => !Number.isInteger(game.id)
        );
      } else if (action.payload === "API") {
        gamesFiltered = state.bckAllGames.filter((game) =>
          Number.isInteger(game.id)
        );
      }

      return {
        ...state,
        gamesEdited: gamesFiltered,
      };

    case ORDER:
      let gamesOrder = [];
      if (action.payload === "A") {
        gamesOrder = [...state.allGames].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else if (action.payload === "R") {
        gamesOrder = [...state.allGames].sort((a, b) => {
          return b.rating - a.rating;
        });
        console.log("ordenamiento por rating ", gamesOrder);
      }
      return {
        ...state,
        gamesEdited: [...gamesOrder],
      };

    case PAGINADO:
      const allGamesTemp = state.bckAllGames.slice(
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

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
