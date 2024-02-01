import { useEffect, useState } from "react";
import { flattenArray, randomizeArray, unflattenArray } from "./utils/array";
import SolvedWords from "./components/solvedWords/index";
import {
  Grid,
  Container,
  ButtonGroup,
  Box,
  Button,
  Typography,
} from "@mui/material";
import logo from "./assets/images/logo_transparent.png";
import {
  store,
  setOptions,
  addSelectedWords,
  removeSelectedWord,
  clearSelectedWords,
  addResolvedWords,
} from "./store/index";

function App() {
  useEffect(() => {
    store.dispatch(setOptions());
  }, []);

  // Logic to render table
  const [options] = useState({
    groupOne: ["one", "two", "three"],
    groupTwo: ["four", "five", "six"],
    groupThree: ["seven", "eight", "nine"],
    groupFour: ["ten", "eleven", "tweleve"],
  });

  const [selectedWords, setSelectedWords] = useState([]);
  store.subscribe(() => {
    const { selectedWords, resolvedWords } = store.getState();
    setSelectedWords(selectedWords);
    setResolvedWords(resolvedWords);
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

  const handleClick = (e) => {
    e.preventDefault();
    const word = e.target.id;
    if (!selectedWords.includes(word)) {
      store.dispatch(addSelectedWords(word));
    } else {
      store.dispatch(removeSelectedWord(word));
    }
  };

  const [resolvedWords, setResolvedWords] = useState([]);

  useEffect(() => {
    const checkWordCominationMatch = (selectedWords) => {
      let combinationMatchIndex = null;

      for (const index in options) {
        if (options[index].every((word) => selectedWords.includes(word))) {
          combinationMatchIndex = index;
          store.dispatch(addResolvedWords({ [index]: options[index] }));
          store.dispatch(clearSelectedWords());
          alert(`Group ${index} has matching words`);
        }
      }

      if (!combinationMatchIndex) {
        store.dispatch(clearSelectedWords());
        alert("The selected words have nothing in common, Try Again");
      }
      return combinationMatchIndex;
    };

    if (selectedWords.length === 3) {
      checkWordCominationMatch(selectedWords);
    }
  }, [options, selectedWords]);

  return (
    <Container>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Box>
            <img src={logo} alt="word_game_logo" height="100px" />
            <Typography
              variant="h6"
              component="div"
              color="#000000"
              sx={{ mb: 1.5 }}
              data-testid={"heading"}
            >
              Find all related words in sets of threes
            </Typography>
          </Box>
        </Grid>
        {/* Game button display */}
        <Grid item xs={12}>
          <Box>
            {randomizedSubArrays.map((array, index) => (
              <ButtonGroup
                size="large"
                orientation="vertical"
                aria-label="large button group"
                key={"group" + index}
              >
                {array.map((word, index) => (
                  <Button
                    id={word}
                    className={selectedWords.includes(word) ? "selected" : ""}
                    disabled={flattenArray(resolvedWords).includes(word)}
                    key={index}
                    onClick={handleClick}
                    data-testid={"button" + word}
                  >
                    {word}
                  </Button>
                ))}
              </ButtonGroup>
            ))}
          </Box>
        </Grid>
        {/* Display for completed words */}
        <Grid item xs={12}>
          <SolvedWords resolvedWords={resolvedWords} options={options} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
