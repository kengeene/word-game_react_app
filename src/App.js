import "./assets/css/App.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useEffect, useState } from "react";
import { flattenArray, randomizeArray, unflattenArray } from "./utils/array";

function App() {
  const [options] = useState({
    groupOne: ["one", "two", "three"],
    groupTwo: ["four", "five", "six"],
    groupThree: ["seven", "eight", "nine"],
    groupFour: ["ten", "eleven", "tweleve"],
  });

  const clickedButton = (e) => {
    console.log("e", e.target.id);
  };

  const [allOptions, setAllOptions] = useState([]);

  useEffect(() => {
    const flattenedArray = flattenArray(options);
    setAllOptions(flattenedArray);
  }, [options]);

  const [randomizedOptions, setRandomizedOptions] = useState([]);

  useEffect(() => {
    const allRandomOptions = randomizeArray(allOptions);
    setRandomizedOptions(allRandomOptions);
  }, [allOptions]);

  const [randomizedSubArrays, setRandomizedSubArrays] = useState([]);

  useEffect(() => {
    const subArray = unflattenArray(randomizedOptions);
    setRandomizedSubArrays(subArray);
  }, [randomizedOptions]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      {randomizedSubArrays.map((array, index) => (
        <ButtonGroup
          size="large"
          aria-label="large button group"
          key={"group" + index}
        >
          {array.map((word, index) => (
            <Button id={index} key={index} onClick={clickedButton}>
              {word}
            </Button>
          ))}
        </ButtonGroup>
      ))}
    </Box>
  );
}

export default App;
