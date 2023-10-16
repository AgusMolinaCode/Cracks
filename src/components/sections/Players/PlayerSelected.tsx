import React, { useState } from "react";
import { Select, SelectItem, SelectProps } from "@nextui-org/react";
import PlayerInterface from "@/libs/interfaces/Player";

interface Props {
  data: PlayerInterface[];
  onCityChange: (city: string | null) => void;
}

const PlayerSelected = ({ data, onCityChange }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);

  function handleCityChange(city: string | null) {
    setSelected(city);
    onCityChange(city);
  }

  const selectProps: SelectProps<PlayerInterface> = {
    label: "Seleccione una ciudad",
    className: "max-w-xs",
    size: "sm",
    children: [
      <SelectItem key={0} value="" onClick={() => handleCityChange(null)}>
        Todas las ciudades
      </SelectItem>,
      ...data.map((ciudad: PlayerInterface) => (
        <SelectItem
          key={ciudad.id}
          value={ciudad.city}
          onClick={() => handleCityChange(ciudad.city)}
        >
          {ciudad.city}
        </SelectItem>
      )),
    ],
  };

  return (
    <div className="bg-[#4169E1] max-w-[20rem] mx-auto flex items-center p-1  sm:p-2 border-2 border-black  rounded-2xl gap-3 mb-8">
      <Select {...selectProps} />
    </div>
  );
};

export default PlayerSelected;