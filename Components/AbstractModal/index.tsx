import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState, useCallback } from "react";
import api from "../../services/api";
import type { IItems } from "../../pages/price";
import { Graphic } from "../Graphic";

export const AbstractModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Items, setItems] = useState<IItems[]>([]);
  // const [currentItem, setCurrentItem] = useState<IItems>();

  // const handleOpenModal = useCallback(
  //   (item: IItems) => {
  //     setCurrentItem(item);
  //     onOpen();
  //   },
  //   [onOpen]
  // );

  useEffect(() => {
    async function getItems() {
      const response = await api.get(
        "/export-market-live/South America?ids=6882601,6882101,101063,66110222,6861008,101062"
      );
      setItems(response.data);
    }
    getItems();
  }, []);

  return (
    <Flex>
      {Items.map((item, index) => (
        <Modal
          onClose={onClose}
          isOpen={isOpen}
          isCentered
          key={`${item}-${index}`}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Preço esta semana</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Graphic />
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Fechar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ))}
    </Flex>
  );
};
