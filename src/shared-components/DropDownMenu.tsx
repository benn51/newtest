import { Button, Flex, Box } from "@chakra-ui/react";
import { useState } from "react";

type propsType = {
  menuItems: any[];
  selectItem: () => void;
};
const DropDownMenu = (props: propsType) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  return (
    <Flex
      direction={"column"}
      align={"center"}
      justify={"center"}
      gap={2}
      width={"full"}
    >
      {props.menuItems.map((item: any) => (
        <Button
          bg={activeItem === item ? "green" : ""}
          key={item}
          width={"full"}
          size={"sm"}
          onMouseEnter={() => setActiveItem(item)}
          onMouseLeave={() => setActiveItem(null)}
          cursor={"pointer"}
          onClick={() => {
            console.log(item);
          }}
        >
          {item}
        </Button>
      ))}
    </Flex>
  );
};

export default DropDownMenu;
