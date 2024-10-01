import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
      <Popover>
        <PopoverTrigger>
          <Link to={`/${props.linkTo}`}> {props.linkName}</Link>
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
