import AdventureTours from "@/components/adventure";
import Banner1 from "@/components/banner1";
import Banner2 from "@/components/banner2";
import HolidaySaleBanner from "@/components/christmas";
import HeroSection from "@/components/herosection";
import ImageGallery from "@/components/imageGalley";
import InternationalSlider from "@/components/internationalbanner";
import Quote from "@/components/quote";
import TestimonialSlider from "@/components/testimonials";
import ToursSlider from "@/components/tourSlider";
import VideoSlider from "@/components/videos";
// import WhatsAppButton from "@/components/WhatsAppButton";
import WhyChooseUs from "@/components/whychooseus";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <ImageGallery />
      <Banner1 />
      <VideoSlider />
      <Banner2 />
      <HolidaySaleBanner />
      <AdventureTours/>
      <InternationalSlider />
    <ToursSlider />
    <WhyChooseUs />
    <TestimonialSlider />
    <Quote />
    {/* <WhatsAppButton /> */}
    </div>
  );
}