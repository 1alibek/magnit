import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Image,
  Heading,
  Text,
  Box,
  Input,
  useToast,
  ModalHeader,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

function MainModal() {
  const { open, closeModal, product } = useContext(ModalContext);
  const toast = useToast();

  const buyProduct = () => {
    toast({
      title: "haridingiz uchun raxmat",
      status: "success",
      isClosable: true,
    });
    closeModal();
  };

  return (
    <>
      <Modal isOpen={open} onClose={closeModal} >
        <ModalContent>
          <ModalHeader>{product.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {" "}
            <img src={product.thumbnail} />
            <Text>${product.price}</Text>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={buyProduct}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default MainModal;
