"use client";

import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();

  return <div>Bem vindo {user?.firstName}</div>;
}
