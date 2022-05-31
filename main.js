planesData = {
  luxorDeluxe: {
    name: "LUXOR DELUXE",
    imgPath: "./Assets/planes-clicked/luxorDeluxe.png",
    price: "$10,000,000",
    description:
      "Now that the private jet market is open to every middle-class American willing to harvest their children's organs for cash, you need a new way to stand out. Forget standard light-weight, high-malleability, flame retardant aeronautical construction materials, yours are solid gold! It's time to tell the world exactly who you are. And you're speaking so loud, you don't even care if you'll melt and fall out of the sky during the next solar storm.",
  },

  swiftDeluxe: {
    name: "SWIFT DELUXE",
    imgPath: "./Assets/planes-clicked/swiftDeluxe.png",
    price: "$5,150,000",
    description:
      "You're not just buying a three-ton, nitro-charged, solid gold helicopter. You're not just subsidizing third world mining corporations, hysterical dictatorships, thousands of child laborers and dozens of NGOs pretending to fight human rights abuse. You're making a statement. You're making a statement about you, and the kind of meaningless decadence the world barely even notices anymore.",
  },

  vestra: {
    name: "vestra",
    imgPath: "./Assets/planes-clicked/vestra.png",
    price: "$950,000",
    description:
      "Low wing, very light jet aircraft for the business traveller. Perfect for ferrying your favorite hookers out to meet you in Las Venturas, picking up uncut blow south of the border, or doing the school run. Doesn't come cheap, but be honest, you're getting this so people know how rich you are.",
  },

  miljet: {
    name: "miljet",
    imgPath: "./Assets/planes-clicked/miljet.png",
    price: "$1,750,000",
    description:
      "With a defense budget of nearly a trillion, you can bet not all US military personnel are travelling in cargo planes. This is a military-liveried business jet for the champagne jingoist.",
  },

  besra: {
    name: "besra",
    imgPath: "./Assets/planes-clicked/besra.png",
    price: "$658,000",
    description:
      "High performance jet trainer aircraft. You'll be looping the loop, buzzing the tower, and dropping the big one before you can say 'American Imperialism.' Pack a parachute and clean underwear.",
  },

  swift: {
    name: "swift",
    imgPath: "./Assets/planes-clicked/swift.png",
    imgPath2: "./Assets/planes-clicked/swift2.png",
    price: "$1,500,000",
    price2: "$1,600,000",
    description:
      "Special edition lightweight, twin-engine, four-seat multi-purpose helicopter. For this collaboration with clothing and lifestyle brand Flying Bravo we've added rhodium stitching to the panda leather seats... and a couple of zeros to the price tag. There's no better way to sacrifice your pay check at the altar of luxury marketing.",
  },

  duster: {
    name: "duster",
    imgPath: "./Assets/planes-clicked/duster.png",
    price: "$275,000",
    description:
      "“Antique” and “open cockpit” aren't normally the first words on your wishlist when you're shopping for a private jet, but this might change your mind. Produced during the 1930s and 1940s when America still made things, this famous biplane was used primarily for crop dusting chemicals into the food chain. As you swoop through the sky, middle-aged combover fluttering in the wind, you'll almost be able to taste the pesticide blowing back in your face.",
  },

  shamal: {
    name: "shamal",
    imgPath: "./Assets/planes-clicked/shamal.png",
    price: "$1,150,000",
    description:
      "The Shamal is a mid-size business jet known for its climb and cruise performance, balanced handling and economical fuel consumption. At current gas prices, you can fly a Shamal coast to coast for just $50,000, without even a second thought for the Ozone layer.",
  },

  cuban800: {
    name: "Cuban 800",
    imgPath: "./Assets/planes-clicked/cuban800.png",
    price: "$240,000",
    description:
      "One of the best-selling aircrafts of all time, with the Cuban 800 you really are buying a piece of history, rusted rivets and all. This light engine plane might look like it was put together with one of those Krapea hex keys, but these bad boys were built to last. Plus for $32,000 you can't exactly expect a cocktail bar and a stripper pole",
  },

  luxor: {
    name: "luxor",
    imgPath: "./Assets/planes-clicked/luxor.png",
    price: "$1,500,000",
    description:
      "When it comes to luxury private jets, this is the cream of the crop. With a Luxor you're joining an elite club of all the best kind of people: super-rich celebrities, businessmen and African dictators.",
  },

  mallard: {
    name: "mallard",
    imgPath: "./Assets/planes-clicked/mallard.png",
    price: "$250,000",
    description:
      "The ultimate kid's toy with adult consequences, this aerobatic stunt plane offers unparalleled handling and performance for the budding free-style [sic] pilot. Nothing gets her hot like seeing you do 5G barrel rolls until you nearly black out. From slow roll into slow clap into hammerhead into scream for daddy, this is perfect for the kind of rich showoff who wants to prove he's still got all the moves. No room for passengers, it's just you and your mortality battling it out up there.",
  },

  frogger: {
    name: "frogger",
    imgPath: "./Assets/planes-clicked/frogger.png",
    price: "$1,300,000",
    description:
      "Stylish, roomy, easy to handle with a cruise speed of 130 knots, this 4-seat single-engine light helicopter is popular with both private pilots and charter companies. Featuring an enclosed tail fan, the Frogger is one of the quietest helicopters on the market today. Especially great for the man who needs to get to work fast but can't bear the moaning of neighbors complaining about noise and rotor wash.",
  },

  maverick: {
    name: "maverick",
    imgPath: "./Assets/planes-clicked/maverick.png",
    price: "$780,000",
    description:
      "A two-bladed, twin-engine helicopter, the Maverick was manufactured in Canada, but you shouldn't let that put you off. Originally designed for military use, when the army rejected them for looking too 'French', they became hugely popular with rich social climbers for exactly the same reason. Used by law enforcement for surveillance operations, you'll often see them hovering above inner city African American neighborhoods. Billion candlepower spotlight and loudspeaker optional, but trust us, it's fun to play with over poor neighborhoods at night.",
  },
};

function homeReturn() {
  document.body.classList.remove("clicked");
}

function openPlane(plane) {
  document.body.classList.add("clicked");

  let planeName = document.getElementById("planeName");
  let planePrice = document.getElementById("planePrice");
  let planeDescription = document.getElementById("planeDescription");
  let imgPath = document.getElementById("imgPath");

  planeName.innerText = plane.name;
  planePrice.innerText = plane.price;
  planeDescription.innerText = plane.description;
  imgPath.src = plane.imgPath;
}
