import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCounter } from "./../_actions";

const Counter = () => {
  const [alert, setAlert] = useState("");

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          dispatch(setCounter(counter + 1));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(setCounter(counter - 1));
        }}
      >
        -
      </button>

      <p>Live update stage in input</p>
      <input
        type="text"
        value={counter}
        onChange={(e) => {
          let value = e.target.value;
          if (/^\d+$/.test(value)) {
            dispatch(setCounter(parseInt(value)));
            setAlert("");
          } else {
            setAlert("Only numbers allowed");
          }
        }}
      />
      <p>{alert}</p>
    </div>
  );
};

export default Counter;
