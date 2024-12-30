import { tours } from "@/lib/tours";
import TourCard from "./TourCard";

export default function FeaturedTours() {
  return (
    <section id="tours" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours
            .filter(({ featured }) => featured)
            .map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
        </div>
      </div>
    </section>
  );
}
