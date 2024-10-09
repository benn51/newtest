import { Box } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import { CheckCircleIcon } from "@chakra-ui/icons";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
type propTypes = {
  experience_item: {
    id: "";
    title: "";
  };
};
const ExperienceCard = (props: propTypes) => {
  return (
    <Card w={"85vw"} bg={"blue.300"} h={"110px"} direction={"row"}>
      <CardBody>
        <ListItem ps={5} fontSize={"lg"} fontFamily={"monospace"}>
          <ListIcon as={CheckCircleIcon} color="orange.500" />
          {props.experience_item.title}
        </ListItem>
      </CardBody>
    </Card>
  );
};

export default ExperienceCard;
