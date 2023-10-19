import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";

interface PlayerModalProps {
  name: string;
  city: string;
  whatsapp: string;
  description: string;
  soccerPlayerType: string;
}

const PlayerModal: React.FC<PlayerModalProps> = ({
  name,
  city,
  whatsapp,
  description,
  soccerPlayerType,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-[#4169E1] p-1">
        <p className="font-semibold text-white">Ver más</p>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
              <ModalBody>
                <p>{description}</p>
                <p>
                  Ciudad: <span className="font-bold">{city}</span>
                  Posicion favorita: <span className="font-bold">{soccerPlayerType}</span>
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  <Link href={`https://wa.me/${whatsapp}`} target="_blank">
                    Contactar
                  </Link>
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PlayerModal;
