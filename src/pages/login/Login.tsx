import { Flex, Input, Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    console.log(userName, password);
    const data = await axios.post(
      "https://3kq8o6fg7b.execute-api.us-east-1.amazonaws.com/dev/login",
      { username: userName, password: "new" },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        },
      }
    );
    console.log(data);
  };

  // const loginUser = () => {
  //   fetch("https://3kq8o6fg7b.execute-api.us-east-1.amazonaws.com/dev/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  //     },
  //     body: JSON.stringify({ key: "value" }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error("Error:", error));
  // };

  return (
    <Flex
      direction={"column"}
      align={"center"}
      justify={"center"}
      bg={"gray.50"}
      width={"90vw"}
      height={"90vh"}
      gap={3}
    >
      <Box width={"50%"} p={5}>
        <Input
          type="text"
          placeholder="User Name"
          value={userName}
          variant={"filled"}
          size={"lg"}
          onChange={(e: any) => {
            setUserName(e.currentTarget.value);
          }}
        />
      </Box>
      <Box width={"50%"} p={5}>
        <Input
          type="text"
          placeholder="Password"
          value={password}
          variant={"filled"}
          size={"lg"}
          onChange={(e: any) => {
            setPassword(e.currentTarget.value);
          }}
        />
      </Box>
      <Box>
        <Button onClick={loginUser}>Login</Button>
      </Box>
    </Flex>
  );
};

export default Login;
