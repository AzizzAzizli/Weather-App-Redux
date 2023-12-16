import React, { useState } from "react";
import { hour } from "../../util/getHour";

export const Hours = () => {
  const [currentHour, setCurrentHour] = useState("");

  setInterval(() => {
    let cHour = hour();
    setCurrentHour(cHour);
  }, 1000);
  return <>{currentHour}</>;
};
