import React from "react";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../slices/BlueSlice";

export const BlueIndicator = () => {
  const count = useSelector((state: RootState) => state.blueClicks.value);
  const dispatch = useDispatch()
  

  return (
    <div onClick={()=> dispatch(reset())} className="blueIn">
      {count}
    </div>
  );
};
