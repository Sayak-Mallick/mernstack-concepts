import { useState } from "react";

const FirstHook = () => {
  const [toggleText, setToggleText] = useState(false);
  const handleToggle = () => {
    setToggleText(!toggleText);
  };
  return (
    <div>
      <h1>Use state hook</h1>
      {toggleText && <p>Hello World</p>}

      <button className="btn" onClick={handleToggle}>
        {toggleText ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default FirstHook;
