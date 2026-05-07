import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Projeto login malena",
  description: "Meu primeiro projeto back end com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
