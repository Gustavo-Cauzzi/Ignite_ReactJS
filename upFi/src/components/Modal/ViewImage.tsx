import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  Box,
  Text,
  ModalCloseButton,
} from '@chakra-ui/react';
import React from 'react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered >
      <ModalOverlay />

      <ModalCloseButton />

      <ModalBody>
        <ModalContent bg="gray.900">
          <Image maxH="600px" maxW="900px" src={imgUrl}/>
          <ModalFooter>
            <Link href={imgUrl} isExternal>
              <Text fontSize="x-small">Abrir original</Text>
            </Link>
          </ModalFooter>
        </ModalContent>
      </ModalBody>
    </Modal>
  )
}
