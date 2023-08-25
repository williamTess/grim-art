import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { SearchBar } from "../../components/AppBar";
import CategoryProvider from "@/context/app.context";
import Footer from "/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grim Artist shop page",
  description: "Page to sell print painted by GrimArtist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CategoryProvider>
        <html lang="en">
          <body className={inter.className}>
            <SearchBar />
            {children}
            <Footer />
          </body>
        </html>
      </CategoryProvider>
    </ClerkProvider>
  );
}
