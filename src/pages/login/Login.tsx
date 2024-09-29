import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from "@chakra-ui/react";
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
    //   <Flex
    //     direction={"column"}
    //     align={"center"}
    //     justify={"center"}
    //     bg={"gray.50"}
    //     width={"90vw"}
    //     height={"90vh"}
    //     gap={3}
    //   >
    //     <Box width={"50%"} p={5}>
    //       <Input
    //         type="text"
    //         placeholder="User Name"
    //         value={userName}
    //         variant={"filled"}
    //         size={"lg"}
    //         onChange={(e: any) => {
    //           setUserName(e.currentTarget.value);
    //         }}
    //       />
    //     </Box>
    //     <Box width={"50%"} p={5}>
    //       <Input
    //         type="text"
    //         placeholder="Password"
    //         value={password}
    //         variant={"filled"}
    //         size={"lg"}
    //         onChange={(e: any) => {
    //           setPassword(e.currentTarget.value);
    //         }}
    //       />
    //     </Box>
    //     <Box>
    //       <Button onClick={loginUser}>Login</Button>
    //     </Box>
    //   </Flex>
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              onChange={(e: any) => {
                setUserName(e.currentTarget.value);
              }}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={(e: any) => {
                setPassword(e.currentTarget.value);
              }}
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Text color={"blue.500"}>Continue As Guest</Text>
              <Text color={"blue.500"}>Forgot password?</Text>
            </Stack>
            <Button onClick={loginUser} colorScheme={"blue"} variant={"solid"}>
              Sign in
            </Button>
            <Text color={"blue.500"}>Sign Up</Text>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
};

export default Login;
