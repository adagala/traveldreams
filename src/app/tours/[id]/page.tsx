import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { tours } from "@/lib/tours";

const getTourById = (id: string) => {
  return tours.find((tour) => tour.id === id);
};

export default async function TourDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tour = getTourById(id);

  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">{tour.title}</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src={tour.image}
                alt={tour.title}
                height={400}
                width={600}
                className="w-full h-auto rounded-lg shadow-lg mb-4"
              />
              <p className="text-xl mb-4">{tour.description}</p>
              <p className="text-gray-700 mb-6">{tour.longDescription}</p>
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <h2 className="text-2xl font-semibold mb-2">Tour Details</h2>
                <p className="mb-2">
                  <strong>Duration:</strong> {tour.duration}
                </p>
                <p className="mb-2">
                  <strong>Price:</strong> {tour.price} per person
                </p>
              </div>
              <Button size="lg">Book This Tour</Button>
            </div>
            <div>
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <h2 className="text-2xl font-semibold mb-4">
                  What&apos;s Included
                </h2>
                <ul className="list-disc list-inside">
                  {tour.included.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
                {tour.itinerary.map((item) => (
                  <div key={item.day} className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">
                      Day {item.day}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
