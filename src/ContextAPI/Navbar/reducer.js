import { SET_DATA_NAVBAR } from './action';

const NavbarReducer= (state, action) => {
  switch(action.type) {
    case SET_DATA_NAVBAR:
      return {...state, ...action.payload}
    default:
      return state;
  }
}

export default NavbarReducer;
