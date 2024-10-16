// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "../pages/home/horizontalList.css"; // Optional for additional styling

const items = [
  { id: 1, title: "Item 1" },
  { id: 2, title: "Item 2" },
  { id: 3, title: "Item 3" },
  { id: 4, title: "Item 4" },
  { id: 5, title: "Item 5" },
];

// const Dashboard = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex < items.length - 1 ? prevIndex + 1 : prevIndex
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
//   };

//   return (
//     <div className="horizontal-list-container">
//       <button
//         onClick={handlePrev}
//         disabled={currentIndex === 0}
//         className="button"
//       >
//         Previous
//       </button>
//       <motion.div
//         className="carousel"
//         animate={{ x: -currentIndex * 200 }} // Assuming each item has a fixed width of 200px
//         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//       >
//         {items.map((item) => (
//           <div key={item.id} className="carousel-item">
//             {item.title}
//           </div>
//         ))}
//       </motion.div>
//       <button
//         onClick={handleNext}
//         disabled={currentIndex === items.length - 1}
//         className="button"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Dashboard;

import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import backgroundImage2 from "../assets/backroundImage2.png";
import backgroundImage3 from "../assets/backgroundImage3.png";
import bb from "../assets/bb.png";
import { Box, Flex } from "@chakra-ui/react";
import ProfileCards from "../shared-components/cards/ProfileCards";
import { skillsDetailsAll } from "../assets/constants/skillsDetails";

const Dashboard = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Box className="container">
        <Box>
          <Box bg={"yellow"} w={"70vw"} h={"50vh"}>
            <Box bg={"gray"}>
              <h2>Skills</h2>

              <Carousel
                responsive={responsive}
                // infinite={true}
                className="owl-carousel owl-theme skill-slider"
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
              </Carousel>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <img className="background-image-left" src={bb} alt="Image" /> */}
    </section>
  );
};
export default Dashboard;
