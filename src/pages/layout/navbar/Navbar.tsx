import { Flex } from "@chakra-ui/react";

import TopDrawer from "./TopDrawer";
import NavbarFull from "./NavbarFull";
import { useBreakpointValue } from "@chakra-ui/react";

const Navbar = () => {
  const isDrawerVisible = useBreakpointValue({ base: true, md: false });
  return (
    <Flex
      direction={"row"}
      justify={"center"}
      gap={8}
      h={"10vh"}
      bg={"gray.100"}
      align={"center"}
      p={10}
    >
      {isDrawerVisible ? <TopDrawer /> : <NavbarFull />}
    </Flex>
  );
};

export default Navbar;
