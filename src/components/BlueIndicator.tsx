import React from "react";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../slices/BlueSlice";

export const BlueIndicator = () => {
  const count = useSelector((state: RootState) => state.blueClicks.value);
  

  return (
    <div className="blueIn">
      {count}
    </div>
  );
};
