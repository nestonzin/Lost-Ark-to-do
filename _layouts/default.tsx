import { Flex } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Flex flexDirection="column" h="100vh" w="100%">
      <Navbar />
      {children}
    </Flex>
  );
};
