"use client";
import React, { useState } from "react";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import CurrentUserId from "./CurrentUserId";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import ciudades from "./Ciudades";

const posiciones = [
  { label: "Delantero", value: "delantero" },
  { label: "Mediocampista", value: "mediocampista" },
  { label: "Defensor", value: "defensor" },
  { label: "Arquero", value: "arquero" },
];

const notify = () => toast.success("Formulario enviado!");

export default function Inputs() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [soccerPlayerType, setSoccerPlayerType] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  console.log(city);

  const router = useRouter();

  const isFormValid =
    name !== "" &&
    city !== "" &&
    description !== "" &&
    soccerPlayerType !== "" &&
    whatsapp !== "";

  return (
    <div className="flex flex-col gap-4 w-[320px] sm:w-full 2xl:w-[550px] bg-[#f4ebc5]/60 p-4 rounded-3xl border border-black">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (!isFormValid) {
            return;
          }
          const res = await fetch("/api/notes", {
            method: "POST",
            body: JSON.stringify({
              name,
              city,
              description,
              soccerPlayerType,
              profilePicture,
              whatsapp,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          setTimeout(() => {
            router.push("/");
          }, 1500);
        }}
      >
        <div className="flex gap-4">
          <Input
            type="text"
            variant={"underlined"}
            label="Nombre y Apellido"
            size="lg"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            variant={"underlined"}
            label="Whatsapp"
            size="lg"
            required
            onChange={(e) => setWhatsapp(e.target.value)}
          />
        </div>
        <Textarea
          variant="underlined"
          label="Description"
          labelPlacement="outside"
          placeholder="Enter your description"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0 py-2"
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex gap-4">
          <Select
            items={ciudades}
            variant="faded"
            label="Tu ciudad"
            placeholder="Ciudad"
            className="py-4"
            onChange={(e) => setCity(e.target.value)}
          >
            {(ciudad) => (
              <SelectItem key={ciudad.id}>{ciudad.label}</SelectItem>
            )}
          </Select>
        </div>
        <div className="flex flex-col gap-4">
          <Select
            items={posiciones}
            variant="faded"
            label="Tu posicion en la cancha"
            placeholder="Posicion"
            className="py-4"
            onChange={(e) => setSoccerPlayerType(e.target.value)}
          >
            {(posicion) => (
              <SelectItem key={posicion.value}>{posicion.label}</SelectItem>
            )}
          </Select>
          <input
            type="file"
            className=""
            placeholder="Subir foto"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => setProfilePicture(e.target.value)}
          />
          <Button
            type="submit"
            className="bg-[#f4ebc5] text-black border-2 w-[18rem] flex justify-center mx-auto border-black"
            isDisabled={!isFormValid}
            onClick={notify}
          >
            Enviar
          </Button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
