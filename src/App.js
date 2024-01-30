import "./assets/css/App.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useEffect, useState } from "react";
import { flattenArray, randomizeArray, unflattenArray } from "./utils/array";

function App() {
  // Logic to render table
  const [options, setOptions] = useState({
    groupOne: ["one", "two", "three"],
    groupTwo: ["four", "five", "six"],
    groupThree: ["seven", "eight", "nine"],
    groupFour: ["ten", "eleven", "tweleve"],
  });

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

  // Logic to compute winner

  const [selectedWords, setSelectedWords] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const word = e.target.id;
    if (!selectedWords.includes(word)) {
      setSelectedWords([...selectedWords, word]);
    } else {
      setSelectedWords([...selectedWords.filter((x) => x !== word)]);
    }
  };

  const [resolvedWords, setResolvedWords] = useState([]);

  useEffect(() => {
    const checkWordCominationMatch = (selectedWords) => {
      let combinationMatchIndex = null;

      for (const index in options) {
        if (options[index].every((word) => selectedWords.includes(word))) {
          combinationMatchIndex = index;
          setResolvedWords((r) => [...r, ...selectedWords]);
          setSelectedWords([]);
          alert(`index ${index} has matching words`);
        }
      }

      if (!combinationMatchIndex) {
        setSelectedWords([]);
        alert("The selected words have nothing in common, Try Again");
      }
      return combinationMatchIndex;
    };

    if (selectedWords.length === 3) {
      checkWordCominationMatch(selectedWords);
    }
  }, [options, selectedWords]);

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
            <Button
              id={word}
              className={selectedWords.includes(word) ? "selected" : ""}
              disabled={resolvedWords.includes(word)}
              key={index}
              onClick={handleClick}
            >
              {word}
            </Button>
          ))}
        </ButtonGroup>
      ))}
    </Box>
  );
}

export default App;
