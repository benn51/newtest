import {
  Box,
  Text,
  Flex,
  Button,
  ButtonGroup,
  OrderedList,
  List,
} from "@chakra-ui/react";
import backgroundImage2 from "../assets/backroundImage2.png";
import backgroundImage3 from "../assets/backgroundImage3.png";
import bb from "../assets/bb.png";
import { useRef, useState } from "react";
import ProfileCards from "../shared-components/cards/ProfileCards";
import ProjectCards from "../shared-components/cards/ProjectCards";
import { projectDetails } from "../assets/constants/projectDetails";
import ExperienceCard from "../shared-components/cards/ExperienceCard";
import { experienceDet } from "../assets/constants/experienceDetails";
import { skillsDetails } from "../assets/constants/skillsDetails";
import { skillDetails2 } from "../assets/constants/skillsDetails";
import { skillDetails3 } from "../assets/constants/skillsDetails";
import { motion } from "framer-motion";
const Home = () => {
  const skills: any = useRef();
  const experience: any = useRef();
  const projects: any = useRef();
  const [skillisActive, setSkillisActive] = useState(false);
  const [projectsActive, setProjectisActive] = useState(false);
  const [experisActive, setExperisActive] = useState(false);
  const MotionBox = motion(Box);
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

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
              {skillsDetails.map((item: any, index) => (
                <MotionBox
                  key={item.id}
                  initial={{ opacity: 0, y: 50, scale: 1, x: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item.id * 0.2 }}
                  whileHover={{
                    scale: 1.1, // Slowly zoom the box
                    x: 0, // Center the box horizontally
                    y: 0, // Center the box vertically
                    transition: { duration: 0.5 }, // Smooth transition
                  }}
                >
                  <ProfileCards
                    key={index}
                    cardText={item.title}
                    value={item.value}
                    propgressLabel={item.value_label}
                    yearsOfExperience={item.years}
                  />
                </MotionBox>
              ))}
            </Flex>
            <Flex direction={"column"} width={"25%"} gap={4}>
              {skillDetails2.map((item: any, index: any) => (
                <MotionBox
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item.id * 0.2 }}
                  whileHover={{
                    scale: 1.1,
                    x: 0,
                    y: 0,
                    transition: { duration: 0.5 },
                  }}
                >
                  <ProfileCards
                    key={index}
                    cardText={item.title}
                    value={item.value}
                    propgressLabel={item.value_label}
                    yearsOfExperience={item.years}
                  />
                </MotionBox>
              ))}
            </Flex>
            <Flex direction={"column"} width={"25%"} gap={4}>
              {skillDetails3.map((item: any, index: any) => (
                <MotionBox
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item.id * 0.2 }}
                  whileHover={{
                    scale: 1.1,
                    x: 0,
                    y: 0,
                    transition: { duration: 0.5 },
                  }}
                >
                  <ProfileCards
                    key={index}
                    cardText={item.title}
                    value={item.value}
                    propgressLabel={item.value_label}
                    yearsOfExperience={item.years}
                  />
                </MotionBox>
              ))}
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
          ref={experience}
          borderRadius={"10px"}
        >
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
          <OrderedList pt={"5%"} ps={"1%"}>
            <List spacing={3}>
              {experienceDet.map((item: any, index) => (
                <MotionBox
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <ExperienceCard key={item.id} experience_item={item} />
                </MotionBox>
              ))}
            </List>
          </OrderedList>
        </Box>
        <Box
          bgImage={bb}
          bgAttachment={"fixed"}
          bgPosition={"center"}
          bgSize={"cover"}
          zIndex={1}
          h={"90vh"}
          w={"90vw"}
          ref={projects}
          borderRadius={"10px"}
        >
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
            direction={"column"}
            align={"start"}
            justify={"start"}
            ps={"5%"}
            pt={"5%"}
            gap={4}
            h={"90%"}
          >
            {projectDetails.map((item: any) => (
              <ProjectCards key={item.title} projects={item} />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
