import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const {
    email,
    name,
    city,
    state,
    description,
    soccerPlayerType,
    profilePicture,
  } = await request.json();

  const newUser = await prisma.user.create({
    data: {
      email,
      name,
      city,
      state,
      description,
      soccerPlayerType,
      profilePicture,
    },
  });

  return NextResponse.json(newUser);
}
