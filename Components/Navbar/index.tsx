import { Button, Flex, Image, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex justifyContent="space-between" alignItems="center" p="1rem">
      <Image
        src="LostArkLogo.png"
        maxW={"10rem"}
        w="100%"
        h="auto"
        alt="Logo do jogo Lost Ark"
        ml="3rem"
      />
      <Button onClick={toggleColorMode}>
        {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  );
};
