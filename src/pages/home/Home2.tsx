import { Flex, Box, Center } from "@chakra-ui/react";

const Home2 = () => {
  return (
    <Flex align={"center"} justify={"center"} direction={"column"}>
      <Flex
        bg={"gray.50"}
        bgAttachment={"fixed"}
        bgPosition={"center"}
        bgSize={"cover"}
        zIndex={1}
        h={"90vh"}
        w={"90vw"}
        borderRadius={"10px"}
        overflow={"scroll"}
        align={"center"}
        justify={"start"}
        direction={"row"}
        gap={"4%"}
        ps={"3%"}
      >
        <Center
          fontSize={"xl"}
          bg={"gray.300"}
          h={"50%"}
          w={"20%"}
          borderRadius={"10px"}
        >
          Welcome to BINMX
        </Center>
        <Center
          fontSize={"xl"}
          bg={"gray.300"}
          h={"50%"}
          w={"70%"}
          borderRadius={"10px"}
        >
          Welcome to BINMX
        </Center>
      </Flex>
    </Flex>
  );
};

export default Home2;
