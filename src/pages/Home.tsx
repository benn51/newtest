import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import axios from "axios";
import { Box, Text } from "@chakra-ui/react";

const Home = () => {
  useEffect(() => {
    test();
  }, []);

  const test = async () => {
    const options = {
      method: "GET", // or 'POST', 'PUT', etc., depending on the API
      url: "https://restcountries.com/v3.1/independent?status=true",
      // headers: {
      //   "x-rapidapi-host": "movie-database-alternative.p.rapidapi.com",
      //   "x-rapidapi-key": "5bbee2d9e1msh3b0c6a50f28b79bp1457ecjsnfcbd6f9f52ad",
      //   "Content-Type": "application/json",
      // },
    };

    try {
      const data = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box textAlign="center" p={6}>
      <Text fontSize="2xl" mb={4}>
        Welcome to the Home Page!
      </Text>

      {/* Container for animated images */}
      <Flex
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
      ></Flex>
    </Box>
  );
};

export default Home;
