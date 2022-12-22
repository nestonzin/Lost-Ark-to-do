import { Button, Flex, Image, useColorMode, Link } from "@chakra-ui/react";
import { MoonIcon, SunIcon, ArrowLeftIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex justifyContent="space-between" alignItems="center" p="1rem">
      <Link href="/">
        <Image
          src="LostArkLogo.png"
          maxW={"10rem"}
          w="100%"
          h="auto"
          alt="Logo do jogo Lost Ark"
          ml="3rem"
        />
      </Link>
      <Flex gap="1rem" alignItems="center" justifyContent="center">
        <Link href="/price">Veja os preços dos principais itens</Link>
        <Button onClick={toggleColorMode}>
          {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Flex>
  );
};
