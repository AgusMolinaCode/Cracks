"use client";
import React from "react";
import { Select, SelectItem, Button } from "@nextui-org/react";

const animals = [
  { label: "Cat", value: "cat" },
  { label: "Dog", value: "dog" },
  { label: "Elephant", value: "elephant" },
  { label: "Panda", value: "panda" },
  { label: "Penguin", value: "penguin" },
  { label: "Rabbit", value: "rabbit" },
  { label: "Snake", value: "snake" },
  { label: "Tiger", value: "tiger" },
  { label: "Wolf", value: "wolf" },
];

export default function SelectPlayer() {
  return (
    <div className="bg-[#4169E1] max-w-md flex items-center justify-center p-2 mx-auto rounded-2xl gap-3 mb-8">
      <Select label="Seleccione una ciudad" className="max-w-xs" size="sm">
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
      <Button
        className="text-md text-white bg-black/20"
        variant="flat"
        color="default"
        radius="lg"
        size="lg"
      >
        BUSCAR
      </Button>
    </div>
  );
}
