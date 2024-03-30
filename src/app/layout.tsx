import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leaflet example",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
