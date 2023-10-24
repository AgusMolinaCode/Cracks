"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { UserIcon } from "./UserIcon";

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
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        console.error(
          `Ocurrió un error al eliminar el perfil con id ${profile.id}`
        );
      }
    }
  };

  const notifyDelete = () => toast.success("Usuario eliminado!");

  const notify = () =>
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <p>
              <span className="font-semibold">
                ¿Estás seguro de eliminar tu perfil?
              </span>
            </p>
          </div>
        </div>
        <div className="flex border-l rounded-tr-lg rounded-br-lg border-gray-200 items-center bg-red-300 justify-between">
          <button
            className="w-full p-2"
            onClick={() => {
              handleDelete();
              notifyDelete();
            }}
          >
            <p className="font-semibold text-gray-800">Confirmar</p>
          </button>
        </div>
      </div>
    ));
  return (
    <div>
      <Toaster />
      <Button
        color="danger"
        className="bg-white/75"
        variant="bordered"
        startContent={<UserIcon />}
        onClick={notify}
      >
        Delete user
      </Button>
    </div>
  );
};

export default DeleteButton;
