import React, { createContext, useContext } from "react";
import { useCounter } from "./reducers";

// initialize context
const AppContext = createContext();

// custom context hook
export const useAppContext = () => {
  return useContext(AppContext);
};

export default function Provider({ children }) {
  // reducers
  const counter = useCounter();

  const contextValue = {
    counter,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
