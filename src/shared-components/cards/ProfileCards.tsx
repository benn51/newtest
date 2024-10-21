import { Box, Flex } from "@chakra-ui/react";
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
    <Flex
      h={"25vh"}
      w={{ base: "50%", md: "50%", sm: "40%", lg: "70%" }}
      bg="gray"
      border="1px solid"
      borderColor="gray.800"
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="lg"
      flexShrink="0"
      rounded="md"
      textAlign="center"
      align={"center"}
      justify={"center"}
    >
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="solid"
        justify={"center"}
        borderRadius={"10px"}
        align={"center"}
        bg={"blue.100"}
        w={"20vw"}
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
    </Flex>
  );
};

export default ProfileCards;
