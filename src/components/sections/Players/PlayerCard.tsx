"use client";
import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import PlayerModal from "./PlayerModal";

interface PlayerCardProps {
  name: string;
  city: string;
  profilePicture: string;
  description: string;
  whatsapp: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ name, city, profilePicture,whatsapp,description }) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="relative shadow-large border-2 border-gray-400"
    >
      <Image
        alt={name}
        className="object-cover p-2"
        height={450}
        src='/messi.png'
        width={450}
      />
      <CardFooter className="justify-center gap-3  border-2 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 shadow-small z-10 bg-white/80">
        <p className="text-md font-semibold text-black">
          {name} - {city}
        </p>
        <PlayerModal
            name={name}
            city={city}
            description={description}
            whatsapp={whatsapp}
        />
      </CardFooter>
    </Card>
  );
};

export default PlayerCard;
