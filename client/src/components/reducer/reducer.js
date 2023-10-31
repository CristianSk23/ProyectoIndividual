import {
  GET_GAMES,
  FILTER,
  SOURCE,
  ORDER,
  SEARCH,
  NEXT,
  PREV,
} from "../actions/Actions-Types";

const initialState = {
  allGames: [],
  bckAllGames: [],
  pagination: 1,
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

    case SEARCH:
      return {
        ...state,
        allGames: [...action.payload],
      };

    case SOURCE:
      return {
        ...state,
      };

    case ORDER:
      return {
        ...state,
      };
    case NEXT:
      return {
        ...state,
        pagination: state.pagination + 1,
      };
    case PREV:
      return {
        ...state,
        pagination: state.pagination - 1,
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
