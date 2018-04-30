import axios from 'axios';
// import history from '../history';

/**
 * ACTION TYPES
 */
const GET_INGREDIENTS = 'GET_INGREDIENTS';

/**
 * ACTION CREATORS
 */
const getIngredients = ingredients => ({type: GET_INGREDIENTS, ingredients});

/**
 * THUNK CREATORS
 */

export const fetchIngredients = () =>
  dispatch =>
    axios.get(`http://192.168.1.8:8080/api/ingredients`)
      .then(res => res.data)
      .then(ingredients => {
          const action = getIngredients(ingredients);
          dispatch(action);
      })
      .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_INGREDIENTS:
      return action.ingredients
    default:
      return state
  }
}
