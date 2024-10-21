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
  projects: { title: ""; project_detail: ""; github: "" };
};
const ProjectCards = (props: propTypes) => {
  return (
    <SimpleGrid
      spacing={2}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      w={"90vw"}
    >
      <Card w={"20vw"} bg={"blue.300"}>
        <CardHeader>
          <Heading size="md" fontSize={"2xl"} fontFamily={"monospace"}>
            {" "}
            {props.projects?.title}
          </Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize={"lg"} fontFamily={"monospace"}>
            {props.projects?.project_detail}
          </Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme="orange">
            <a href={props.projects?.github}>Github</a>
          </Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
};

export default ProjectCards;
