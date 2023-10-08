"use client";
import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import PlayerModal from "./PlayerModal";

interface PlayerCardProps {
  name: string;
  city: string;
  imageSrc: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ name, city, imageSrc }) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="relative shadow-large border-2 border-gray-400"
    >
      <Image
        alt={name}
        className="object-cover p-2"
        height={350}
        src={imageSrc}
        width={350}
      />
      <CardFooter className="justify-center gap-3  border-2 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 shadow-small z-10 bg-white/80">
        <p className="text-md font-semibold text-black">
          {name} - {city}
        </p>
        <PlayerModal
            name={name}
            city={city}
            wsp={123456789}
            description={"Dolor do tempor commodo occaecat id cillum commodo ea proident nisi voluptate esse. Voluptate sit occaecat ipsum fugiat voluptate quis culpa pariatur. In adipisicing occaecat culpa esse esse nostrud veniam commodo. Fugiat deserunt anim ad occaecat do sunt."}
        />
      </CardFooter>
    </Card>
  );
};

export default PlayerCard;
