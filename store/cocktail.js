import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_COCKTAILS = 'GET_COCKTAILS';
const GET_COCKTAIL = 'GET_COCKTAIL';

/**
 * ACTION CREATORS
 */
const getCocktails = cocktails => ({
  type: GET_COCKTAILS,
  cocktails
});

const getCocktail = cocktail => ({
  type: GET_COCKTAIL,
  cocktail
})

/**
 * THUNK CREATORS
 */

export const fetchCocktails = () =>
  dispatch =>
    axios.get(`localhost:8080/api/cocktails`)
      .then(res => res.data)
      .then(cocktails => {
          const action = getCocktails(cocktails);
          dispatch(action);
      })
      .catch(err => console.log(err));

export const fetchCocktailById = id =>
  dispatch =>
    axios.get(`localhost:8080/api/cocktails/${id}`)
      .then(res => res.data)
      .then(cocktail => {
          const action = getCocktail(cocktail);
          dispatch(action);
      })
      .catch(err => console.log(err));
/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_COCKTAILS:
      return action.cocktails
    case GET_COCKTAIL:
      return state.cocktails.find(cocktail => cocktail.id === action.id)
    default:
      return state
  }
}
