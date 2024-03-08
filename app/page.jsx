'use client'
import { Welcome } from "../components/heros/Welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Welcome />
    </main>
  );
}
