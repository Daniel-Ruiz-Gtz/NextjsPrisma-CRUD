import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NotesProvider } from "@/context/NoteContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs CRUD",
  description: "Nextjs and Prisma ORM since 0 using Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NotesProvider>{children}</NotesProvider>
      </body>
    </html>
  );
}
