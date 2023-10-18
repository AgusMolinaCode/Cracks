import React from "react";
import CurrentUser from "@/components/sections/Perfil/CurrentUser";
import Image from "next/image";
import Inputs from "@/components/sections/Perfil/Inputs";

const MiPerfil = () => {
  return (
    <div className="px-3 pt-10">
      <div className="px-2 sm:px-24">
        <CurrentUser />
        <h2 className="text-gray-600 font-semibold">
          Completa tu perfil, para que puedas encontrar partidos y jugadores.
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-10 my-8 items-center">
        <div>
          <Inputs />
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default MiPerfil;
