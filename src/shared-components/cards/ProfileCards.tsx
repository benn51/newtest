import { Box } from "@chakra-ui/react";
import { Card, CardBody, Text, Stack, Heading } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
type propType = {
  cardText: string;
  yearsOfExperience: string;
  value: number;
  propgressLabel: string;
};
const ProfileCards = (props: propType) => {
  return (
    <Box>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="solid"
        justify={"space-between"}
        borderRadius={"30px"}
        colorScheme="purple"
        align={"center"}
        pe={"5%"}
        bg={"blue.300"}
        w={"95%"}
        h={"100px"}
      >
        <Stack>
          <CardBody>
            <Heading size="md">{props.cardText}</Heading>
            <Text>{props.yearsOfExperience}</Text>
          </CardBody>
        </Stack>

        <Box p={3}>
          <CircularProgress
            value={props.value}
            color="orange.400"
            size={"85px"}
            thickness={"15px"}
          >
            <CircularProgressLabel>
              {props.propgressLabel}
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
      </Card>
    </Box>
  );
};

export default ProfileCards;
