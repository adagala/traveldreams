import { ITour } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function TourCard({ tour }: { tour: ITour }) {
  return (
    <Card key={tour.id}>
      <CardHeader>
        <CardTitle>{tour.title}</CardTitle>
        <CardDescription>{tour.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={tour.image}
          alt={tour.title}
          height={200}
          width={200}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <p className="text-sm text-gray-600">Duration: {tour.duration}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-lg font-bold">{tour.price}</span>
        <Link href={`/tours/${tour.id}`}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
