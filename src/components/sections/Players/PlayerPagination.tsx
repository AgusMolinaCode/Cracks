'use client';
import React from "react";
import {Pagination} from "@nextui-org/react";

export default function PlayerPagination() {
  return (
    <Pagination total={4} initialPage={1} className="flex justify-center mx-auto pt-10"/>
  );
}
