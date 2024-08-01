"use client";
import { useAutotyper } from "react-use-autotyper";
import Image from "next/image";
import Projects from "./components/Projects";
import { Metadata } from "next";
import { Nav } from "./components/Nav";

export default function Home() {
  const text = useAutotyper([
    "Web Developer",
    "Tech Enthusiast",
    "Teacher",
    "Student",
  ]);
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-start p-4 pt-24 md:p-24 w-full max-w-[1800px]">
        <h1 className="text-4xl font-bold">Matteo Ramazzini</h1>
        <h2>{text}</h2>
        <div className="divider" />
        <Projects />
      </main>
    </>
  );
}
