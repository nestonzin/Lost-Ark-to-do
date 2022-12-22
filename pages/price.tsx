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
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useCallback, useEffect, useMemo, useState } from "react";
import api from "../services/api";
import { DefaultLayout } from "../_layouts/default";

interface IItems {
  name: string;
  category: string;
  avgPrice: number;
  image: string;
  recentPrice: number;
  lowPrice: number;
  shortHistoric: {
    [key: string]: number;
    // por isso vc faz dessa forma, fala que é uma string genérica, n importa o nome
  };
}
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Preço semanal",
    },
  },
};

export default function Price() {
  const [Items, setItems] = useState<IItems[]>([]);
  const [currentItem, setCurrentItem] = useState<IItems>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenModal = useCallback(
    (item: IItems) => {
      setCurrentItem(item);
      onOpen();
    },
    [onOpen]
  );

  useEffect(() => {
    async function getItems() {
      const response = await api.get(
        "/export-market-live/South America?ids=6882601,6882101,101063,66110222,6861008,101062"
      );
      setItems(response.data);
    }
    getItems();
  }, []);

  const initialData = {
    datasets: [],
    labels: [""],
  };

  const data = useMemo(() => {
    if (currentItem)
      return {
        labels: Object.keys(currentItem.shortHistoric),
        datasets: [
          {
            fill: true,
            label: "Preço",
            data: Object.values(currentItem.shortHistoric),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      };
  }, [currentItem]);

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
              <Button onClick={() => handleOpenModal(item)}>
                Veja o grafico de preços
              </Button>

              <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Preço esta semana</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {currentItem && (
                      <Line options={options} data={data ?? initialData} />
                    )}
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>Fechar</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </DefaultLayout>
  );
}
