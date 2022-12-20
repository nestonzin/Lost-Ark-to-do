import { Button, Flex, HStack, Image, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex justifyContent="space-between" alignItems="center" p="1rem">
      <Image src="LostArkLogo.png" maxW={"10rem"} w="100%" h="auto" />
      <HStack>
        <Button onClick={toggleColorMode}>
          {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </HStack>
    </Flex>
  );
};
