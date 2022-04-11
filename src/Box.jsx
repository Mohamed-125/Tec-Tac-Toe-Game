import React, { useState, useEffect } from "react";

const Box = ({
  id,
  counter,
  setCounter,
  setPlacesOfSigns,
  placesOfSigns,
  firstRender,
  setFirstRender,
  setAppSign,
}) => {
  const [clickeBefore, setClickedBefore] = useState(false);
  const [sign, setSign] = useState("");
  useEffect(() => {
    if (firstRender) {
      setPlacesOfSigns({ ...placesOfSigns, [id]: sign });
      setAppSign(sign);
    } else {
      setFirstRender(true);
    }
  }, [sign]);

  const showSign = (e) => {
    if (!clickeBefore) {
      if (counter >= 1) {
        setCounter(0);
      } else {
        setCounter((pre) => pre + 1);
      }
      if (counter === 0) {
        setSign("x");
      } else {
        setSign("o");
      }
      e.target.firstChild.style.display = "flex";
      setClickedBefore(true);
    }
  };
  return (
    <div id={sign} onClick={showSign}>
      <p>{sign}</p>
    </div>
  );
};

export default Box;
