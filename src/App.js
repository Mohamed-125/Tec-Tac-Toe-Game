import React, { useState } from "react";
import Box from "./Box";
import "./App.css";
import { Button } from "@material-ui/core";

function App() {
  let [placesOfSigns, setPlacesOfSigns] = useState({});
  const [counter, setCounter] = useState(0);
  const [firstRender, setFirstRender] = useState(false);
  const [check, setCheck] = useState("");
  const [appSign, setAppSign] = useState("");
  const [endGame, setEndGame] = useState({});
  const waysToWin = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 9],
  ];

  React.useEffect(() => {
    if (firstRender) {
      if (check[0]) {
        setEndGame({ reason: "win", value: true });
      } else if (
        check[0] === false &&
        Object.keys(placesOfSigns).length === 9
      ) {
        setEndGame({ reason: "draw", value: true });
      }
    } else {
      setFirstRender(true);
    }
  }, [check]);

  React.useEffect(() => {
    if (firstRender) {
      setCheck([
        waysToWin.some((way) => {
          return way.every((e) => {
            return placesOfSigns[e] === appSign;
          });
        }),
      ]);
    } else {
      setFirstRender(true);
    }
  }, [placesOfSigns]);
  return (
    <>
      {endGame.value && (
        <div className="TecTacToe__overLay">
          {endGame.reason === "win" ? (
            <p> THE WINNER IS : {appSign.toUpperCase()} </p>
          ) : (
            <p> DRAW</p>
          )}
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            {" "}
            Reastart the game{" "}
          </button>
        </div>
      )}
      <div style={{ paddingInline: "2rem" }} className="parent__grid">
        <Box
          placesOfSigns={placesOfSigns}
          setPlacesOfSigns={setPlacesOfSigns}
          counter={counter}
          setCounter={setCounter}
          firstRender={firstRender}
          setFirstRender={setFirstRender}
          id={1}
          setAppSign={setAppSign}
        />
        <Box
          placesOfSigns={placesOfSigns}
          setPlacesOfSigns={setPlacesOfSigns}
          counter={counter}
          setCounter={setCounter}
          firstRender={firstRender}
          setFirstRender={setFirstRender}
          id={2}
          setAppSign={setAppSign}
        />
        <Box
          placesOfSigns={placesOfSigns}
          setPlacesOfSigns={setPlacesOfSigns}
          counter={counter}
          setCounter={setCounter}
          firstRender={firstRender}
          setFirstRender={setFirstRender}
          id={3}
          setAppSign={setAppSign}
        />
        <Box
          placesOfSigns={placesOfSigns}
          setPlacesOfSigns={setPlacesOfSigns}
          counter={counter}
          setCounter={setCounter}
          firstRender={firstRender}
          setFirstRender={setFirstRender}
          id={4}
          setAppSign={setAppSign}
        />
        <Box
          placesOfSigns={placesOfSigns}
          setPlacesOfSigns={setPlacesOfSigns}
          counter={counter}
          setCounter={setCounter}
          firstRender={firstRender}
          setFirstRender={setFirstRender}
          id={5}
          setAppSign={setAppSign}
        />
        <Box
          placesOfSigns={placesOfSigns}
          setPlacesOfSigns={setPlacesOfSigns}
          counter={counter}
          setCounter={setCounter}
          firstRender={firstRender}
          setFirstRender={setFirstRender}
          id={6}
          setAppSign={setAppSign}
        />
        <Box
          placesOfSigns={placesOfSigns}
          setPlacesOfSigns={setPlacesOfSigns}
          counter={counter}
          setCounter={setCounter}
          firstRender={firstRender}
          setFirstRender={setFirstRender}
          id={7}
          setAppSign={setAppSign}
        />
        <Box
          placesOfSigns={placesOfSigns}
          setPlacesOfSigns={setPlacesOfSigns}
          counter={counter}
          setCounter={setCounter}
          firstRender={firstRender}
          setFirstRender={setFirstRender}
          id={8}
          setAppSign={setAppSign}
        />
        <Box
          placesOfSigns={placesOfSigns}
          setPlacesOfSigns={setPlacesOfSigns}
          counter={counter}
          setCounter={setCounter}
          firstRender={firstRender}
          setFirstRender={setFirstRender}
          id={9}
          setAppSign={setAppSign}
        />
      </div>
    </>
  );
}

export default App;
