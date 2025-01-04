import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/utils/cartContext";

const redHat = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product List App",
  description: "Rendered from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHat.variable}  antialiased prose prose-a:no-underline prose-headings:m-0`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
