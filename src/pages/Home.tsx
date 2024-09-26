import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import Navbar from "../pages/layout/navbar/Navbar";

const Home = () => {
  useEffect(() => {
    console.log("abee beb".split(""));
  }, []);
  return (
    <Flex direction={"column"}>
      <Navbar />
    </Flex>
  );
};

export default Home;
