import type { Metadata } from "next";
import { inter } from "@/config/fonts";

import "./globals.css";
import { Providers } from "@/components";

export const metadata: Metadata = {
  title: {
    template: "%s - FR | Ropa",
    default: "Home - FR | Ropa",
  },
  description: "Tienda de ropa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ backgroundColor: '#FFF9FB' }}>
      
      <body className={inter.className} >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
