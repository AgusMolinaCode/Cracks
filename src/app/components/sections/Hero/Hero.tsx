import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-center px-3 pt-5">
      <div>
        <h1 className="text-2xl sm:text-4xl text-center font-bold max-w-lg">
          Jugar a la pelota nunca fue tan fácil de <span className="text-[#4169E1]">organizar</span>!
        </h1>
        <h2 className="text-md sm:text-xl font-semibold max-w-md pt-5 text-gray-500 text-center sm:text-left">
          * Olvídate de las preocupaciones para formar equipos,encuentra jugadores
          en tu ciudad y arma tu partido.
        </h2>
      </div>
      <div>
        <Image
          src="/messi.png"
          width={500}
          height={500}
          alt="Imagen Messi Header"
          className="pt-5 sm:pt-0"
        />
      </div>
    </div>
  );
};

export default Hero;
