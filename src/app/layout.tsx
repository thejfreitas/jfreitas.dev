import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@app/components/Footer";
import "./globals.css";

const poppins = Poppins({
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Jose de Freitas Jr. | Software Engineer",
  description:
    "I am a Software Engineer with a passion for building things with code.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins} h-full antialiased`}>
      <body className="body-general">
        {children}
        <Footer />
      </body>
    </html>
  );
}
