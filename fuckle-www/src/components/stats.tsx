import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface StatsProps {
  stats: object;
}

const Stats: React.FC<StatsProps> = (props) => {
  console.log("stats stats: ", props.stats);
  const getPercent = (number) => {
    console.log(
      props.stats.one,
      props.stats.two,
      props.stats.three,
      props.stats.four,
      props.stats.five,
      props.stats.six
    );
    const total =
      props.stats.one +
      props.stats.two +
      props.stats.three +
      props.stats.four +
      props.stats.five +
      props.stats.six;
    console.log(total);
    return (number / total) * 100;
  };
  console.log(getPercent(props.stats.six));
  return (
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
      height={"27vh"}
      backgroundColor="#111"
    >
      <Text marginBottom={".25rem"} fontSize={"1.5rem"} color={"white"}>
        Stats
      </Text>
      <Box
        width={"95%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text width={"2rem"} marginInline={".5rem"} color={"white"}>
          1
        </Text>

        <Box
          alignItems={"center"}
          height={"1rem"}
          width={"95%"}
          justifyContent={"left"}
        >
          <Box
            borderRadius={"3px"}
            backgroundColor={"green"}
            height={"1rem"}
            width={`${getPercent(props.stats.one)}%`}
          ></Box>
        </Box>
        <Text width={"2rem"} color={"white"} marginInline={"0.5.5rem"}>
          {" "}
          {props.stats.one}
        </Text>
      </Box>
      <Box
        width={"95%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text width={"2rem"} marginInline={".5rem"} color={"white"}>
          2
        </Text>
        <Box
          alignItems={"center"}
          height={"1rem"}
          width={"95%"}
          justifyContent={"left"}
        >
          <Box
            borderRadius={"3px"}
            backgroundColor={"green"}
            height={"1rem"}
            width={`${getPercent(props.stats.two)}%`}
          ></Box>
        </Box>
        <Text width={"2rem"} color={"white"} marginInline={"0.5.5rem"}>
          {" "}
          {props.stats.two}
        </Text>
      </Box>
      <Box
        width={"95%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text width={"2rem"} marginInline={".5rem"} color={"white"}>
          3
        </Text>
        <Box
          alignItems={"center"}
          height={"1rem"}
          width={"95%"}
          justifyContent={"left"}
        >
          <Box
            borderRadius={"3px"}
            backgroundColor={"green"}
            height={"1rem"}
            width={`${getPercent(props.stats.three)}%`}
          ></Box>
        </Box>
        <Text width={"2rem"} color={"white"} marginInline={"0.5.5rem"}>
          {" "}
          {props.stats.three}
        </Text>
      </Box>
      <Box
        width={"95%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text width={"2rem"} marginInline={".5rem"} color={"white"}>
          4
        </Text>
        <Box
          alignItems={"center"}
          height={"1rem"}
          width={"95%"}
          justifyContent={"left"}
        >
          <Box
            borderRadius={"3px"}
            backgroundColor={"green"}
            height={"1rem"}
            width={`${getPercent(props.stats.four)}%`}
          ></Box>
        </Box>
        <Text width={"2rem"} color={"white"} marginInline={"0.5.5rem"}>
          {" "}
          {props.stats.four}
        </Text>
      </Box>
      <Box
        width={"95%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text width={"2rem"} marginInline={".5rem"} color={"white"}>
          5
        </Text>
        <Box
          alignItems={"center"}
          height={"1rem"}
          width={"95%"}
          justifyContent={"left"}
        >
          <Box
            borderRadius={"3px"}
            backgroundColor={"green"}
            height={"1rem"}
            width={`${getPercent(props.stats.five)}%`}
          ></Box>
        </Box>
        <Text width={"2rem"} color={"white"} marginInline={"0.5.5rem"}>
          {" "}
          {props.stats.five}
        </Text>
      </Box>
      <Box
        width={"95%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text width={"2rem"} marginInline={".5rem"} color={"white"}>
          F
        </Text>
        <Box
          alignItems={"center"}
          height={"1rem"}
          width={"95%"}
          justifyContent={"left"}
        >
          <Box
            borderRadius={"3px"}
            backgroundColor={"green"}
            height={"1rem"}
            width={`${getPercent(props.stats.six)}%`}
          ></Box>
        </Box>
        <Text width={"2rem"} color={"white"} marginInline={"0.5.5rem"}>
          {" "}
          {props.stats.six}
        </Text>
      </Box>
    </Box>
  );
};

export default Stats;
