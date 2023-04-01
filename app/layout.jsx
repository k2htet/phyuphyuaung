"use client";
import "./globals.css";
import { Orbitron, Gluten } from "next/font/google";
import { Navbar } from "../components";
import { Suspense } from "react";
import Loading from "./loading";

const orbit = Gluten({
  display: "swap",
  variable: "--font-orbit",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbit.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-primary font-orbit">
        <Navbar />

        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
