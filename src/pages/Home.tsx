import { Box, Text, Flex } from "@chakra-ui/react";

import backgroung from "../assets/backgroung.webp";
import backgroundImage2 from "../assets/backroundImage2.png";
import backgroundImage3 from "../assets/backgroundImage3.png";
import bb from "../assets/bb.png";

const Home = () => {
  return (
    <Flex align={"center"} justify={"center"}>
      <Flex
        overflow={"scroll"}
        h={"fit-content"}
        direction={"column"}
        align={"center"}
        justify={"center"}
      >
        <Box
          bgImage={backgroundImage2}
          bgAttachment={"fixed"}
          bgPosition={"center"}
          bgSize={"cover"}
          zIndex={1}
          h={"90vh"}
          w={"90vw"}
          opacity={0.5}
        >
          <Flex w={"100%"} h={"100%"} zIndex={1}>
            <Box w={"100%"} h={"100%"}>
              <Text color={"white"}> First top COntent</Text>
            </Box>
          </Flex>
        </Box>

        <Box
          bgImage={backgroundImage3}
          bgAttachment={"fixed"}
          bgPosition={"center"}
          bgSize={"cover"}
          zIndex={1}
          h={"90vh"}
          w={"90vw"}
          opacity={0.4}
        ></Box>
        <Box
          bgImage={bb}
          bgAttachment={"fixed"}
          bgPosition={"center"}
          bgSize={"cover"}
          zIndex={1}
          h={"90vh"}
          w={"90vw"}
          opacity={0.2}
        ></Box>
      </Flex>
    </Flex>
  );
};

export default Home;
