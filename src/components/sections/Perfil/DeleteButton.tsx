'use client';
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.error("Usuario eliminado!");

interface Profile {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  whatsapp: string;
  city: string;
  clerkId: string;
  description: string;
  soccerPlayerType: string;
  profilePicture: string;
}

const DeleteButton = () => {
  const { userId } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch(`/api/notes`);
      const data = await res.json();
      const profile = data.find((profile: any) => profile.clerkId === userId);
      setProfile(profile);
    };
    fetchProfile();
  }, [userId]);

  const handleDelete = async () => {
    if (profile) {
      const res = await fetch(`/api/notes/${profile.id}`, { method: "DELETE" });
      if (res.ok) {
        router.push("/");
        notify();
      } else {
        console.error(
          `Ocurrió un error al eliminar el perfil con id ${profile.id}`
        );
      }
    }
  };

  return (
    <div>
      <Button
        className="w-full"
        color="danger"
        onClick={handleDelete}
        isDisabled={!profile}
      >
        <p className="font-semibold text-black">Eliminar Perfil</p>
      </Button>
    </div>
  );
};

export default DeleteButton;