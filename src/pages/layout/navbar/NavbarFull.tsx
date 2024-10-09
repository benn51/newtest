import { Button, Flex, List } from "@chakra-ui/react";
import PopoverComoponent from "../PopoverComoponent";
import { Link } from "react-router-dom";

const NavbarFull = () => {
  return (
    <Flex
      direction={"row"}
      justify={"end"}
      gap={4}
      h={"10vh"}
      bg={"gray.100"}
      align={"center"}
      w={"100%"}
      p={5}
    >
      <Button width={"130px"} colorScheme={"blue"} variant={"link"}>
        <Link to={"/home"}> Home</Link>
      </Button>
      <Button width={"130px"} colorScheme={"blue"} variant={"link"}>
        <Link to={"/blogs"}> Blogs</Link>
      </Button>
      <Button width={"130px"} colorScheme={"blue"} variant={"link"}>
        <Link to={"/dashboard"}> Dashboard</Link>
      </Button>
      <Button width={"130px"} colorScheme={"blue"} variant={"link"}>
        <Link to={"/login"}> Login</Link>
      </Button>
      <PopoverComoponent
        linkTo="profile"
        linkPage="Profile"
        linkName="profile"
      />{" "}
    </Flex>
  );
};

export default NavbarFull;
