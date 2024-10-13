import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import { introduction } from "../../assets/constants/introduction";

const IntroCard = () => {
  return (
    <Box
      color={"white"}
      w={{ base: "90%", md: "80%", lg: "100%", sm: "100%" }}
      h={"90vh"}
    >
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        gap={4}
        w={{ base: "100%", md: "100%", lg: "100%", sm: "100%" }}
        h={"90%"}
      >
        <Flex
          direction={"column"}
          align={"start"}
          justify={"center"}
          gap={4}
          w={"100%"}
          ps={"10%"}
        >
          <Box>
            <Heading
              color={"white"}
              size={"4xl"}
              fontFamily={"Courier"}
              fontWeight={"none"}
            >
              Biniam T
            </Heading>
          </Box>
          <Box>
            <Heading
              fontFamily={"Courier"}
              fontWeight={"none"}
              color={"purple.200"}
            >
              Full Stack Developer
            </Heading>
          </Box>
          <Box p={2} w={"90%"}>
            <Text fontWeight={"none"} fontFamily={"monospace"} fontSize={"lg"}>
              {" "}
              {introduction[0].about}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default IntroCard;
