import { Flex, Image } from "@chakra-ui/react";
import Head from "next/head";
import { Tasks } from "../Components/Todo/Tasks";
import { DefaultLayout } from "../_layouts/default";

export default function Home() {
  return (
    <DefaultLayout>
      <Flex
        flexDirection={["column", "column", "row", "row"]}
        justifyContent="center"
        alignItems="center"
      >
        <Head>
          <title>Lost Ark to do list</title>
          <meta
            name="description"
            content="Organize seu farm diário e semanal com sua lista de tarefas."
          />
        </Head>
        <Tasks />
        <Image src="gunner.png" alt=" " maxW="20rem" w="100%" h="auto" />
      </Flex>
    </DefaultLayout>
  );
}
