// app/layout.js
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title:
    "Paradise Bliss Tours Pvt. Ltd | Best Domestic & International Tour Packages from India",
  description:
    "Discover the world with Paradise Bliss Tours Pvt. Ltd — your trusted travel company in India for customized domestic & international holiday packages. Explore, relax & create memories today!",
  keywords:
    "Paradise Bliss Tours, travel company India, holiday packages, international tours, domestic tours, customized tours, honeymoon packages, travel agency India",
  icons: {
    icon: "/img/logo2.jpg", 
  },
  openGraph: {
    title:
      "Paradise Bliss Tours Pvt. Ltd | Best Domestic & International Tour Packages from India",
    description:
      "Discover the world with Paradise Bliss Tours Pvt. Ltd — your trusted travel company in India for customized domestic & international holiday packages.",
    url: "https://paradiseblisstours.com",
    siteName: "Paradise Bliss Tours Pvt. Ltd",
    images: [
      {
        url: "https://paradiseblisstours.com/img/logo2.jpg",
        width: 1200,
        height: 630,
        alt: "Paradise Bliss Tours — Explore the World",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
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
