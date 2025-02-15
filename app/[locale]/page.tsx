"use client";

import { useUser } from "@/context/UserContext";

export default function Home() {
  const { profile, error } = useUser();

  return (
    <div>
      <p>{profile?.email}</p>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
}
