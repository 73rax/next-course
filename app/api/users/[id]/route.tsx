import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });
  // Fetch data from a db

  // If not found, return 404 error
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Else return data
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  // Validate request body
  const validation = schema.safeParse(body);

  // If body is invalied, return 400
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // Fetch the user with the given id

  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  // If doesn't exist, return 404
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Update the user
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  // Return the updated User
  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Fetch user from db
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });
  // If not found, return 404
  if (!user)
    return NextResponse.json({ error: "User not found!" }, { status: 404 });

  // Delete the user
  const deletedUser = await prisma.user.delete({
    where: { id: user.id },
  });
  // Return 200
  return NextResponse.json(deletedUser);
}
