import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const USEContext = () => {
  const { theme, setTheme } = useContext(GlobalContext);
  console.log("🚀 ~ USEContext ~ theme:", theme);
  return (
    <div>
      <h1>Use Context</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
};

export default USEContext;
