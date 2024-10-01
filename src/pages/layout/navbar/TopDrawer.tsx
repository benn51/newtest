import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Flex,
} from "@chakra-ui/react";
import PopoverComoponent from "../PopoverComoponent";
import { List } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const TopDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Button colorScheme="teal" onClick={onOpen}>
        Open Menu
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} placement="top">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default TopDrawer;
