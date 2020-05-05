import { SET_DATA_COMMODITIES } from './actions';

const DictionariesReducer= (state, action) => {
  switch(action.type) {
    case SET_DATA_COMMODITIES:
      return {...state, ...action.payload}
    default:
      return state;
  }
}

export default DictionariesReducer;
