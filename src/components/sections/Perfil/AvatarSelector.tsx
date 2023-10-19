'use client';
import React, { useState } from "react";
import { Avatar } from "@nextui-org/react";
import Avatars from "./Data/Avatar";

type AvatarSelectorProps = {
  onAvatarSelected: (avatar: any) => void;
  selectedAvatar: number | null;
};

export default function AvatarSelector({
  onAvatarSelected,
  selectedAvatar,
}: AvatarSelectorProps) {
  const handleAvatarClick = (avatar: any) => {
    onAvatarSelected(avatar);
  };

  return (
    <div className="flex flex-wrap gap-6 p-3 justify-center mx-auto">
      {Avatars.map((avatar) => (
        <div key={avatar.id} className="">
          <Avatar
            src={avatar.value}
            alt="soccer"
            className={`w-[80px] h-[80px] transform transition-all duration-500 cursor-pointer ${
              selectedAvatar === avatar.id ? "scale-125" : ""
            }`}
            color={selectedAvatar === avatar.id ? "primary" : "default"}
            isBordered
            onClick={() => handleAvatarClick(avatar)}
          />
        </div>
      ))}
    </div>
  );
}