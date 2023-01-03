import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
} from "@chakra-ui/react";
import { IItem } from "../../pages/price";
import { Graphic } from "../Graphic";

interface AbstracModalProps {
  onClose: () => void;
  isOpen: boolean;
  currentItem?: IItem;
}

export const GraphicModal = ({
  isOpen,
  onClose,
  currentItem,
}: AbstracModalProps) => {
  return (
    <Flex>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Preço esta semana</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {currentItem && <Graphic currentItem={currentItem} />}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
