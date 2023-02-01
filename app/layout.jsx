"use client";
import "./globals.css";
import { Bebas_Neue } from "@next/font/google";
import { Navbar } from "../components";
import { Suspense } from "react";
import Loading from "./loading";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${bebas.className} bg-primary`}>
        <Navbar />

        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
