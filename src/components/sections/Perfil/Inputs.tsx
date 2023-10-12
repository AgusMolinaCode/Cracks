"use client";

import React from "react";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";

const animals = [
  { label: "Dog", value: "dog" },
  { label: "Cat", value: "cat" },
  { label: "Bear", value: "bear" },
  { label: "Fox", value: "fox" },
  { label: "Wolf", value: "wolf" },
];

export default function Inputs() {
  return (
    <div className="flex flex-col gap-4 2xl:w-[550px] bg-[#f4ebc5]/50 p-4 rounded-3xl border border-black">
      <div className="flex gap-4">
        <Input
          type="text"
          variant={"underlined"}
          label="Nombre y Apellido"
          size="lg"
          required
          className=""
        />
        <Input
          type="number"
          variant={"underlined"}
          label="Whatsapp"
          size="lg"
          required
        />
      </div>
      <div className="flex gap-4">
        <Input
          type="text"
          variant={"underlined"}
          label="Ciudad"
          size="lg"
          required
        />
        <Input
          type="text"
          variant={"underlined"}
          label="Provincia"
          size="lg"
          required
        />
      </div>
      <Textarea
        variant="underlined"
        label="Description"
        labelPlacement="outside"
        placeholder="Enter your description"
        className="col-span-12 md:col-span-6 mb-6 md:mb-0"
      />
      <div className="flex flex-col gap-4 ">
        <Select
          items={animals}
          label="Favorite Animal"
          placeholder="Select an animal"
          className=""
        >
          {(animal) => (
            <SelectItem key={animal.value}>{animal.label}</SelectItem>
          )}
        </Select>
        <input
          type="file"
          className=""
          placeholder="Subir foto"
          accept=".jpg, .jpeg, .png"
        />
      </div>
    </div>
  );
}
