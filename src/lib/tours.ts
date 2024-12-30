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
  {
    id: "4",
    title: "Neptune Village Beach Resort & Spa Getaway",
    description: "Relax, rejuvenate, and unwind at the pristine Diani Beach.",
    longDescription:
      "Nestled along the white sandy shores of Diani Beach, Neptune Village Beach Resort & Spa offers a serene escape with world-class amenities, lush gardens, and stunning ocean views. Whether you're looking for adventure or relaxation, this resort has something for everyone.",
    price: "$5,000.00",
    duration: "3 days",
    image: "/neptunevillage.jpg?height=200&width=300",
    featured: false,
    included: [
      "Round-trip transport from Nairobi to Diani (flight or SGR train plus transfers).",
      "2 nights' accommodation at Neptune Village Beach Resort & Spa.",
      "All-inclusive package: meals, snacks, selected drinks, and entertainment.",
      "Access to the beach, pool, and resort facilities.",
      "Free Wi-Fi in public areas and rooms.",
      "Services of a professional guide for optional excursions.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Neptune Village Beach Resort & Spa",
        activities: [
          {
            time: "Morning",
            description:
              "Depart from Nairobi via flight or SGR train to Diani. Transfer to Neptune Village Beach Resort & Spa upon arrival.",
          },
          {
            time: "Afternoon",
            description:
              "Check-in at the resort, enjoy a welcome drink, and settle into your room. Have lunch overlooking the ocean.",
          },
          {
            time: "Evening",
            description:
              "Relax by the beach or pool, followed by a themed buffet dinner. End the day with live music or a cultural dance performance.",
          },
        ],
      },
      {
        day: 2,
        title: "Full Day at Neptune Village",
        activities: [
          {
            time: "Morning",
            description:
              "Start your day with a yoga session or morning walk on the beach. Enjoy a sumptuous breakfast at the resort.",
          },
          {
            time: "Mid-Morning to Afternoon",
            description:
              "Engage in water sports such as snorkeling, windsurfing, or a glass-bottom boat ride. Alternatively, relax at the spa with a signature massage.",
          },
          {
            time: "Evening",
            description:
              "Unwind with cocktails during the sunset and indulge in a seafood barbecue dinner. Optional: night swimming or star-gazing on the beach.",
          },
        ],
      },
      {
        day: 3,
        title: "Departure from Neptune Village",
        activities: [
          {
            time: "Morning",
            description:
              "Enjoy your final breakfast at the resort. Spend some time at the beach or pool before checking out.",
          },
          {
            time: "Mid-Morning",
            description:
              "Transfer to Diani Airstrip or SGR station for your return journey to Nairobi.",
          },
          {
            time: "Afternoon",
            description:
              "Arrive in Nairobi, marking the end of your peaceful beach getaway.",
          },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Mt. Kenya Adventure Retreat",
    description:
      "Explore the serenity and majestic views of Mt. Kenya while enjoying luxurious stays.",
    longDescription:
      "Nestled amidst lush forests and open grasslands, the Mt. Kenya region offers breathtaking landscapes, unique wildlife, and the perfect blend of adventure and tranquility. Stay at luxurious hotels and lodges that provide unmatched access to Kenya's tallest mountain.",
    price: "$ 2,500.00",
    duration: "4 days",
    image:
      "/mt-kenya-hotels-and-lodges-christmas-rates.jpg?height=200&width=300",
    featured: false,
    included: [
      "Transport from Nairobi to Mt. Kenya and back (via private vehicle or shuttle).",
      "3 nights' accommodation at select Mt. Kenya lodges and hotels.",
      "Meals on full board basis (breakfast, lunch, and dinner).",
      "Guided nature walks and game drives.",
      "Park fees for Mt. Kenya National Park.",
      "Services of a professional guide for excursions and hikes.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Check-in at Mt. Kenya Lodge",
        activities: [
          {
            time: "Morning",
            description:
              "Depart Nairobi and drive towards Mt. Kenya. Stop for scenic views along the way.",
          },
          {
            time: "Afternoon",
            description:
              "Check in at Serena Mountain Lodge or similar. Enjoy lunch overlooking the forest and waterhole frequented by wildlife.",
          },
          {
            time: "Evening",
            description:
              "Relax at the lodge or go on a guided nature walk. Return for dinner and overnight at the lodge.",
          },
        ],
      },
      {
        day: 2,
        title: "Exploration of Mt. Kenya National Park",
        activities: [
          {
            time: "Early Morning",
            description:
              "Enjoy breakfast and begin a guided hike on the lower slopes of Mt. Kenya, exploring the rich biodiversity and spectacular views.",
          },
          {
            time: "Mid-Morning to Afternoon",
            description:
              "Visit key attractions such as Mau Mau Caves or try trout fishing in pristine mountain streams. Return for lunch at the lodge.",
          },
          {
            time: "Evening",
            description:
              "Go for an evening game drive in nearby Aberdare National Park or relax at the lodge. Dinner and overnight stay.",
          },
        ],
      },
      {
        day: 3,
        title: "Cultural and Scenic Exploration",
        activities: [
          {
            time: "Morning",
            description:
              "Visit a nearby cultural village to learn about the Kikuyu and Meru communities' heritage and traditions.",
          },
          {
            time: "Afternoon",
            description:
              "Explore Nanyuki town, including the Equator crossing marker and local markets. Enjoy lunch at a local restaurant.",
          },
          {
            time: "Evening",
            description:
              "Relax with sundowners while enjoying panoramic views of Mt. Kenya. Dinner and overnight at the lodge.",
          },
        ],
      },
      {
        day: 4,
        title: "Final Adventure and Departure",
        activities: [
          {
            time: "Early Morning",
            description:
              "Take a short guided nature walk or an optional sunrise hike for a final Mt. Kenya experience.",
          },
          {
            time: "Mid-Morning",
            description:
              "Check out of the lodge and begin your journey back to Nairobi, stopping at scenic viewpoints.",
          },
          {
            time: "Afternoon",
            description:
              "Arrive in Nairobi, marking the end of your Mt. Kenya retreat.",
          },
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Taita Hills Safari & Resort Adventure",
    description:
      "Experience the captivating landscapes and rich wildlife of Taita Hills Wildlife Sanctuary.",
    longDescription:
      "Located within the Taita Hills Wildlife Sanctuary, the Taita Hills Safari Resort provides a unique opportunity to connect with nature in style. Surrounded by breathtaking scenery and abundant wildlife, it’s an unforgettable retreat for those looking to escape into the wilderness.",
    price: "$ 1,600.00",
    duration: "3 days",
    image: "/taita-hills-safari-resort-spa.jpg?height=400&width=600",
    featured: false,
    included: [
      "Round-trip transport from Nairobi to Taita Hills (via SGR train or private vehicle).",
      "2 nights' accommodation at Taita Hills Safari Resort.",
      "Meals on full board basis (breakfast, lunch, and dinner).",
      "Guided game drives in Taita Hills Wildlife Sanctuary.",
      "Park fees for Taita Hills Wildlife Sanctuary.",
      "Bottled drinking water during game drives.",
      "Services of a professional and English-speaking guide.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and First Game Drive",
        activities: [
          {
            time: "Morning",
            description:
              "Depart Nairobi via the Madaraka Express train or private vehicle to Taita Hills. Arrive at Voi station and transfer to Taita Hills Safari Resort.",
          },
          {
            time: "Afternoon",
            description:
              "Check in at the resort and enjoy a delicious lunch overlooking the sanctuary. Relax and explore the lodge's facilities.",
          },
          {
            time: "Evening",
            description:
              "Embark on your first game drive in the Taita Hills Wildlife Sanctuary to spot lions, elephants, and other wildlife. Return to the lodge for dinner and an overnight stay.",
          },
        ],
      },
      {
        day: 2,
        title: "Full-Day Safari Adventure",
        activities: [
          {
            time: "Early Morning",
            description:
              "Begin the day with a sunrise game drive to see predators in action and enjoy breathtaking views of the sanctuary. Return to the lodge for breakfast.",
          },
          {
            time: "Mid-Morning to Afternoon",
            description:
              "Relax at the lodge or visit nearby attractions such as the LUMO Community Wildlife Sanctuary. After lunch, embark on an extended afternoon game drive.",
          },
          {
            time: "Evening",
            description:
              "Wrap up the day with a guided sundowner experience or short evening game drive. Return for a themed dinner at the lodge.",
          },
        ],
      },
      {
        day: 3,
        title: "Final Game Drive and Departure",
        activities: [
          {
            time: "Early Morning",
            description:
              "Take a final game drive to capture last moments of wildlife encounters. Return to the lodge for breakfast.",
          },
          {
            time: "Mid-Morning",
            description:
              "Check out from the lodge and transfer to Voi station for your train ride or begin your road journey back to Nairobi.",
          },
          {
            time: "Afternoon",
            description:
              "Arrive in Nairobi, marking the end of your Taita Hills adventure.",
          },
        ],
      },
    ],
  },
  {
    id: "7",
    title: "Zanzibar Island Escape",
    description:
      "Immerse yourself in the turquoise waters, white sandy beaches, and vibrant culture of Zanzibar.",
    longDescription:
      "Zanzibar, known as the 'Spice Island,' offers a unique blend of pristine beaches, rich Swahili culture, and historic charm. Explore the UNESCO World Heritage Site of Stone Town, indulge in water sports, and relax in luxurious beach resorts on this unforgettable island retreat.",
    price: "$ 2,800.00",
    duration: "5 days",
    image: "/zanzibar-island.jpg?height=400&width=600",
    featured: false,
    included: [
      "Round-trip flights from Nairobi to Zanzibar.",
      "4 nights' accommodation in luxurious beach resorts.",
      "Meals on half-board basis (breakfast and dinner).",
      "Airport transfers and local transport.",
      "Guided tours in Stone Town and spice plantations.",
      "Snorkeling or diving excursion at Mnemba Atoll.",
      "Sunset dhow cruise along the Indian Ocean.",
      "All park and activity fees.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Zanzibar and Relaxation",
        activities: [
          {
            time: "Morning",
            description:
              "Arrive at Zanzibar Airport and transfer to your beachfront resort. Enjoy a welcome drink and settle into your luxurious room.",
          },
          {
            time: "Afternoon",
            description:
              "Relax on the beach or by the pool, soaking in the serene atmosphere. Indulge in a delicious Swahili lunch.",
          },
          {
            time: "Evening",
            description:
              "Enjoy a stunning sunset view followed by a themed dinner at the resort.",
          },
        ],
      },
      {
        day: 2,
        title: "Stone Town and Spice Plantation Tour",
        activities: [
          {
            time: "Morning",
            description:
              "Explore the historic streets of Stone Town on a guided tour, visiting iconic landmarks like the House of Wonders, Sultan's Palace, and the Old Slave Market.",
          },
          {
            time: "Afternoon",
            description:
              "Visit a spice plantation to learn about the cultivation of spices like cloves, nutmeg, and cinnamon. Enjoy a traditional Swahili lunch.",
          },
          {
            time: "Evening",
            description:
              "Return to the resort for dinner and relaxation by the beach.",
          },
        ],
      },
      {
        day: 3,
        title: "Snorkeling or Diving at Mnemba Atoll",
        activities: [
          {
            time: "Morning",
            description:
              "Embark on a snorkeling or diving excursion to Mnemba Atoll, known for its vibrant coral reefs and diverse marine life.",
          },
          {
            time: "Afternoon",
            description:
              "Enjoy a packed picnic lunch on a secluded beach before heading back to the resort.",
          },
          {
            time: "Evening",
            description:
              "Relax with a sunset cocktail and fresh seafood dinner at the resort.",
          },
        ],
      },
      {
        day: 4,
        title: "Beach Day and Sunset Dhow Cruise",
        activities: [
          {
            time: "Morning",
            description:
              "Spend the morning at leisure, enjoying the resort’s facilities, such as the spa, or taking a stroll along the pristine beach.",
          },
          {
            time: "Afternoon",
            description:
              "Relax with a beachside lunch and enjoy optional water sports like kayaking or paddleboarding.",
          },
          {
            time: "Evening",
            description:
              "Embark on a traditional dhow cruise along the Indian Ocean, watching the sun set over the horizon. Return for a Swahili-themed farewell dinner.",
          },
        ],
      },
      {
        day: 5,
        title: "Departure from Zanzibar",
        activities: [
          {
            time: "Morning",
            description:
              "Enjoy your final breakfast at the resort and take in the beautiful views one last time.",
          },
          {
            time: "Mid-Morning",
            description:
              "Check out and transfer to Zanzibar Airport for your flight back to Nairobi.",
          },
          {
            time: "Afternoon",
            description:
              "Arrive in Nairobi, concluding your Zanzibar adventure.",
          },
        ],
      },
    ],
  },
];
