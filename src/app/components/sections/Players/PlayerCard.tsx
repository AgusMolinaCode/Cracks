"use client";
import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import PlayerModal from "./PlayerModal";

interface PlayerCardProps {
  name: string;
  city: string;
  profilePicture: string;
  soccerPlayerType: string;
  description: string;
  whatsapp: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  name,
  city,
  profilePicture,
  soccerPlayerType,
  whatsapp,
  description,
}) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="relative border-2 border-gray-400"
    >
      <Image
        alt={name}
        className="object-cover p-2"
        height={450}
        src={profilePicture}
        width={450}
      />
      <CardFooter className="justify-center gap-3  border-2 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 z-10 bg-white/80">
        <p className="text-md font-semibold text-black">
          {name} - {city}
        </p>
        <PlayerModal
          name={name}
          city={city}
          description={description}
          soccerPlayerType={soccerPlayerType}
          whatsapp={whatsapp}
        />
      </CardFooter>
    </Card>
  );
};

export default PlayerCard;
