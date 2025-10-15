"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "./globals.css"; // Import global styles if needed
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Scroll to top on route change

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
