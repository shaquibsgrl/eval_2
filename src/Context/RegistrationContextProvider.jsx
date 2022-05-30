import React, { useReducer } from "react";
import { initState, registerReducer } from "./registerReducer";

// Write code for Registration context
export const RegistrationContext = React.createContext();

export const RegistrationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(registerReducer, initState);
  return (
    <RegistrationContext.Provider value={[state, dispatch]}>
      {children}
    </RegistrationContext.Provider>
  );
};
