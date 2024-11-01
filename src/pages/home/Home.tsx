import {
  Box,
  Text,
  Flex,
  Button,
  ButtonGroup,
  OrderedList,
  List,
  IconButton,
  Center,
} from "@chakra-ui/react";
import Dashboard from "../Dashboard";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import backgroundImage2 from "../../assets/backroundImage2.png";
import backgroundImage3 from "../../assets/backgroundImage3.png";
import bb from "../../assets/bb.png";
import { useRef, useState } from "react";
import ProfileCards from "../../shared-components/cards/ProfileCards";
import ProjectCards from "../../shared-components/cards/ProjectCards";
import { projectDetails } from "../../assets/constants/projectDetails";
import ExperienceCard from "../../shared-components/cards/ExperienceCard";
import { experienceDet } from "../../assets/constants/experienceDetails";
import { skillsDetailsAll } from "../../assets/constants/skillsDetails";

import { motion } from "framer-motion";
import IntroCard from "./IntroCard";
const Home = () => {
  const skills: any = useRef();
  const experience: any = useRef();
  const projects: any = useRef();
  const [skillisActive, setSkillisActive] = useState(false);
  const [projectsActive, setProjectisActive] = useState(false);
  const [experisActive, setExperisActive] = useState(false);
  const MotionBox = motion(Box);

  const newRef: any = useRef(null);

  const scrollLeft = () => {
    if (newRef.current) {
      newRef.current.scrollLeft -= 200; // Scroll to the left
    }
  };

  const scrollRight = () => {
    if (newRef.current) {
      newRef.current.scrollLeft += 200; // Scroll to the right
    }
  };

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < skillsDetailsAll.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
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
        gap={3}
      >
        <Box
          bgImage={backgroundImage2}
          bg={"blue.900"}
          bgAttachment={"fixed"}
          bgPosition={"center"}
          bgSize={"cover"}
          zIndex={1}
          h={"90vh"}
          w={"90vw"}
          borderRadius={"10px"}
          overflow={"scroll"}
        >
          <IntroCard />
        </Box>
        <Flex
          bgImage={backgroundImage2}
          bg={"blue.900"}
          bgAttachment={"fixed"}
          bgPosition={"center"}
          bgSize={"cover"}
          zIndex={1}
          h={"90vh"}
          w={"90vw"}
          ref={skills}
          borderRadius={"10px"}
          justify={"center"}
          overflow="hidden"
          mx="auto"
        >
          <Flex align={"center"} direction={"row"} justify={"center"}>
            <Dashboard />
            {/* <IconButton
              aria-label="Scroll Left"
              icon={<ArrowBackIcon />}
              onClick={scrollLeft}
            />
            <Flex
              bg={"black"}
              w={"80vw"}
              h={"50%"}
              overflow={"scroll"}
              justify={"center"}
              align={"center"}
              ref={newRef}
            >
              <MotionBox
                className="carousel"
                animate={{ x: -currentIndex * 100 }} // Assuming each item has a fixed width of 200px
                transition={{ type: "spring", stiffness: 300, damping: 300 }}
                bg={"yellow"}
                w={"80vw"}
              >
                {skillsDetailsAll.map((item: any) => (
                  <ProfileCards
                    key={item.id}
                    cardText={item.title}
                    value={item.value}
                    propgressLabel={item.value_label}
                    yearsOfExperience={item.years}
                  />
                ))}
              </MotionBox>
            </Flex>
            <IconButton
              aria-label="Scroll Right"
              icon={<ArrowForwardIcon />}
              onClick={scrollRight}
            /> */}
          </Flex>
        </Flex>

        <Box
          bgImage={backgroundImage3}
          bg={"blue.900"}
          bgAttachment={"fixed"}
          bgPosition={"center"}
          bgSize={"cover"}
          zIndex={1}
          h={"90vh"}
          w={"90vw"}
          ref={experience}
          borderRadius={"10px"}
          overflow={"scroll"}
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
          <Box>
            <OrderedList pt={"1%"} ps={"1%"}>
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
        </Box>
        <Flex
          direction={"column"}
          bgImage={bb}
          bgAttachment={"fixed"}
          bgPosition={"center"}
          bgSize={"cover"}
          zIndex={1}
          h={"90vh"}
          w={"90vw"}
          ref={projects}
          borderRadius={"10px"}
          overflow={"scroll"}
          align={"center"}
          justify={"center"}
        >
          <Flex align={"end"} w={"90%"} justify={"end"} pe={"10%"}>
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
            w={"80vw"}
            direction={"row"}
            align={"center"}
            justify={"center"}
            ps={"5%"}
            pt={"1%"}
            gap={4}
            h={"90%"}
            bg={"blue.900"}
          >
            {projectDetails.map((item: any) => (
              <ProjectCards key={item.title} projects={item} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;

{
  /* <Flex direction={"column"} width={"25%"} gap={2}>
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
            <Flex direction={"column"} width={"25%"} gap={2}>
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
            <Flex direction={"column"} width={"25%"} gap={2}>
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
            </Flex> */
}
