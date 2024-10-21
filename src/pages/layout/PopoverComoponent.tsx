import { Flex, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

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
  changeActive: boolean;
  resetActive: () => void;
};
const PopoverComoponent = (props: propTypes) => {
  const dd = ["abeeb", "gemeda"];
  const [active, setActive] = useState(false);
  const manageActive = () => {
    setActive(true);
    props.resetActive();
  };
  useEffect(() => {
    setActive(false);
  }, [props.changeActive]);
  return (
    <Flex>
      <Popover trigger={"hover"}>
        <PopoverTrigger>
          <Button
            w={"110px"}
            variant={"link"}
            colorScheme={active ? "orange" : "blue"}
            onClick={manageActive}
          >
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
