import React from "react";
import PlayerCard from "./PlayerCard";
import SelectPlayer from "./SelectPlayer";
import PlayerPagination from "./PlayerPagination";

interface Player {
  id: string;
  name: string;
  city: string;
  whatsapp: string;
  state: string;
  description: string;
  soccerPlayerType: string;
  profilePicture: string;
}

async function fetchPlayers() {
  const res = await fetch("http://localhost:3000/api/notes");
  const data = await res.json();
  return data;
}

async function Players() {
  const data = await fetchPlayers();
  console.log(data);

  return (
    <div className="bg-white border-t-2 border-b-2 pt-8 pb-8 border-blue-200">
      <SelectPlayer />
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-2 justify-items-center mx-auto md:px-28 lg:px-36 xl:px-56 2xl:px-80 px-3">
        {data.map((player: Player) => (
          <div key={player.id}>
            <PlayerCard
              name={player.name}
              city={player.city}
              profilePicture="/messi.png"
              whatsapp={player.whatsapp}
              description={player.description}
            />
          </div>
        ))}
      </div>
      <PlayerPagination />
    </div>
  );
}

export default Players;
