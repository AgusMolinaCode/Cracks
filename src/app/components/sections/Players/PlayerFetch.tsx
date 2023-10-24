"use client";
import React, { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import PlayerInterface from "@/libs/interfaces/Player";
import PlayerSelected from "./PlayerSelected";

const PlayerFetch = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [data, setData] = useState<PlayerInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Establecer en true

  const fetchPlayers = () => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const handleCityChange = (city: string | null) => {
    setSelectedCity(city);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div>
      <PlayerSelected data={data} onCityChange={handleCityChange} />
      <div className="sm:overflow-y-scroll sm:h-[530px]">
        {loading ? (
          <p className="text-center text-2xl sm:text-3xl font-bold pt-5 sm:pt-16">Cargando Jugadores...</p>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2 justify-items-center mx-auto md:px-28 lg:px-36 xl:px-48 2xl:px-80 px-3">
            {data
              .filter((player: PlayerInterface) => {
                if (selectedCity === null) {
                  return true;
                }
                return player.city === selectedCity;
              })
              .map((player: PlayerInterface) => (
                <PlayerCard
                  key={player.id}
                  name={player.name}
                  city={player.city}
                  profilePicture={player.profilePicture}
                  soccerPlayerType={player.soccerPlayerType}
                  description={player.description}
                  whatsapp={player.whatsapp}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerFetch;
