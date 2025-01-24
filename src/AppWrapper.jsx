import React from "react";
import { UserProvider } from "./context/UserContext";
import App from "./App";

const AppWrapper = () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
};

export default AppWrapper;
