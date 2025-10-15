import AdventureTours from "@/components/adventure";
import Banner1 from "@/components/banner1";
import Banner2 from "@/components/banner2";
import HeroSection from "@/components/herosection";
import ImageGallery from "@/components/imageGalley";
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
      <AdventureTours/>
    <ToursSlider />
    <WhyChooseUs />
    <TestimonialSlider />
    <Quote />
    {/* <WhatsAppButton /> */}
    </div>
  );
}