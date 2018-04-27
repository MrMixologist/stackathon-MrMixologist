import axios from 'axios';

const SET_COCKTAILS = 'SET_COCKTAILS';

const setCocktails = cocktails => ({
  type: SET_COCKTAILS,
  cocktails
});

export const setCocktailMatches = cocktails =>
  dispatch => {
    const action = setCocktails(cocktails);
    dispatch(action);
  }


export default function (state = [], action) {
  switch (action.type) {
    case SET_COCKTAILS:
      return action.cocktails
    default:
      return state
  }
}
