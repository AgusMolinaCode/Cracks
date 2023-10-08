import React from "react";
import PlayerCard from "./PlayerCard";
import SelectPlayer from "./SelectPlayer";
import PlayerPagination from "./PlayerPagination";

const Players = () => {
  return (
    <div className="bg-white border-t-2 border-b-2 pt-8 pb-8 border-blue-200">
      <SelectPlayer />
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-2 justify-items-center mx-auto md:px-28 lg:px-36 xl:px-56 2xl:px-80 px-3">
        <PlayerCard name="Lionel Messi" city="Pilar" imageSrc="/messi.png" />
        <PlayerCard name="Lionel Andres Messi Sabatini" city="Boulogne Sur de Alcantarrilla" imageSrc="/messi.png" />
        <PlayerCard name="Lionel Messi" city="Pilar" imageSrc="/messi.png" />
        <PlayerCard name="Lionel Messi" city="Pilar" imageSrc="/messi.png" />
        <PlayerCard name="Lionel Messi" city="Pilar" imageSrc="/messi.png" />
        <PlayerCard name="Lionel Messi" city="Pilar" imageSrc="/messi.png" />
      </div>
      <PlayerPagination />
    </div>
  );
};

export default Players;
