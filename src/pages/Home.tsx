import { Box, Text, Flex, Button, ButtonGroup } from "@chakra-ui/react";
import backgroundImage2 from "../assets/backroundImage2.png";
import backgroundImage3 from "../assets/backgroundImage3.png";
import bb from "../assets/bb.png";
import { useRef, useState } from "react";
import ProfileCards from "../shared-components/cards/ProfileCards";
const Home = () => {
  const skills: any = useRef();
  const experience: any = useRef();
  const projects: any = useRef();
  const [skillisActive, setSkillisActive] = useState(false);
  const [projectsActive, setProjectisActive] = useState(false);
  const [experisActive, setExperisActive] = useState(false);

  const scrollToExperience = () => {
    if (experience.current) {
      experience.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    setExperisActive(true);
    setProjectisActive(false);
    setSkillisActive(false);
  };

  const scrollToProject = () => {
    if (projects.current) {
      projects.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    setExperisActive(false);
    setProjectisActive(true);
    setSkillisActive(false);
  };
  const scrollToSkills = () => {
    if (skills.current) {
      skills.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    setExperisActive(false);
    setProjectisActive(false);
    setSkillisActive(true);
  };
  return (
    <Flex align={"center"} justify={"center"} direction={"column"}>
      <Flex align={"end"} w={"100%"} justify={"end"} pe={"10%"}>
        <ButtonGroup p={2}>
          <Button
            isActive={skillisActive}
            onClick={scrollToSkills}
            colorScheme={"blue"}
            w={"150px"}
          >
            Skills
          </Button>
          <Button
            isActive={projectsActive}
            onClick={scrollToProject}
            colorScheme={"blue"}
            w={"150px"}
          >
            Projects
          </Button>
          <Button
            isActive={experisActive}
            onClick={scrollToExperience}
            colorScheme={"blue"}
            w={"150px"}
          >
            Experience
          </Button>
        </ButtonGroup>
      </Flex>

      <Flex
        overflow={"scroll"}
        h={"fit-content"}
        direction={"column"}
        align={"center"}
        justify={"center"}
        w={"90vw"}
        height={"fit-content"}
      >
        <Box
          bgImage={backgroundImage2}
          bgAttachment={"fixed"}
          bgPosition={"center"}
          bgSize={"cover"}
          zIndex={1}
          h={"90vh"}
          w={"90vw"}
          ref={skills}
          borderRadius={"10px"}
        >
          <Flex
            w={"100%"}
            h={"100%"}
            zIndex={10}
            align={"center"}
            justify={"center"}
            direction={"row"}
          >
            <Flex direction={"column"} width={"25%"} gap={4}>
              <ProfileCards
                cardText={"Javascript"}
                value={95}
                propgressLabel="95%"
                yearsOfExperience="4 Years"
              />
              <ProfileCards
                cardText={"Typescript"}
                value={95}
                propgressLabel="95%"
                yearsOfExperience="4 Years"
              />
              <ProfileCards
                cardText={"Java"}
                value={95}
                propgressLabel="95%"
                yearsOfExperience="3 Years"
              />
              <ProfileCards
                cardText={"React"}
                value={95}
                propgressLabel="95%"
                yearsOfExperience="4 Years"
              />
              <ProfileCards
                cardText={"Angular"}
                value={90}
                propgressLabel="90%"
                yearsOfExperience="3 Years"
              />
              <ProfileCards
                cardText={"HTML & CSS"}
                value={90}
                propgressLabel="95%"
                yearsOfExperience="4 Years"
              />
              <ProfileCards
                cardText={"Node JS, Express"}
                value={90}
                propgressLabel="95%"
                yearsOfExperience="4 Years"
              />
              <ProfileCards
                cardText={"Serverless"}
                value={95}
                propgressLabel="95%"
                yearsOfExperience="3 Years"
              />
            </Flex>
            <Flex direction={"column"} width={"25%"} gap={4}>
              <ProfileCards
                cardText={"AWS Lambda"}
                value={95}
                propgressLabel="95%"
                yearsOfExperience="2 Years"
              />
              <ProfileCards
                cardText={"AWS Amplify"}
                value={90}
                propgressLabel="90%"
                yearsOfExperience="2 Years"
              />
              <ProfileCards
                cardText={"AWS API gateway"}
                value={90}
                propgressLabel="90%"
                yearsOfExperience="2 Years"
              />
              <ProfileCards
                cardText={"AWS Cognito"}
                value={90}
                propgressLabel="90%"
                yearsOfExperience="2 Years"
              />
              <ProfileCards
                cardText={"AWS S3"}
                value={90}
                propgressLabel="90%"
                yearsOfExperience="2 Years"
              />
              <ProfileCards
                cardText={"Cloudwatch"}
                value={90}
                propgressLabel="90%"
                yearsOfExperience="4 Years"
              />
              <ProfileCards
                cardText={"EC2"}
                value={90}
                propgressLabel="90%"
                yearsOfExperience="2 Years"
              />
              <ProfileCards
                cardText={"Terraform"}
                value={90}
                propgressLabel="90%"
                yearsOfExperience="2 Years"
              />
            </Flex>
            <Flex direction={"column"} width={"25%"} gap={4}>
              <ProfileCards
                cardText={"MySQL,SQLserver"}
                value={90}
                propgressLabel="90%"
                yearsOfExperience="4 Years"
              />
              <ProfileCards
                cardText={"MongoDB"}
                value={90}
                propgressLabel="90%"
                yearsOfExperience="3 Years"
              />
              <ProfileCards
                cardText={"Sequelize"}
                value={90}
                propgressLabel="90%"
                yearsOfExperience="4 Years"
              />
              <ProfileCards
                cardText={"Indexing"}
                value={90}
                propgressLabel="90%"
                yearsOfExperience="2 Years"
              />
              <ProfileCards
                cardText={"DBMS"}
                value={90}
                propgressLabel="90%"
                yearsOfExperience="3 Years"
              />
              <ProfileCards
                cardText={"Git,Github"}
                value={90}
                propgressLabel="90%"
                yearsOfExperience="4 Years"
              />
              <ProfileCards
                cardText={"Jenkins, Github Actions"}
                value={90}
                propgressLabel="90%"
                yearsOfExperience="4 Years"
              />
              <ProfileCards
                cardText={"Docker"}
                value={90}
                propgressLabel="90%"
                yearsOfExperience="3 Years"
              />
            </Flex>
          </Flex>
        </Box>

        <Box
          bgImage={backgroundImage3}
          bgAttachment={"fixed"}
          bgPosition={"center"}
          bgSize={"cover"}
          zIndex={1}
          h={"90vh"}
          w={"90vw"}
          opacity={0.4}
          ref={experience}
          borderRadius={"10px"}
        ></Box>
        <Box
          bgImage={bb}
          bgAttachment={"fixed"}
          bgPosition={"center"}
          bgSize={"cover"}
          zIndex={1}
          h={"90vh"}
          w={"90vw"}
          opacity={0.2}
          ref={projects}
          borderRadius={"10px"}
        ></Box>
      </Flex>
    </Flex>
  );
};

export default Home;
