import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "PC Performance Lab",
  description: "Build, test, and rate PC configurations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />

        <main id="main-content" className="app-main" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}
