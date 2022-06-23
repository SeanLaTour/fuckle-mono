import {
  Box,
  Modal,
  useDisclosure,
  Text,
  ModalOverlay,
  ModalContent,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import TextLine from "./text_line";
import { CUSS_WORDS } from "./cuss_words";
import Keyboard from "./keyboard";
import Stats from "./stats";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  const isBrowser = typeof window !== "undefined";
  const [toggleStats, setToggleStates] = useState(false);
  const [stats, setStats] = useState(
    isBrowser && window.localStorage.getItem("fuckle-stats")
      ? JSON.parse(window.localStorage.getItem("fuckle-stats"))
      : {
          one: 0,
          two: 0,
          three: 0,
          four: 0,
          five: 0,
          six: 0,
        }
  );
  console.log("initial stats: ", stats);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalText, setModalText] = useState("");
  const [allUsedLetters, setAllUsedLetters] = useState("");
  const [textA, setTextA] = useState([]);
  const [textB, setTextB] = useState([]);
  const [textC, setTextC] = useState([]);
  const [textD, setTextD] = useState([]);
  const [textE, setTextE] = useState([]);
  const [textAColors, setTextAColors] = useState([
    "black",
    "black",
    "black",
    "black",
  ]);
  const [textBColors, setTextBColors] = useState([
    "black",
    "black",
    "black",
    "black",
  ]);
  const [textCColors, setTextCColors] = useState([
    "black",
    "black",
    "black",
    "black",
  ]);
  const [textDColors, setTextDColors] = useState([
    "black",
    "black",
    "black",
    "black",
  ]);
  const [textEColors, setTextEColors] = useState([
    "black",
    "black",
    "black",
    "black",
  ]);
  const [currentLine, setCurrentLine] = useState(1);
  const [cussWord, setCussWord] = useState(
    CUSS_WORDS[Math.floor(Math.random() * CUSS_WORDS.length)]
  );

  const setStatsFromCurrentGame = (attempts) => {
    console.log(attempts);
    switch (attempts) {
      case 6:
        setStats((stats) => (stats.six += 1));
        break;
      case 1:
        setStats((stats) => (stats.one += 1));
        break;
      case 2:
        setStats((stats) => (stats.two += 1));
        break;
      case 3:
        setStats((stats) => (stats.three += 1));
        break;
      case 4:
        setStats((stats) => (stats.four += 1));
        break;
      case 5:
        setStats((stats) => (stats.five += 1));
        break;
    }
  };

  const translateNumberToText = (number: number) => {
    switch (number) {
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
    }
  };

  const checkIfMatch = (
    word: string[],
    cussword: string,
    setColors: Function,
    setAllUsedLetters: Function
  ) => {
    const compareWord = cussword.split("");
    const tempColorsArray = [];
    if (word.length !== 4) return;
    if (word.join("") !== cussword) {
      setCurrentLine(currentLine + 1);
    }
    const alreadyUsedLetters = [];

    const findDoubleLetters = (word) => {
      for (let i = 0; i <= 3; i++) {
        for (let j = i; j <= 3; j++) {
          if (word[i] === word[j + 1]) {
            return word[i];
          }
        }
        if (word[i] === word[i - 1]) {
          return word[i];
        }
      }
    };

    const doubleLetters = [];
    doubleLetters.push(findDoubleLetters(compareWord));
    for (let i = 0; i <= 3; i++) {
      if (word[i] === compareWord[i]) {
        tempColorsArray.push("green");
      } else if (
        cussword.includes(word[i]) &&
        !alreadyUsedLetters.includes(word[i])
      ) {
        tempColorsArray.push("yellow");
      } else if (doubleLetters.includes(word[i])) {
        tempColorsArray.push("yellow");
      } else {
        tempColorsArray.push("black");
      }
      alreadyUsedLetters.push(word[i]);
    }
    setColors(tempColorsArray);

    setAllUsedLetters(allUsedLetters + word.join(""));

    if (word.join("") === cussword) {
      setModalText(
        `You son of a bitch! You did it in ${translateNumberToText(
          currentLine
        )} ${currentLine === 1 ? "try" : "tries"}! Congratulations!`
      );
      setStatsFromCurrentGame(currentLine);
      setTimeout(() => {
        console.log("STATS", stats);
        isBrowser
          ? window.localStorage.setItem("fuckle-stats", JSON.stringify(stats))
          : stats;
        onOpen();
      }, 2000);
    }
    if (word.join("") !== cussword && currentLine === 5) {
      setModalText(
        `You failed! You piece of shit! How could you fail!? The word was ${cussWord}!`
      );
      console.log("STATS", stats);
      setStatsFromCurrentGame(6);
      setTimeout(() => {
        isBrowser
          ? window.localStorage.setItem("fuckle-stats", JSON.stringify(stats))
          : stats;
        onOpen();
      }, 2000);
    }
  };

  const enterChecker = (line: number) => {
    if (currentLine > 5) return;
    switch (line) {
      case 1:
        checkIfMatch(textA, cussWord, setTextAColors, setAllUsedLetters);
        break;
      case 2:
        checkIfMatch(textB, cussWord, setTextBColors, setAllUsedLetters);
      case 3:
        checkIfMatch(textC, cussWord, setTextCColors, setAllUsedLetters);
      case 4:
        checkIfMatch(textD, cussWord, setTextDColors, setAllUsedLetters);
      case 5:
        checkIfMatch(textE, cussWord, setTextEColors, setAllUsedLetters);
    }
  };

  const textInput = (word: string, setFunction: Function) => {
    const wordArray = word.toUpperCase().split("");
    setFunction(wordArray);
  };

  const addTextToLine = (word: string) => {
    switch (currentLine) {
      case 1:
        textInput(word, setTextA);
        break;
      case 2:
        textInput(word, setTextB);
        break;
      case 3:
        textInput(word, setTextC);
        break;
      case 4:
        textInput(word, setTextD);
        break;
      case 5:
        textInput(word, setTextE);
        break;
    }
  };

  const determineLine = (currentLine: number) => {
    switch (currentLine) {
      case 1:
        return { text: textA, setText: setTextA };
      case 2:
        return { text: textB, setText: setTextB };
      case 3:
        return { text: textC, setText: setTextC };
      case 4:
        return { text: textD, setText: setTextD };
      case 5:
        return { text: textE, setText: setTextE };
      case 6:
        return { text: textE, setText: setTextE };
    }
  };

  const homeUseEffect = async () => {
    const res = await fetch("https://62b25eb1181db8067f827873--verdant-entremet-7e4818.netlify.app/")
    const data = await res.json()
    console.log(data)
    setCussWord(data)
  }

  useEffect(() => {
    homeUseEffect()
  },[])

  return (
    <>
      <Box
        padding="2rem"
        flexDirection={"column"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100vw"}
        height={"1000px"}
        backgroundColor={"#000"}
      >
        <Text
          marginTop={"-200px"}
          fontFamily={"monospace"}
          fontSize={"4rem"}
          marginBottom={"2rem"}
          color={"white"}
        >
          FUCKLE
        </Text>
        <Box
          padding={"0.5rem"}
          paddingBlock={".5rem"}
          width={"80vw"}
          height={"34rem"}
          borderColor={"white"}
          borderStyle={"solid"}
          borderRadius={"5px"}
          borderWidth={"2px"}
        >
          <TextLine
            active={currentLine === 1 ? true : false}
            textColors={textAColors}
            textArray={textA}
          />
          <TextLine
            active={currentLine === 2 ? true : false}
            textColors={textBColors}
            textArray={textB}
          />
          <TextLine
            active={currentLine === 3 ? true : false}
            textColors={textCColors}
            textArray={textC}
          />
          <TextLine
            active={currentLine === 4 ? true : false}
            textColors={textDColors}
            textArray={textD}
          />
          <TextLine
            active={currentLine === 5 ? true : false}
            textColors={textEColors}
            textArray={textE}
          />
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            zIndex={99}
            alignItems={"center"}
            justifyContent={"center"}
            paddingInline={"2rem"}
            display={"flex"}
            textAlign={"center"}
          >
            {toggleStats ? (
              <Stats
                stats={isBrowser ? JSON.parse(window.localStorage.getItem("fuckle-stats")) : stats}
              />
            ) : (
              <Box
                display={"flex"}
                borderRadius={"5px"}
                padding="2rem"
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"column"}
                width={"85vw"}
                borderWidth={"2px"}
                borderColor={"white"}
                height={"20vh"}
                backgroundColor="#111"
              >
                <Text color="white">{modalText}</Text>
                <Button
                  onClick={() => {
                    setToggleStates(true);
                  }}
                  marginTop="1rem"
                  color={"white"}
                >
                  See Stats
                </Button>
              </Box>
            )}
          </ModalContent>
        </Modal>
        <Keyboard
          currentLine={currentLine}
          onClick={enterChecker}
          textObj={determineLine(currentLine)}
          addText={addTextToLine}
          allUsedLetters={allUsedLetters}
          setAllUsedLetters={setAllUsedLetters}
          cussword={cussWord}
        />
      </Box>
    </>
  );
};

export default Home;
