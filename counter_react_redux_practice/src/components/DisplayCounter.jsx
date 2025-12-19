import React from "react";
import { useSelector } from "react-redux";

function DisplayCounter() {
  const counter = useSelector((store) => store.counter);

  return (
    <div className="text-2xl text-center text-green-700 font-semibold mb-3">
      Counter is :{counter}
    </div>
  );
}

export default DisplayCounter;
