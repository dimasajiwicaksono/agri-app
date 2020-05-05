import React, { createContext, useReducer } from 'react';
import NavbarReducer from './reducer'; 

export const NavbarContext = createContext();

const NavbarContextProvider = ({children}) => {

  const initialState = {
    data: [],
    error : false,
    isloading: true,
}

  const [navbar, dispatch] = useReducer(NavbarReducer, initialState)

  return(
    <NavbarContext.Provider value={{
      navbar,
      dispatch,
    }}>
      {children}
    </NavbarContext.Provider>
  )
}


export default NavbarContextProvider;
