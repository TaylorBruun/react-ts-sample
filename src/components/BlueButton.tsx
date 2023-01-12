import React from "react";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../slices/BlueSlice";

export const BlueButton = () => {
  const count = useSelector((state: RootState) => state.blueClicks.value);
  const dispatch = useDispatch();

  return (
    <>
    <button className="blue" onClick={()=>dispatch(increment())} >Increase Blue: {count}</button>
    <button className="blue" onClick={()=>dispatch(decrement())} >Decrease Blue: {count}</button>
    </>
  );
};
