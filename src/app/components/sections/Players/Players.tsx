import React from "react";
import PlayerFetch from "./PlayerFetch";

async function Players() {
  return (
    <div className="bg-white border-t-2 border-b-2 pt-8 pb-8 border-blue-200">
      <PlayerFetch />
    </div>
  );
}

export default Players;
