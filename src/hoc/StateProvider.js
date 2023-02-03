import {createContext, useReducer} from "react";
import {initialDog, myDogReducer} from "../reducers/dogReducer";
import {initialCat, myCatReducer} from "../reducers/catReducer";

const StateContext = createContext(null);

const StateProvider = ({children}) => {
  const reducers = {
      dogReducer: useReducer(myDogReducer, null, initialDog),
      catReducer: useReducer(myCatReducer, null, initialCat)
  }
  return (
      <StateContext.Provider value={reducers}>
          {children}
      </StateContext.Provider>
  )
}

export {StateContext, StateProvider}