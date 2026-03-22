import { useRef } from "react";

const USERef = () => {
  const inputRef = useRef(null);

  const handleInput = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <h3>useRef DOM Example</h3>
      {/* 2. Attach the ref to the element */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Click button to focus me"
      />
      <button type="button" onClick={handleInput}>
        Focus Input
      </button>
    </div>
  );
};

export default USERef;
