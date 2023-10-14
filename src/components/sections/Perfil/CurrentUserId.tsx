"use client";
import { useAuth } from "@clerk/nextjs";

export default function CurrentUserId() {
  const { userId } = useAuth();

  return { userId };
}
