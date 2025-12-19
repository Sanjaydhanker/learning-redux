import React from "react";
import { useSelector } from "react-redux";

function DisplayCounter() {
  const { counterVal } = useSelector((state) => state.counter);
  return (
    <h1 className="text-2xl text-black font-bold mb-3">
      Count:<span className="text-red-500">{counterVal} </span>
    </h1>
  );
}

export default DisplayCounter;
