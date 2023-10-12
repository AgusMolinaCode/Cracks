import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ message: "Obteniendo Jugador..." });
}

export function DELETE() {
  return NextResponse.json({ message: "Eliminando Jugador..." });
}

export function PUT() {
  return NextResponse.json({ message: "Actualizando Jugador..." });
}