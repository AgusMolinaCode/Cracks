import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

interface PlayerModalProps {
    name: string;
    city: string;
    wsp: number;
    description: string;
}

const PlayerModal: React.FC<PlayerModalProps> = ({name, city, wsp, description}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className='bg-[#4169E1] p-1'>
        <p className='font-semibold text-white'>
            Ver más
        </p>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
              <ModalBody>
                <p> 
                  {description}
                </p>
                <p>
                    Ciudad: <span className="font-bold">{city}</span> 
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  {wsp}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default PlayerModal;