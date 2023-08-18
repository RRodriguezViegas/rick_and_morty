import { ADD_FAV, REMOVE_FAV } from './types';

const initialState = { myFavorites: ['rama'] };

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(e => e.id !== payload),
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
