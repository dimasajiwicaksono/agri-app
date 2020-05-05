import React, { createContext, useReducer } from 'react';
import DictionariesReducer from './reducers'; 

export const DictionariesContext = createContext();

const DictionariesContextProvider = ({children}) => {

  const initialState = {
    data: [],
    isLoading: false,
    error : false,
}

  const [dictionaries, dispatch] = useReducer(DictionariesReducer, initialState)

  return(
    <DictionariesContext.Provider value={{
      dictionaries,
      dispatch,
    }}>
      {children}
    </DictionariesContext.Provider>
  )
}


export default DictionariesContextProvider;
