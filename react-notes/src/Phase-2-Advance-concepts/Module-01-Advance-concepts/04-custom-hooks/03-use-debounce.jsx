import React, { useEffect, useState } from "react";

function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);

    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}

const UseDebounceComp = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Search..."
      />

      <div>
        <p>Text: {text}</p>
        <p>DebouncedText: {debouncedText}</p>
        <p>{text !== debouncedText && <span>Waiting...</span>}</p>
      </div>
    </div>
  );
};

export default UseDebounceComp;
