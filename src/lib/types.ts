export interface ITour {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: string;
  duration: string;
  image: string;
  included: string[];
  featured: boolean;
  itinerary: {
    day: number;
    description: string;
  }[];
}
