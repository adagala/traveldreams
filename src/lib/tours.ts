import { ITour } from "./types";

export const tours: ITour[] = [
  {
    id: "1",
    title: "Maasai Mara Experience",
    description:
      "Witness the wonders of wildlife in their natural habitat at the Mara",
    longDescription:
      "Crowned the 8th wonder of the world in 2012, the Maasai Mara wildebeest migration is a spectacular sight to behold bringing thousands of wildlife from the Serengeti plains to Maasai to Maasai mara every year.",
    price: "$3,500.00",
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
  {
    id: "2",
    title: "Amboseli Safari Adventure",
    description:
      "Experience breathtaking views of Mt. Kilimanjaro and incredible wildlife encounters.",
    longDescription:
      "Nestled at the foot of Africa's highest peak, Mt. Kilimanjaro, Amboseli National Park offers stunning landscapes, iconic elephant herds, and opportunities to experience a rich ecosystem of wildlife in their natural habitat.",
    price: "$3,300.00",
    duration: "5 days",
    image: "/amboseli-national-park.jpg?height=200&width=300",
    featured: true,
    included: [
      "Transport from Nairobi and back using a pop-up roof safari van. Upgrade to a land cruiser for an additional $ 250 per person.",
      "Accommodation for 4 nights in a standard tented camp or lodge",
      "Meals on full board (3 meals for each night booked)",
      "Bottled drinking water",
      "Comprehensive game drives",
      "Services of a professional English-speaking guide",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Transfer to Amboseli",
        activities: [
          {
            time: "Morning",
            description:
              "Depart from Nairobi and drive to Amboseli National Park, passing through the scenic Kenyan countryside.",
          },
          {
            time: "Afternoon",
            description:
              "Arrive at your lodge/camp, check in, and enjoy lunch with a view of Mt. Kilimanjaro.",
          },
          {
            time: "Evening",
            description:
              "Go for your first game drive and marvel at Amboseli's famous elephant herds. Return for dinner and overnight.",
          },
        ],
      },
      {
        day: 2,
        title: "Full-Day Game Drive in Amboseli",
        activities: [
          {
            time: "Early Morning",
            description:
              "Begin the day with a sunrise game drive, capturing the wildlife against the backdrop of Mt. Kilimanjaro.",
          },
          {
            time: "Mid-Morning to Afternoon",
            description:
              "Explore Amboseli's swamps, grasslands, and dry lakebeds, spotting elephants, lions, cheetahs, and flamingos. Enjoy a packed picnic lunch in the park.",
          },
          {
            time: "Evening",
            description:
              "Relax at your lodge after a short sunset drive. Dinner and storytelling around the campfire.",
          },
        ],
      },
      {
        day: 3,
        title: "Cultural Experience and Scenic Exploration",
        activities: [
          {
            time: "Morning",
            description:
              "Visit a Maasai village to learn about their culture, traditions, and way of life.",
          },
          {
            time: "Afternoon",
            description:
              "Return to the park for another game drive or relax at your lodge with optional spa services.",
          },
          {
            time: "Evening",
            description:
              "Enjoy a sundowner with spectacular views of Kilimanjaro.",
          },
        ],
      },
      {
        day: 4,
        title: "Bird Watching and Relaxation",
        activities: [
          {
            time: "Morning",
            description:
              "Embark on a bird-watching safari, spotting pelicans, kingfishers, and other species in the park’s wetlands.",
          },
          {
            time: "Afternoon",
            description:
              "Relax at the lodge or take a guided nature walk to learn about the local flora and fauna.",
          },
          {
            time: "Evening",
            description:
              "Final evening game drive to spot nocturnal animals. Dinner and overnight at the lodge.",
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
              "Short sunrise game drive for last glimpses of Amboseli's wildlife.",
          },
          {
            time: "Late Morning",
            description:
              "Check out and drive back to Nairobi, stopping for scenic photo opportunities along the way.",
          },
          {
            time: "Afternoon",
            description:
              "Arrive in Nairobi and transfer to the airport or your preferred location.",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Salt Lick Game Sanctuary",
    description:
      "A unique safari experience blending scenic train travel and wildlife adventures at the iconic Salt Lick Lodge.",
    longDescription:
      "Embark on a thrilling journey via the Standard Gauge Railway (SGR) from Nairobi to Tsavo. Stay at the iconic Salt Lick Lodge, renowned for its elevated rooms overlooking a waterhole frequented by wildlife, offering unmatched close encounters with nature.",
    price: "$4,000.00",
    duration: "3 days",
    image: "/salt-lick-safari-lodge-train.jpg?height=200&width=300",
    featured: true,
    included: [
      "Round-trip train tickets from Nairobi to Voi on the SGR Madaraka Express.",
      "Transfers between Voi station and Salt Lick Lodge.",
      "Accommodation for 2 nights at Salt Lick Lodge.",
      "Meals on full board (3 meals daily).",
      "Comprehensive game drives in Taita Hills Wildlife Sanctuary.",
      "Bottled drinking water during game drives.",
      "Services of a professional and English-speaking guide.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Train Journey and Arrival at Salt Lick Lodge",
        activities: [
          {
            time: "Morning",
            description:
              "Board the Madaraka Express train in Nairobi for a scenic ride to Voi. Enjoy breathtaking views of the Kenyan countryside during the journey.",
          },
          {
            time: "Afternoon",
            description:
              "Arrive at Voi station and transfer to Salt Lick Lodge. Check in, enjoy lunch, and relax in your elevated lodge overlooking the waterhole.",
          },
          {
            time: "Evening",
            description:
              "Go on your first game drive in Taita Hills Wildlife Sanctuary. Return to the lodge for dinner while watching wildlife gather at the waterhole.",
          },
        ],
      },
      {
        day: 2,
        title: "Full-Day Wildlife Safari",
        activities: [
          {
            time: "Early Morning",
            description:
              "Start the day with a sunrise game drive to spot predators and other wildlife. Return to the lodge for breakfast.",
          },
          {
            time: "Mid-Morning to Afternoon",
            description:
              "Enjoy leisure time at the lodge, take photos of wildlife at the waterhole, or relax. After lunch, embark on an afternoon game drive.",
          },
          {
            time: "Evening",
            description:
              "Conclude the day with a short sunset game drive. Dinner and overnight at Salt Lick Lodge.",
          },
        ],
      },
      {
        day: 3,
        title: "Morning Game Drive and Return to Nairobi",
        activities: [
          {
            time: "Early Morning",
            description:
              "Take a final game drive to capture last wildlife moments. Return to the lodge for breakfast.",
          },
          {
            time: "Mid-Morning",
            description:
              "Check out of the lodge and transfer to Voi station to board the train back to Nairobi.",
          },
          {
            time: "Afternoon",
            description:
              "Arrive in Nairobi in the afternoon, marking the end of your escape.",
          },
        ],
      },
    ],
  },
];
