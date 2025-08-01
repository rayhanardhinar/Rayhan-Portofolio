import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Provider } from "@/components/ui/provider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rayhan Portofolio",
  description: "Personal Portofolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased bg-primary-dark text-white overflow-x-hidden`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
