import { useState } from "react";
import { useDispatch } from "react-redux";

function HandleCounter() {
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState("");

  const handleOnChange = (event) => {
    setInputVal(event.target.value);
  };

  const handleIncrementButton = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrementButton = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAddButton = () => {
    dispatch({
      type: "ADD",
      payload: {
        inputVal: Number(inputVal),
      },
    });
    setInputVal("");
  };

  const handleSubButton = () => {
    dispatch({
      type: "SUB",
      payload: {
        inputVal: Number(inputVal),
      },
    });

    setInputVal("");
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  return (
    <>
      <div className="flex gap-4">
        <button
          type="button"
          className="text-white bg-green-600 font-bold px-5 py-2 rounded cursor-pointer active:bg-green-950"
          onClick={handleIncrementButton}
        >
          +1
        </button>
        <button
          type="button"
          className="text-white bg-red-600 font-bold px-5 py-2 rounded cursor-pointer active:bg-green-950"
          onClick={handleDecrementButton}
        >
          -1
        </button>

        <button
          type="button"
          className="text-white bg-orange-600 font-bold px-5 py-2 rounded cursor-pointer active:bg-green-950"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="flex gap-3 mt-4">
        <input
          className="border py-2 px-3 outline-0"
          value={inputVal}
          onChange={handleOnChange}
          type="number"
          placeholder="Enter Value "
        />
        <button
          className="text-white bg-green-600 px-5 rounded active:bg-green-900 cursor-pointer"
          onClick={handleAddButton}
        >
          Add
        </button>
        <button
          className="text-white bg-red-600 px-5 rounded active:bg-red-900 cursor-pointer"
          onClick={handleSubButton}
        >
          Sub
        </button>
      </div>
    </>
  );
}

export default HandleCounter;
