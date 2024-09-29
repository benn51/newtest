import { Flex, List } from "@chakra-ui/react";
import PopoverComoponent from "../PopoverComoponent";
import { Link } from "react-router-dom";

const NavbarFull = () => {
  return (
    <Flex
      direction={"row"}
      justify={"end"}
      gap={8}
      h={"10vh"}
      bg={"gray.100"}
      align={"center"}
      w={"100%"}
      p={5}
    >
      <List>
        <Link to={"/home"}> Home</Link>
      </List>
      <List>
        <Link to={"/blogs"}> Blogs</Link>
      </List>
      <List>
        <Link to={"/dashboard"}> Dashboard</Link>
      </List>
      <List>
        <Link to={"/login"}> Login</Link>
      </List>
      <PopoverComoponent
        linkTo="profile"
        linkPage="Profile"
        linkName="profile"
      />{" "}
    </Flex>
  );
};

export default NavbarFull;
