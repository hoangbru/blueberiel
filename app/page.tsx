"use client";

import { useUser } from "@/context/UserContext";

export default function Home() {
  const { profile} = useUser();

  return (
    <div>
      <p>{profile?.email}</p>
    </div>
  );
}
