import { Button, Flex, Image, useColorMode, Link, Box } from "@chakra-ui/react";
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
      <Flex gap="1rem" alignItems="center">
        <Link href="/price">
          Veja os preços dos principais itens
        </Link>
        <Button onClick={toggleColorMode}>
          {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Flex>
  );
};
