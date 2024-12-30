import { ITour } from "./types";

export const tours: ITour[] = [
  {
    id: '1',
    title: "Maasai Mara Experience",
    description: "Experience the magic of the City of Light",
    longDescription:
      "Immerse yourself in the romantic atmosphere of Paris. Visit iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Stroll along the charming streets of Montmartre, indulge in delicious French cuisine, and cruise down the Seine River. This 5-day adventure is perfect for couples, art enthusiasts, and anyone who wants to experience the beauty and culture of one of the world's most beloved cities.",
    price: "$1299",
    duration: "5 days",
    image: "/masaimara-main.jpg?height=400&width=600",
    featured: true,
    included: [
      "Round-trip airfare",
      "4 nights accommodation in a 4-star hotel",
      "Daily breakfast",
      "Guided tour of the Louvre",
      "Seine River cruise",
      "Skip-the-line tickets to the Eiffel Tower",
    ],
    itinerary: [
      { day: 1, description: "Arrival in Paris, welcome dinner" },
      { day: 2, description: "Louvre Museum tour, afternoon at leisure" },
      { day: 3, description: "Eiffel Tower visit, Seine River cruise" },
      {
        day: 4,
        description: "Montmartre walking tour, evening cabaret show",
      },
      { day: 5, description: "Free morning for shopping, departure" },
    ],
  },
];
