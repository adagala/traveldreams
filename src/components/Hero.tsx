import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/masaimara-main.jpg?height=600&width=1200')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Discover the World with Us</h1>
        <p className="text-xl mb-8">
          Unforgettable adventures await. Start your journey today!
        </p>
        <Link href="/tours">
          <Button size="lg">Explore Tours</Button>
        </Link>
      </div>
    </section>
  );
}
