import { useState } from "react";
import { Stars } from "../Stars";
import { CycleButton } from "../CycleButton";
import "./App.css";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Stars count={count} />
      <CycleButton setCount={setCount} />
    </>
  );
};
