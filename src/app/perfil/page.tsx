import React from "react";
import CurrentUser from "@/components/sections/Perfil/CurrentUser";
import Image from "next/image";
import Inputs from "@/components/sections/Perfil/Inputs";

const MiPerfil = () => {
  return (
    <div className="px-3 lg:px-56 pt-10">
      <div>
        <CurrentUser />
        <h2 className="text-gray-600 font-semibold">
          Completa tu perfil, para que puedas encontrar partidos y jugadores.
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-10 my-24 items-center">
        <div>
          <Image
            src="/image-not-found.jpeg"
            alt="Picture of the author"
            width={300}
            height={300}
            className=" rounded-2xl border border-black"
          />
        </div>
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
