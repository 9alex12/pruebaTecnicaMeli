import React, { useState } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/styles.scss";

import SearchBar from "../components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meli Alex",
  description: "Prueba técnica mercado libre",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any"/>
      </head>
      <body className={inter.className}>
        <SearchBar />
        {children}
      </body>
    </html>
  );
}
