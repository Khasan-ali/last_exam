import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"

export const UserModal = ({
       openModal,
       onClose,
       callback,
       btnText1 = "Close",
       btnText2 = "Save",
       children,
       title = "Modal Title",
}) => {
       return (
              <Modal isOpen={openModal} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {children}
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    {btnText1}
                  </Button>
                  <Button variant='ghost' onClick={callback}>{btnText2}</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
       )
}