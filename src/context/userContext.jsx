import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("");

  return (
    <UserContext.Provider value={{ email, setEmail, rol, setRol }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
