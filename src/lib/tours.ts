import { ITour } from "./types";

export const tours: ITour[] = [
  {
    id: "1",
    title: "Maasai Mara Experience",
    description: "Experience the magic of the City of Light",
    longDescription:
      "Crowned the 8th wonder of the world in 2012, the Maasai Mara wildebeest migration is a spectacular sight to behold bringing thousands of wildlife from the Serengeti plains to Maasai to Maasai mara every year.",
    price: "$ 3,500.00",
    duration: "5 days",
    image: "/masaimara-main.jpg?height=400&width=600",
    featured: true,
    included: [
      "Transport from the lodge and back using pop-up room safari tour van and back. To Upgrade to a land cruiser, an extra $ 300 per person will apply.",
      "Accommodation for 2 nights in a standard tent or cottage",
      "Meals on full board (3 meals for every night booked)",
      "Bottled drinking water",
      "Comprehensive game drives",
      "Services of a professional and English-speaking guide",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Transfer to Maasai Mara",
        activities: [
          {
            time: "Morning",
            description:
              "Arrive in Nairobi and meet your safari guide. Depart for Maasai Mara, enjoying scenic views of the Great Rift Valley.",
          },
          {
            time: "Afternoon",
            description: "Check-in at your lodge, enjoy lunch, and rest.",
          },
          {
            time: "Evening",
            description:
              "First game drive to spot wildlife. Dinner and overnight at your lodge.",
          },
        ],
      },
      {
        day: 2,
        title: "Full-Day Game Drive",
        activities: [
          {
            time: "Early Morning",
            description:
              "Sunrise game drive to spot predators. Return for breakfast or enjoy a bush breakfast.",
          },
          {
            time: "Mid-Morning to Afternoon",
            description:
              "Explore the Mara, visit the Mara River, and enjoy a packed lunch in the wild.",
          },
          {
            time: "Evening",
            description:
              "Another game drive followed by dinner and relaxation.",
          },
        ],
      },
      {
        day: 3,
        title: "Maasai Cultural Experience & Game Drives",
        activities: [
          {
            time: "Morning",
            description:
              "Optional hot air balloon safari or morning game drive.",
          },
          {
            time: "Afternoon",
            description:
              "Visit a Maasai village to learn about their culture and traditions.",
          },
          {
            time: "Evening",
            description:
              "Short game drive and a sundowner experience. Dinner and overnight at the lodge.",
          },
        ],
      },
      {
        day: 4,
        title: "Exploration of Lesser-Known Areas",
        activities: [
          {
            time: "Morning",
            description:
              "Game drive to explore less-visited areas of the Mara, such as the Mara Triangle.",
          },
          {
            time: "Afternoon",
            description:
              "Relax at the lodge or go on a guided bush walk with a Maasai guide.",
          },
          {
            time: "Evening",
            description:
              "Final evening game drive. Dinner and overnight at the lodge.",
          },
        ],
      },
      {
        day: 5,
        title: "Sunrise Game Drive and Departure",
        activities: [
          {
            time: "Early Morning",
            description:
              "Short sunrise game drive, followed by breakfast at the lodge.",
          },
          {
            time: "Late Morning",
            description:
              "Check out and begin your journey back to Nairobi. Option to stop at the Rift Valley viewpoint for photos.",
          },
          {
            time: "Afternoon",
            description: "Arrive in Nairobi and prepare for onward travel.",
          },
        ],
      },
    ],
  },
];
