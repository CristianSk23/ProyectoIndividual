import { GET_GAMES, FILTER, SOURCE, ORDER } from "../actions/Actions-Types";

const initialState = {
  allGames: [],
  bckAllGames: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        allGames: [...action.payload],
        bckAllGames: [...action.payload],
      };

    case FILTER:
      const filteredElement = state.bckAllGames.filter((element) => {
        return element.genres.some(
          (genre) => genre.name.toLowerCase() === action.payload.toLowerCase()
        );
      });
      return {
        ...state,
        allGames: [...filteredElement],
      };

    case SOURCE:
      return {
        ...state,
      };

    case ORDER:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
