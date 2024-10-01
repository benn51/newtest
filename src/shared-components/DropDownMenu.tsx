import { Button, Flex, Box } from "@chakra-ui/react";

type propsType = {
  menuItems: any[];
  selectItem: () => void;
};
const DropDownMenu = (props: propsType) => {
  return (
    <Flex
      direction={"column"}
      align={"center"}
      justify={"center"}
      width={"full"}
    >
      {props.menuItems.map((item: any) => (
        <Button
          variant={"outline"}
          borderRadius={"0px"}
          key={item}
          width={"full"}
          size={"sm"}
          // cursor={"pointer"}
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
