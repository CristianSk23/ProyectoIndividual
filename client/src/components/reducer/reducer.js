import { ADD_GAME, GET_DETAIL, GET_DETAILNAME, GENRES } from "../actions/Actions-Types";

const initialState = {
  myFavorites: [],
  allFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GAME:
      return {
        ...state,
        myFavorites: action.payload,
        allFavorites: action.payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        myFavorites: action.payload,
        allFavorites: action.payload,
      };

    case GET_DETAILNAME:
      const filteredCharacters = [...state.allFavorites].filter(
        (character) => character.gender === action.payload,
        console.log("Esta es la action" + action.payload)
      );
      return {
        ...state,
        myFavorites: filteredCharacters,
      };

    case GENRES:
      const sortedCharacters = [...state.myFavorites].sort((a, b) => {
        if (action.payload === "A") {
          return a.id - b.id;
        } else if (action.payload === "D") {
          return b.id - a.id;
        }
      });

      return {
        ...state,
        myFavorites: sortedCharacters,
      };

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
