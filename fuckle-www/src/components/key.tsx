import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface KeyProps {
  letter: string;
  thickKey?: boolean;
  setLetter: Function;
  onClick?: Function;
  currentLine?: number;
  allUsedLetters: string;
  cussword: string;
  color: string;
  canChange: boolean;
}

const Key: React.FC<KeyProps> = (props) => {
  const [color, setColor] = useState("grey");
  useEffect(() => {
    props.canChange ? setColor(props.color) : "";
  }, [props.currentLine]);

  return (
    <Box
      onClick={() => {
        props.letter === "Enter"
          ? props.onClick(props.currentLine)
          : props.setLetter(props.letter);
      }}
      transition={"border-color ease .05s"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      borderWidth={".3px"}
      borderColor={"#777"}
      _active={{ borderColor: "white" }}
      marginInline={"0.2rem"}
      borderRadius={"5px"}
      backgroundColor={color}
      width={props.thickKey ? "12vw" : "8vw"}
      height={"100%"}
      color={"white"}
    >
      <Text fontWeight={"bold"} color={"white"}>
        {props.letter}
      </Text>
    </Box>
  );
};

export default Key;
