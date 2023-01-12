import React from "react";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../slices/RedSlice";

export const RedButton = () => {
  const count = useSelector((state: RootState) => state.redClicks.value);
  const dispatch = useDispatch();

  return (
    <>
    <button className="red" onClick={() => dispatch(increment())}>Increase Red: {count}</button>
    <button className="red" onClick={() => dispatch(decrement())}>Increase Red: {count}</button>
    </>
    
  );
};
