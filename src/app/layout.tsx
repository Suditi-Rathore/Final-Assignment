import Navbar from "@/components/navbar/index";
import "./globals.css";
import { ContextProvider } from "@/context/context";
import type { Metadata } from "next";

export const metadata:Metadata={
  title:"Final Assignment",
  manifest:"/manifest.json",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ContextProvider>
      <head>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
            />
          </head>
        <body>
          <Navbar />
          {children}
        </body>
      </ContextProvider>
    </html>
  );
}
