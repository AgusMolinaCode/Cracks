import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

interface Props {
  name: string;
  city: string;
  description: string;
  soccerPlayerType: string;
  profilePicture: string;
  whatsapp: string;
  selectedAvatar: number | null;
  id: number;
  OnClick: () => void;
}

const EditButton = ({
  name,
  city,
  description,
  soccerPlayerType,
  profilePicture,
  whatsapp,
  selectedAvatar,
  id,
  OnClick,
}: Props) => {
  //AQUI EMPIEZA CODIGO NUEVO

  const { userId } = useAuth();
  const [profile, setProfile] = useState<Props | null>(null);

  const router = useRouter();

  const isFormValid =
    name !== "" &&
    city !== "" &&
    description !== "" &&
    soccerPlayerType !== "" &&
    whatsapp !== "" &&
    selectedAvatar !== null &&
    profilePicture !== "";

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch(`/api/notes`);
      const data = await res.json();
      const profile = data.find((profile: any) => profile.clerkId === userId);
      setProfile(profile);
    };
    fetchProfile();
  }, [userId]);

  const handleEdit = async () => {
    if (profile) {
      const res = await fetch(`/api/notes/${profile.id}`, {
        method: "PUT",
        body: JSON.stringify({
          name,
          city,
          description,
          soccerPlayerType,
          profilePicture,
          whatsapp,
          selectedAvatar,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      OnClick();
      if (res.ok) {
        router.push("/");
      } else {
        console.error(
          `Ocurrió un error al editar el perfil con id ${profile.id}`
        );
      }
    }
  };

  return (
    <Button
      className="bg-[#f4ebc5] text-black border-2 w-[18rem] flex justify-center mx-auto border-black"
      onClick={handleEdit}
      isDisabled={!isFormValid}
    >
      Editar perfil
    </Button>
  );
};

export default EditButton;
