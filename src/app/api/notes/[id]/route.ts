import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const note = await prisma.user.findFirst({
      where: {
        id: Number(params.id),
      },
    });
    if (!note) {
      return NextResponse.json({
        message: "No se encontró el jugador",
      });
    }
    return NextResponse.json(note);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
  return NextResponse.json({ message: "Obteniendo Jugador..." });
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const deletePlayer = await prisma.user.delete({
      where: {
        id: Number(params.id),
      },
    });
    if (!deletePlayer) {
      return NextResponse.json({
        message: "No se encontró el jugador",
      });
    }
    return NextResponse.json(deletePlayer);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "No se encontró el jugador",
          },
          {
            status: 404,
          }
        );
      }
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const {
      whatsapp,
      name,
      city,
      state,
      description,
      soccerPlayerType,
      profilePicture,
    } = await request.json();

    const updateUser = await prisma.user.update({
      where: {
        id: Number(params.id),
      },
      data: {
        whatsapp,
        name,
        city,
        state,
        description,
        soccerPlayerType,
        profilePicture,
      },
    });
    return NextResponse.json(updateUser);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "No se encontró el jugador",
          },
          {
            status: 404,
          }
        );
      }
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }

  return NextResponse.json({ message: "Actualizando Jugador..." });
}
