"use client";

//components
import { Header } from "./staticComponents/header";
import { StaticBody } from "./staticComponents/staticBody";

export default function Home() {
  return (
    <main className="flex flex-col min-w-fit p-5">
      <Header />
      <StaticBody />
    </main>
  );
}
