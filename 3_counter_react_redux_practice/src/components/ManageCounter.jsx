import React from "react";
import { useDispatch } from "react-redux";

function ManageCounter() {
  const dispatch = useDispatch();

  const handleIncrementButton = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrementButton = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <>
      <div className="flex items-center justify-center gap-5">
        <button
          onClick={handleIncrementButton}
          className="bg-green-700 text-white font-bold px-4 py-1 hover:bg-green-600 rounded cursor-pointer active:bg-green-950"
        >
          +1
        </button>
        <button
          onClick={handleDecrementButton}
          className="bg-red-700 text-white font-bold px-4 py-1 hover:bg-red-600 rounded cursor-pointer active:bg-red-950"
        >
          -1
        </button>
      </div>
    </>
  );
}

export default ManageCounter;
