import Image from 'next/image';
import AdventureTours from "@/components/adventure";
import Banner1 from "@/components/banner1";

import HolidaySaleBanner from "@/components/christmas";
import DVDiaries from "@/components/customer-gallery";
import HeroSection from "@/components/herosection";
import ImageGallery from "@/components/imageGalley";
import DomesticGetaways from "@/components/international-packages";
import InternationalSlider from "@/components/internationalbanner";
import Quote from "@/components/quote";
import TestimonialSlider from "@/components/testimonials";
import ToursSlider from "@/components/tourSlider";
import VideoSlider from "@/components/videos";
// import WhatsAppButton from "@/components/WhatsAppButton";
import WhyChooseUs from "@/components/whychooseus";

export const metadata = {
  title: "Paradise Bliss Tours - Explore India & International Trips",
  description: "Discover handpicked tour packages in India & abroad. Enjoy comfort, adventure, and memorable journeys with Paradise Bliss Tours.",
  keywords: "travel agency India, holiday packages India, international tours, honeymoon packages",
  openGraph: {
    title: "Paradise Bliss Tours - Explore India & International Trips",
    description: "Discover handpicked tour packages in India & abroad. Enjoy comfort, adventure, and memorable journeys with Paradise Bliss Tours.",
    type: "website",
    locale: "en_US",
  },
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ImageGallery />
      <Banner1 />
      <VideoSlider />

      <HolidaySaleBanner />
      <AdventureTours/>
      <DomesticGetaways />
      <InternationalSlider />
    <ToursSlider />
    <WhyChooseUs />
    <DVDiaries />
    <TestimonialSlider />
    <Quote />
    {/* <WhatsAppButton /> */}
    </div>
  );
}