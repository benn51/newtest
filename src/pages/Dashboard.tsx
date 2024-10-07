import { Stack, Box } from "@chakra-ui/react";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    console.log(test(12357887));
  }, []);

  const test: any = (num: any) => {
    if (num < 10) {
      return 1;
    } else {
      return 1 + test(Math.floor(num / 10));
    }
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Box>Dashboard </Box>
    </Stack>
  );
};

export default Dashboard;
