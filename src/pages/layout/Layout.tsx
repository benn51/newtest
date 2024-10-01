import { ReactNode } from "react";
import { Flex, Box } from "@chakra-ui/react";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex
      direction="column"
      minHeight="100vh" // Full height of the viewport
    >
      {/* Header or Navbar */}
      <Box bg="gray.100" p={4}>
        <Navbar />
      </Box>

      {/* Main Content */}
      <Box flex="1" p={4}>
        {children}
      </Box>

      {/* Footer */}
      <Box bg="gray.100" p={4} mt="auto">
        <Footer />
      </Box>
    </Flex>
  );
};

export default Layout;
