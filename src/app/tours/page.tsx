import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { tours } from "@/lib/tours";
import TourCard from "@/components/TourCard";

// const tours = [
//   {
//     id: 1,
//     title: "Naivasha Getaway",
//     description: "Experience the magic of the Rift Valley",
//     price: "$1299",
//     duration: "5 days",
//     image: "/naivasha-hotels.jpg?height=200&width=300",
//   },
//   {
//     id: 2,
//     title: "Salt Lick Train Escape",
//     description: "Immerse yourself in the coastal paradise",
//     price: "$1599",
//     duration: "7 days",
//     image: "/salt-lick-safari-lodge-train.jpg?height=200&width=300",
//   },
//   {
//     id: 3,
//     title: "Mt Kenya Hotels and Lodges",
//     description: "Relax on lush landscapes at the slopes of Mt Kenya",
//     price: "$999",
//     duration: "6 days",
//     image:
//       "/mt-kenya-hotels-and-lodges-christmas-rates.jpg?height=200&width=300",
//   },
//   {
//     id: 4,
//     title: "Neptune Village Beach Resort & Spa",
//     description: "Discover the Big Apple's iconic landmarks",
//     price: "$1499",
//     duration: "5 days",
//     image: "/neptunevillage.jpg?height=200&width=300",
//   },
//   {
//     id: 5,
//     title: "Maasai Mara Package",
//     description: "Witness the wonders of wildlife in their natural habitat",
//     price: "$2499",
//     duration: "8 days",
//     image: "/masaimara-main.jpg?height=200&width=300",
//   },
//   {
//     id: 6,
//     title: "Amboseli Expedition",
//     description: "Visit the land of giants and majestic views",
//     price: "$2499",
//     duration: "6 days",
//     image: "/amboseli-national-park.jpg?height=200&width=300",
//   },
// ];

export default function ToursPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">
              Our Tour Packages
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
