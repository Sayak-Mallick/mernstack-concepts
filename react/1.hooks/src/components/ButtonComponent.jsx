import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const ButtonComponent = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <>
      <h1>Login Button</h1>
      <button
        style={
          theme === "dark"
            ? { backgroundColor: "black", color: "white" }
            : { backgroundColor: "white", color: "black" }
        }
      >
        Login
      </button>
    </>
  );
};

export default ButtonComponent;
