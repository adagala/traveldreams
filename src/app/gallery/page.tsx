import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/amboseli-national-park.jpg?height=300&width=400",
    alt: "Amboseli National Park",
  },
  {
    id: 2,
    src: "/masaimara-main.jpg?height=300&width=400",
    alt: "Maasai Mara",
  },
  {
    id: 3,
    src: "/zanzibar-island.jpg?height=300&width=400",
    alt: "Zanzibar Island",
  },
  {
    id: 4,
    src: "/taita-hills-safari-resort-spa.jpg?height=300&width=400",
    alt: "Taita Hills Safari Resort Spa",
  },
  {
    id: 5,
    src: "/neptunevillage.jpg?height=300&width=400",
    alt: "Neptune Village",
  },
  {
    id: 6,
    src: "/salt-lick-safari-lodge-train.jpg?height=300&width=400",
    alt: "Salt Lick Safari Lodge",
  },
  {
    id: 7,
    src: "/naivasha-hotels.jpg?height=300&width=400",
    alt: "Naivasha Hotels",
  },
  {
    id: 8,
    src: "/mombasa-hotels.jpg?height=300&width=400",
    alt: "Mombasa Hotels",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">
              Travel Gallery
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((image) => (
                <div key={image.id} className="relative group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={200}
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                    <p className="text-white text-xl font-semibold">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
