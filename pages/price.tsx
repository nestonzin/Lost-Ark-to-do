import { SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../services/api";
import { DefaultLayout } from "../_layouts/default";

interface IItems {
  name: string;
  category: string;
  avgPrice: number;
  image: string;
  recentPrice: number;
  lowPrice: number;
}

export default function Price() {
  const [Items, setItems] = useState<IItems[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    async function getItems() {
      const response = await api.get(
        "/export-market-live/South America?ids=6882601,6882101,101063,66110222,6861008,101062"
      );
      setItems(response.data);
      // console.log("peguei os itens!", Items);
    }
    getItems();
  }, []);

  return (
    <DefaultLayout>
      <Flex
        alignItems="center"
        flexDirection="column"
        gap="1rem"
        maxW="70%"
        m="0 auto"
      >
        <Text fontWeight="black" textTransform="uppercase">
          Ola mundo! eu sou a rota Prices
        </Text>
        <Flex
          alignItems={"center"}
          justifyContent="center"
          gap="3rem"
          w="100%"
          p="1rem"
          flexWrap="wrap"
        >
          {Items.map((item, index) => (
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              gap="1rem"
              p="1rem"
              bg="gray.600"
              borderRadius={4}
              key={`${item}-${index}`}
            >
              <Text fontWeight="bold">{item.name}</Text>
              <Image
                src={item.image}
                alt="/"
                maxW="3rem"
                maxH="3rem"
                h="100%"
              />
              <Text fontWeight="thin">{item.category}</Text>
              <Text color="orange.300">Preço médio: {item.avgPrice}</Text>
              <Text color="yellow.300">Preço min: {item.lowPrice}</Text>
              <Text color="green.300">Preço atual: {item.recentPrice}</Text>
              <Button onClick={onOpen}>Veja o grafico de preços</Button>

              <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Preço esta semana</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>Texte</Text>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Flex>
          ))}
        </Flex>
        {/* <Text>teste</Text> */}
      </Flex>
    </DefaultLayout>
  );
}
