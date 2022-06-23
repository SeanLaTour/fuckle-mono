import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Key from "./key";

interface KeyboardProps {
  addText: Function;
  textObj: TextObj;
  onClick: Function;
  currentLine: number;
  allUsedLetters: string;
  setAllUsedLetters: Function;
  cussword: string;
}

interface TextObj {
  text: string;
  setText: Function;
}

const Keyboard: React.FC<KeyboardProps> = (props) => {
  const [toggleU, setToggleU] = useState({ color: "grey", keepSame: false });
  const [toggleF, setToggleF] = useState({ color: "grey", keepSame: false });
  const [toggleG, setToggleG] = useState({ color: "grey", keepSame: false });
  const [toggleA, setToggleA] = useState({ color: "grey", keepSame: false });
  const [toggleB, setToggleB] = useState({ color: "grey", keepSame: false });
  const [toggleC, setToggleC] = useState({ color: "grey", keepSame: false });
  const [toggleD, setToggleD] = useState({ color: "grey", keepSame: false });
  const [toggleE, setToggleE] = useState({ color: "grey", keepSame: false });
  const [toggleH, setToggleH] = useState({ color: "grey", keepSame: false });
  const [toggleI, setToggleI] = useState({ color: "grey", keepSame: false });
  const [toggleJ, setToggleJ] = useState({ color: "grey", keepSame: false });
  const [toggleK, setToggleK] = useState({ color: "grey", keepSame: false });
  const [toggleL, setToggleL] = useState({ color: "grey", keepSame: false });
  const [toggleM, setToggleM] = useState({ color: "grey", keepSame: false });
  const [toggleN, setToggleN] = useState({ color: "grey", keepSame: false });
  const [toggleO, setToggleO] = useState({ color: "grey", keepSame: false });
  const [toggleP, setToggleP] = useState({ color: "grey", keepSame: false });
  const [toggleQ, setToggleQ] = useState({ color: "grey", keepSame: false });
  const [toggleR, setToggleR] = useState({ color: "grey", keepSame: false });
  const [toggleS, setToggleS] = useState({ color: "grey", keepSame: false });
  const [toggleT, setToggleT] = useState({ color: "grey", keepSame: false });
  const [toggleV, setToggleV] = useState({ color: "grey", keepSame: false });
  const [toggleW, setToggleW] = useState({ color: "grey", keepSame: false });
  const [toggleX, setToggleX] = useState({ color: "grey", keepSame: false });
  const [toggleY, setToggleY] = useState({ color: "grey", keepSame: false });
  const [toggleZ, setToggleZ] = useState({ color: "grey", keepSame: false });
  const [canChange, setCanChange] = useState([]);

  const addLetterToArray = (letter: string) => {
    if (!props.textObj) return;
    if (props.textObj.text.length >= 4) return;
    let tempArray = [...props.textObj.text, letter];
    const string = tempArray.join("");
    props.addText(string);
    setCanChange([...canChange, letter]);
  };

  const determineIfCanChange = (change, letter) => {
    if (canChange.includes(letter)) {
      return true;
    } else {
      return false;
    }
  };

  const sliceIndex = (currentLine: number) => {
    switch (currentLine) {
      case 1:
        return [0, 4];
      case 2:
        return [0, 4];
      case 3:
        return [4, 8];
      case 4:
        return [8, 12];
      case 5:
        return [12, 16];
      case 6:
        return [16, 20];
    }
  };

  const colorCodeUsedLetters = (
    letters: string[],
    letter: string,
    currentLine: number,
    cussword: string,
    setFunction: Function,
    keepSame: boolean
  ) => {
    const sliceNumbers = sliceIndex(currentLine);
    if (letters.includes(letter)) {
      const word = letters.slice(sliceNumbers[0], sliceNumbers[1]);
      const indexCuss = cussword.split("").indexOf(letter);
      const indexWord = word.indexOf(letter);
      const currentLetter = letters[indexWord];

      function getAllIndexes(arr, val) {
        var indexes = [],
          i = -1;
        while ((i = arr.indexOf(val, i + 1)) != -1) {
          indexes.push(i);
        }
        return indexes;
      }
      const allIndexes = getAllIndexes(cussword, currentLetter);
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
      doubleLetters.push(findDoubleLetters(cussword));
      if (
        (indexWord === indexCuss && indexCuss !== -1) ||
        (indexWord === allIndexes[1] && indexCuss !== -1)
      ) {
        setFunction({ color: "green", keepSame: true });
      } else if (
        cussword.includes(letter) &&
        !letters.slice(0, sliceNumbers[0]).includes(letter) &&
        !keepSame
      ) {
        setFunction({ color: "yellow", keepSame: false });
      } else if (!keepSame && !cussword.includes(letter)) {
        setFunction({ color: "#333", keepSame: true });
      }
    }
  };

  const removeLetterFromArray = () => {
    if (!props.textObj) return;
    if (props.textObj.text.length > 4) return;
    if (props.textObj.text.length < 1) return;
    const tempText = props.textObj.text.slice(0, props.textObj.text.length - 1);
    props.textObj.setText(tempText);
    const tempChange = canChange.slice(0, canChange.length - 1);
    setCanChange(tempChange);
  };

  useEffect(() => {
    colorCodeUsedLetters(
      props.textObj.text,
      "U",
      props.currentLine,
      props.cussword,
      setToggleU,
      toggleU.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "F",
      props.currentLine,
      props.cussword,
      setToggleF,
      toggleF.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "G",
      props.currentLine,
      props.cussword,
      setToggleG,
      toggleG.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "A",
      props.currentLine,
      props.cussword,
      setToggleA,
      toggleA.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "B",
      props.currentLine,
      props.cussword,
      setToggleB,
      toggleB.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "C",
      props.currentLine,
      props.cussword,
      setToggleC,
      toggleC.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "D",
      props.currentLine,
      props.cussword,
      setToggleD,
      toggleD.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "E",
      props.currentLine,
      props.cussword,
      setToggleE,
      toggleE.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "H",
      props.currentLine,
      props.cussword,
      setToggleH,
      toggleH.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "I",
      props.currentLine,
      props.cussword,
      setToggleI,
      toggleI.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "J",
      props.currentLine,
      props.cussword,
      setToggleJ,
      toggleJ.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "K",
      props.currentLine,
      props.cussword,
      setToggleK,
      toggleK.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "L",
      props.currentLine,
      props.cussword,
      setToggleL,
      toggleL.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "M",
      props.currentLine,
      props.cussword,
      setToggleM,
      toggleM.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "N",
      props.currentLine,
      props.cussword,
      setToggleN,
      toggleN.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "O",
      props.currentLine,
      props.cussword,
      setToggleO,
      toggleO.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "P",
      props.currentLine,
      props.cussword,
      setToggleP,
      toggleP.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "Q",
      props.currentLine,
      props.cussword,
      setToggleQ,
      toggleQ.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "R",
      props.currentLine,
      props.cussword,
      setToggleR,
      toggleR.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "S",
      props.currentLine,
      props.cussword,
      setToggleS,
      toggleS.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "T",
      props.currentLine,
      props.cussword,
      setToggleT,
      toggleT.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "V",
      props.currentLine,
      props.cussword,
      setToggleV,
      toggleV.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "W",
      props.currentLine,
      props.cussword,
      setToggleW,
      toggleW.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "X",
      props.currentLine,
      props.cussword,
      setToggleX,
      toggleX.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "Y",
      props.currentLine,
      props.cussword,
      setToggleY,
      toggleY.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "Z",
      props.currentLine,
      props.cussword,
      setToggleZ,
      toggleZ.keepSame
    );
  }, [props.onClick]);

  return (
    <Box
      position={"fixed"}
      bottom="0"
      backgroundColor={"#222"}
      height="27%"
      width={"100%"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        height={"33%"}
        paddingBlock=".6rem"
      >
        <Key
          color={toggleQ.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"Q"}
          canChange={determineIfCanChange(canChange, "Q")}
        />
        <Key
          color={toggleW.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"W"}
          canChange={determineIfCanChange(canChange, "W")}
        />
        <Key
          color={toggleE.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"E"}
          canChange={determineIfCanChange(canChange, "E")}
        />
        <Key
          color={toggleR.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"R"}
          canChange={determineIfCanChange(canChange, "R")}
        />
        <Key
          color={toggleT.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"T"}
          canChange={determineIfCanChange(canChange, "T")}
        />
        <Key
          color={toggleY.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"Y"}
          canChange={determineIfCanChange(canChange, "Y")}
        />
        <Key
          color={toggleU.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"U"}
          canChange={determineIfCanChange(canChange, "U")}
        />
        <Key
          color={toggleI.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"I"}
          canChange={determineIfCanChange(canChange, "I")}
        />
        <Key
          color={toggleO.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"O"}
          canChange={determineIfCanChange(canChange, "O")}
        />
        <Key
          color={toggleP.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"P"}
          canChange={determineIfCanChange(canChange, "P")}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        height={"33%"}
        paddingInline={"4vw"}
        paddingBlock=".6rem"
      >
        <Key
          color={toggleA.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"A"}
          canChange={determineIfCanChange(canChange, "A")}
        />
        <Key
          color={toggleS.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"S"}
          canChange={determineIfCanChange(canChange, "S")}
        />
        <Key
          color={toggleD.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"D"}
          canChange={determineIfCanChange(canChange, "D")}
        />
        <Key
          color={toggleF.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"F"}
          canChange={determineIfCanChange(canChange, "F")}
        />
        <Key
          color={toggleG.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"G"}
          canChange={determineIfCanChange(canChange, "G")}
        />
        <Key
          color={toggleH.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"H"}
          canChange={determineIfCanChange(canChange, "H")}
        />
        <Key
          color={toggleJ.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"J"}
          canChange={determineIfCanChange(canChange, "J")}
        />
        <Key
          color={toggleK.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"K"}
          canChange={determineIfCanChange(canChange, "K")}
        />
        <Key
          color={toggleL.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"L"}
          canChange={determineIfCanChange(canChange, "L")}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        height={"33%"}
        paddingBlock=".6rem"
      >
        <Key
          color="grey"
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          onClick={props.onClick}
          setLetter={addLetterToArray}
          letter={"Enter"}
          thickKey={true}
          canChange={canChange}
        />
        <Key
          color={toggleZ.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"Z"}
          canChange={determineIfCanChange(canChange, "Z")}
        />
        <Key
          color={toggleX.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"X"}
          canChange={determineIfCanChange(canChange, "X")}
        />
        <Key
          color={toggleC.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"C"}
          canChange={determineIfCanChange(canChange, "C")}
        />
        <Key
          color={toggleV.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"V"}
          canChange={determineIfCanChange(canChange, "V")}
        />
        <Key
          color={toggleB.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"B"}
          canChange={determineIfCanChange(canChange, "B")}
        />
        <Key
          color={toggleN.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"N"}
          canChange={determineIfCanChange(canChange, "N")}
        />
        <Key
          color={toggleM.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"M"}
          canChange={determineIfCanChange(canChange, "M")}
        />
        <Key
          color="grey"
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={removeLetterFromArray}
          letter={"<-"}
          thickKey={true}
        />
      </Box>
    </Box>
  );
};

export default Keyboard;
