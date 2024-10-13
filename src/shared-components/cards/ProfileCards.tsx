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
    <Box
      h={"30vh"}
      w={{ base: "5%", md: "2%", sm: "30%", lg: "10%" }}
      bg="gray.300"
      border="1px solid"
      borderColor="gray.300"
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="lg"
      flexShrink="0"
      rounded="md"
      textAlign="center"
    >
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="solid"
        justify={"space-between"}
        borderRadius={"10px"}
        colorScheme="purple"
        align={"center"}
        bg={"blue.300"}
        w={"95%"}
        h={"100%"}
      >
        <Stack>
          <CardBody>
            <Heading size="md">{props.cardText}</Heading>
            <Text>{props.yearsOfExperience}</Text>
          </CardBody>
        </Stack>

        {/* <Box p={3}>
          <CircularProgress
            value={props.value}
            color="orange.400"
            size={"75px"}
            thickness={"15px"}
          >
            <CircularProgressLabel>
              {props.propgressLabel}
            </CircularProgressLabel>
          </CircularProgress>
        </Box> */}
      </Card>
    </Box>
  );
};

export default ProfileCards;
