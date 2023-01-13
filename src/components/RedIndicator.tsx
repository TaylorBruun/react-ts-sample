import React from "react";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../slices/RedSlice";

export const RedIndicator = () => {
  const count = useSelector((state: RootState) => state.redClicks.value);
  const dispatch = useDispatch()

  return <div onClick={()=>dispatch(reset())} className="redIn">{count}</div>;
};
