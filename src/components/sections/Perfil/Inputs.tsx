"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import ciudades from "./Data/Ciudades";
import Posiciones from "./Data/Posiciones";
import AvatarSelector from "./AvatarSelector";

const notify = () => toast.success("Formulario enviado!");

export default function Inputs() {
  const { userId } = useAuth();

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [soccerPlayerType, setSoccerPlayerType] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [clerkId, setClerkId] = useState(userId);
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);
  const [hasProfile, setHasProfile] = useState(false);

  const router = useRouter();

  const isFormValid =
    name !== "" &&
    city !== "" &&
    description !== "" &&
    soccerPlayerType !== "" &&
    whatsapp !== "";

  const handleAvatarSelected = (avatar: any) => {
    setSelectedAvatar(avatar.id);
    setProfilePicture(avatar.value);
  };

  useEffect(() => {
    console.log(`Consultando perfiles`);
    const fetchProfiles = async () => {
      const res = await fetch(`/api/notes`);
      const data = await res.json();
      const hasProfile = data.some((profile: any) => profile.clerkId === userId);
      setHasProfile(hasProfile);
      console.log(`El usuario ${clerkId} ${hasProfile ? "ya tiene" : "no tiene"} un perfil`);
    };
    fetchProfiles();
  }, [clerkId]);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-4  bg-[#f4ebc5]/60 p-4 px-2 rounded-3xl border border-black w-full">
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
                selectedAvatar,
                clerkId,
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
          <h2 className="font-semibold text-gray-500 sm:text-2xl pb-2">
            Selecciona tu avatar
          </h2>
          <AvatarSelector
            onAvatarSelected={handleAvatarSelected}
            selectedAvatar={selectedAvatar}
          />
          <div className="flex flex-wrap sm:gap-4">
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
          <div className="flex gap-2 ">
            <Select
              items={ciudades}
              variant="faded"
              label="Tu ciudad"
              placeholder="Ciudad"
              className="py-4"
              onChange={(e) => setCity(e.target.value)}
            >
              {(ciudad) => (
                <SelectItem key={ciudad.value}>{ciudad.label}</SelectItem>
              )}
            </Select>
            <Select
              items={Posiciones}
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
          </div>
          <div className="">
            <Button
              type="submit"
              className="bg-[#f4ebc5] text-black border-2 w-[18rem] flex justify-center mx-auto border-black"
              isDisabled={!isFormValid || hasProfile}
              onClick={notify}
            >
              {hasProfile ? "Ya tienes un perfil" : "Crear perfil"}
            </Button>
          </div>
        </form>
        <Toaster />
      </div>
    </div>
  );
}
