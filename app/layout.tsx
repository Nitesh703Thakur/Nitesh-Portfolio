import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nitesh Thakur — Developer",
  description: "Portfolio of Nitesh Thakur, developer and creative technologist.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}