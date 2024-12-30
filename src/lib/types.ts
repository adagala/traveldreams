interface IItineraryActivity {
  time: string;
  description: string;
}

interface IItinerary {
  day: number;
  title: string;
  activities: IItineraryActivity[];
}

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
  itinerary: IItinerary[];
}
