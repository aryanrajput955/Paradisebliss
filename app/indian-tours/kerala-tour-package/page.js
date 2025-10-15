import React from 'react';
import TourCard from '../../../components/template';
import Heading from './heding';

export default function Page() {
const tours = [
  { title: "Kerala Bliss Getaway", days: "5 Nights 6 Days", originalPrice: "35000", price: "31000", discount: "9%", itinerary: "Kochi → Munnar → Thekkady → Alleppey", type: "Group Tour", isRecommended: true, image: "/img/kerala2.jpg", rating: 4.6, link: "/trip-packages/kerala-bliss-getaway/" },
  { title: "Kerala Adventure with Kanyakumari", days: "7 Nights 8 Days", originalPrice: "60000", price: "52000", discount: "10%", itinerary: "Kochi → Munnar → Thekkady → Alleppey → Kanyakumari", type: "Group Tour", isRecommended: false, image: "/img/kerla.jpg", rating: 4.5, link: "/trip-packages/kerala-kanyakumari-adventure/" },
  { title: "Festive Kerala Delight", days: "7 Nights 8 Days", originalPrice: "65000", price: "50800", discount: "20%", itinerary: "Kochi → Munnar → Thekkady → Alleppey", type: "Group Tour", isRecommended: false, image: "/img/kerala2.jpg", rating: 4.7, link: "/trip-packages/festive-kerala-delight/" }
];

  return (
    <>
      <Heading />
      <div className="container mx-auto p-4">
        {tours.map((tour, index) => (
          <TourCard key={index} {...tour} />
        ))}
      </div>
    </>
  );
}