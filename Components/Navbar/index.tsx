import { Flex, Image, Switch } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" p="5rem">
      <Image src="LostArkLogo.png" maxW={"10rem"} w="100%" h="auto" />
      <Switch></Switch>
    </Flex>
  );
};
