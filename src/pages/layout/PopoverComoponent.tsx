import { Flex, Button } from "@chakra-ui/react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import DropDownMenu from "../../shared-components/DropDownMenu";
type propTypes = {
  linkTo: string;
  linkPage: string;
  linkName: string;
};
const PopoverComoponent = (props: propTypes) => {
  const dd = ["abeeb", "gemeda"];
  return (
    <Flex>
      <Popover trigger={"hover"}>
        <PopoverTrigger>
          <Button w={"130px"} variant={"link"} colorScheme="blue">
            {props.linkName}
          </Button>
        </PopoverTrigger>
        <PopoverContent w={"150px"}>
          <PopoverArrow />
          <PopoverBody p={0}>
            <DropDownMenu menuItems={dd} />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default PopoverComoponent;
