import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

function GlobalState({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
