import { Flex, Image } from "@chakra-ui/react";
import { Tasks } from "../Components/Todo/Tasks";
import { DefaultLayout } from "../_layouts/default";

export default function Home() {
  return (
    <DefaultLayout>
      <Flex justifyContent="center" alignItems="center">
        <Tasks />
        <Image src="gunner.png" alt=" " maxW="20rem" w="100%" h="auto" />
      </Flex>
    </DefaultLayout>
  );
}
