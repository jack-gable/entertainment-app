import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { BookmarkProvider } from "@/context/BookmarkContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies4All",
  description: "Watch Movies and TV Shows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-background text-white flex flex-col sm:flex-row`}
      >
        <BookmarkProvider>
          <Navbar />
          {children}
        </BookmarkProvider>
      </body>
    </html>
  );
}
