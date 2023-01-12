import React from "react";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../slices/RedSlice";

export const RedIndicator = () => {
  const count = useSelector((state: RootState) => state.redClicks.value);

  return <div className="redIn">{count}</div>;
};
