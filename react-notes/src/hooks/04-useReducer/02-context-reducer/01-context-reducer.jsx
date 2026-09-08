//Step 6

import CountProvider from "./count-provider";
import Counter from "./counter";

const ContextReducer = () => {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
};

export default ContextReducer;
