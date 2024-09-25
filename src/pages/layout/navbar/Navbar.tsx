import { Flex, Text, List, UnorderedList } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex direction={"row"}>
      <Text>This is coming from the Navbar Compnet </Text>
      <UnorderedList>
        <List> Home</List>
        <List> Profile</List>
        <List> Experience</List>
        <List> More menu Items</List>
      </UnorderedList>
    </Flex>
  );
};

export default Navbar;
