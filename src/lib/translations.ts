export type Lang = "en" | "de";

const translations = {
  en: {
    nav: {
      home: "Home",
      coffee: "Our Coffee",
      howItWorks: "How It Works",
      order: "Order",
      about: "About",
    },
    hero: {
      title: "Freshly Roasted. Delivered by Bike.",
      subtitle:
        "Specialty coffee roasted this morning, at your door this afternoon. Sustainable same-day delivery across Leipzig.",
      cta: "Order Now",
      secondary: "See Our Coffee",
    },
    features: {
      roastedToday: "Roasted Today",
      roastedTodayDesc:
        "Every batch is roasted fresh the same day it's delivered. No warehouse shelves, no stale beans.",
      bikeDelivery: "Bicycle Delivery",
      bikeDeliveryDesc:
        "Zero emissions, zero compromise. Our couriers deliver your coffee by bike across Leipzig.",
      specialty: "Specialty Grade",
      specialtyDesc:
        "We source only the finest beans, scoring 80+ on the SCA scale. Single origin and expertly blended.",
      yourSchedule: "Your Schedule",
      yourScheduleDesc:
        "Choose a delivery window that works for you. Morning, afternoon, or evening — fresh coffee on your time.",
    },
    coffee: {
      title: "Our Coffee Selection",
      subtitle:
        "Each variety is carefully sourced and roasted to highlight its unique character.",
      varieties: [
        {
          name: "Ethiopian Yirgacheffe",
          origin: "Ethiopia",
          notes: "Floral, bright citrus, bergamot",
          description:
            "A classic specialty origin with delicate floral aromatics and a vibrant, tea-like body.",
        },
        {
          name: "Colombian Huila",
          origin: "Colombia",
          notes: "Caramel, red apple, chocolate",
          description:
            "Rich and well-balanced with sweet caramel undertones and a smooth, velvety finish.",
        },
        {
          name: "Guatemalan Antigua",
          origin: "Guatemala",
          notes: "Dark chocolate, spice, smoky",
          description:
            "Full-bodied and complex, with deep chocolate notes and a hint of volcanic earthiness.",
        },
        {
          name: "Kenyan AA",
          origin: "Kenya",
          notes: "Blackcurrant, grapefruit, brown sugar",
          description:
            "Bold and juicy with a wine-like acidity and rich, fruity sweetness.",
        },
        {
          name: "Brazilian Santos",
          origin: "Brazil",
          notes: "Nutty, milk chocolate, low acidity",
          description:
            "A smooth, easy-drinking coffee perfect for those who love a classic, nutty cup.",
        },
        {
          name: "House Blend",
          origin: "Multi-origin",
          notes: "Balanced, sweet, versatile",
          description:
            "Our signature blend — crafted for everyday enjoyment. Works beautifully as espresso or filter.",
        },
      ],
    },
    roastLevels: {
      title: "Choose Your Roast",
      light: "Light",
      lightDesc: "Bright acidity, origin flavors shine. Ideal for pour-over and filter.",
      medium: "Medium",
      mediumDesc: "Balanced sweetness and body. Great all-rounder for any brew method.",
      dark: "Dark",
      darkDesc: "Rich, bold, low acidity. Perfect for espresso and French press.",
      almondy: "Almondy",
      almondyDesc:
        "Our signature roast — a warm, nutty sweetness with a smooth, rounded finish.",
    },
    howItWorks: {
      title: "How It Works",
      step1: "Choose Your Coffee",
      step1Desc: "Pick your variety, roast level, and grind size. We have something for every taste.",
      step2: "Select Delivery Window",
      step2Desc:
        "Choose a same-day delivery slot that fits your schedule. We roast and ride.",
      step3: "We Roast Fresh",
      step3Desc:
        "Your coffee is roasted to order the same morning. No sitting on shelves.",
      step4: "Delivered by Bike",
      step4Desc:
        "Our cyclist brings your coffee straight to your door — zero emissions, maximum freshness.",
    },
    order: {
      title: "Place Your Order",
      selectVariety: "Select Coffee Variety",
      selectRoast: "Roast Level",
      selectGrind: "Grind Size",
      grindWhole: "Whole Bean",
      grindEspresso: "Espresso (Fine)",
      grindFilter: "Filter (Medium)",
      grindFrench: "French Press (Coarse)",
      selectSize: "Bag Size",
      size250: "250g",
      size500: "500g",
      size1000: "1kg",
      selectWindow: "Delivery Window",
      windowMorning: "Morning (8:00 – 12:00)",
      windowAfternoon: "Afternoon (12:00 – 16:00)",
      windowEvening: "Evening (16:00 – 20:00)",
      deliveryAddress: "Delivery Address",
      addressPlaceholder: "Your address in Leipzig",
      name: "Your Name",
      namePlaceholder: "Full name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      phone: "Phone (optional)",
      phonePlaceholder: "+49...",
      notes: "Delivery Notes (optional)",
      notesPlaceholder: "e.g. Ring twice, leave at door...",
      submit: "Place Order",
      price: "Price",
      orderSuccess: "Order placed! We'll send a confirmation to your email shortly.",
    },
    sustainability: {
      title: "Good Coffee, Good Conscience",
      text: "Every delivery is made by bicycle — not van, not car, but bike. That means zero tailpipe emissions for every bag of coffee that reaches your door. We believe great coffee shouldn't cost the earth. By keeping our supply chain local, our roasting small-batch, and our delivery human-powered, we're building a coffee experience that's better for Leipzig and better for the planet.",
      stat1: "0g CO₂",
      stat1Label: "per delivery",
      stat2: "100%",
      stat2Label: "bicycle powered",
      stat3: "Same Day",
      stat3Label: "roast to door",
    },
    about: {
      title: "About Us",
      text: "We're a small team of coffee lovers in Leipzig who believe freshness changes everything. Most coffee you buy was roasted weeks or months ago. Ours was roasted this morning. We pair that obsessive freshness with bicycle delivery because we care about our city as much as our coffee. Every pedal stroke is a choice — for cleaner air, quieter streets, and a more connected community.",
      tagline: "Frisch. Lokal. Nachhaltig.",
    },
    footer: {
      tagline: "Freshly roasted specialty coffee, delivered by bicycle in Leipzig.",
      quickLinks: "Quick Links",
      contact: "Contact",
      hours: "Delivery Hours",
      hoursDetail: "Monday – Saturday, 8:00 – 20:00",
      copyright: "© 2026 Frische Tasse. All rights reserved.",
      madeWith: "Made with love in Leipzig",
    },
  },
  de: {
    nav: {
      home: "Start",
      coffee: "Unser Kaffee",
      howItWorks: "So funktioniert's",
      order: "Bestellen",
      about: "Über uns",
    },
    hero: {
      title: "Frisch geröstet. Per Fahrrad geliefert.",
      subtitle:
        "Spezialitätenkaffee, heute Morgen geröstet — heute Nachmittag bei dir. Nachhaltige Lieferung am selben Tag in Leipzig.",
      cta: "Jetzt bestellen",
      secondary: "Unseren Kaffee entdecken",
    },
    features: {
      roastedToday: "Heute geröstet",
      roastedTodayDesc:
        "Jede Charge wird am selben Tag geröstet und geliefert. Keine Lagerregale, keine alten Bohnen.",
      bikeDelivery: "Fahrradlieferung",
      bikeDeliveryDesc:
        "Null Emissionen, kein Kompromiss. Unsere Kuriere liefern deinen Kaffee per Fahrrad in ganz Leipzig.",
      specialty: "Spezialitätengrad",
      specialtyDesc:
        "Wir beziehen nur die besten Bohnen mit einer SCA-Bewertung von 80+. Single Origin und meisterhaft geblendet.",
      yourSchedule: "Dein Zeitplan",
      yourScheduleDesc:
        "Wähle ein Lieferfenster, das zu dir passt. Morgens, nachmittags oder abends — frischer Kaffee nach deinem Zeitplan.",
    },
    coffee: {
      title: "Unsere Kaffeeauswahl",
      subtitle:
        "Jede Sorte wird sorgfältig ausgewählt und geröstet, um ihren einzigartigen Charakter hervorzuheben.",
      varieties: [
        {
          name: "Äthiopischer Yirgacheffe",
          origin: "Äthiopien",
          notes: "Blumig, helle Zitrus, Bergamotte",
          description:
            "Ein klassischer Spezialitätenursprung mit zarter Blumenaromatik und einem lebendigen, teeartigen Körper.",
        },
        {
          name: "Kolumbianischer Huila",
          origin: "Kolumbien",
          notes: "Karamell, roter Apfel, Schokolade",
          description:
            "Reich und ausgewogen mit süßen Karamellnoten und einem glatten, samtigen Abgang.",
        },
        {
          name: "Guatemaltekischer Antigua",
          origin: "Guatemala",
          notes: "Dunkle Schokolade, Gewürze, rauchig",
          description:
            "Vollmundig und komplex, mit tiefen Schokoladennoten und einem Hauch vulkanischer Erdigkeit.",
        },
        {
          name: "Kenianischer AA",
          origin: "Kenia",
          notes: "Schwarze Johannisbeere, Grapefruit, Rohrzucker",
          description:
            "Kräftig und saftig mit einer weinartigen Säure und reicher, fruchtiger Süße.",
        },
        {
          name: "Brasilianischer Santos",
          origin: "Brasilien",
          notes: "Nussig, Milchschokolade, niedrige Säure",
          description:
            "Ein glatter, leicht trinkbarer Kaffee — perfekt für Liebhaber klassischer, nussiger Tassen.",
        },
        {
          name: "Hausmischung",
          origin: "Multi-Origin",
          notes: "Ausgewogen, süß, vielseitig",
          description:
            "Unsere Signaturmischung — für den täglichen Genuss kreiert. Hervorragend als Espresso oder Filterkaffee.",
        },
      ],
    },
    roastLevels: {
      title: "Wähle deinen Röstgrad",
      light: "Hell",
      lightDesc: "Helle Säure, Herkunftsaromen treten hervor. Ideal für Pour-over und Filter.",
      medium: "Mittel",
      mediumDesc: "Ausgewogene Süße und Körper. Perfekter Allrounder für jede Brühmethode.",
      dark: "Dunkel",
      darkDesc: "Reich, kräftig, niedrige Säure. Perfekt für Espresso und French Press.",
      almondy: "Mandelig",
      almondyDesc:
        "Unser Signaturröstgrad — warme, nussige Süße mit einem glatten, abgerundeten Abgang.",
    },
    howItWorks: {
      title: "So funktioniert's",
      step1: "Kaffee auswählen",
      step1Desc:
        "Wähle deine Sorte, deinen Röstgrad und den Mahlgrad. Wir haben für jeden Geschmack etwas.",
      step2: "Lieferfenster wählen",
      step2Desc:
        "Wähle ein Lieferzeitfenster am selben Tag, das zu deinem Zeitplan passt. Wir rösten und radeln.",
      step3: "Frisch geröstet",
      step3Desc:
        "Dein Kaffee wird am selben Morgen auf Bestellung geröstet. Kein Lagern im Regal.",
      step4: "Per Fahrrad geliefert",
      step4Desc:
        "Unser Radkurier bringt deinen Kaffee direkt an deine Tür — null Emissionen, maximale Frische.",
    },
    order: {
      title: "Jetzt bestellen",
      selectVariety: "Kaffeesorte wählen",
      selectRoast: "Röstgrad",
      selectGrind: "Mahlgrad",
      grindWhole: "Ganze Bohne",
      grindEspresso: "Espresso (Fein)",
      grindFilter: "Filter (Mittel)",
      grindFrench: "French Press (Grob)",
      selectSize: "Beutelgröße",
      size250: "250g",
      size500: "500g",
      size1000: "1kg",
      selectWindow: "Lieferfenster",
      windowMorning: "Vormittag (8:00 – 12:00)",
      windowAfternoon: "Nachmittag (12:00 – 16:00)",
      windowEvening: "Abend (16:00 – 20:00)",
      deliveryAddress: "Lieferadresse",
      addressPlaceholder: "Deine Adresse in Leipzig",
      name: "Dein Name",
      namePlaceholder: "Vollständiger Name",
      email: "E-Mail",
      emailPlaceholder: "deine@email.de",
      phone: "Telefon (optional)",
      phonePlaceholder: "+49...",
      notes: "Lieferhinweise (optional)",
      notesPlaceholder: "z.B. Zweimal klingeln, vor der Tür abstellen...",
      submit: "Bestellung aufgeben",
      price: "Preis",
      orderSuccess:
        "Bestellung aufgegeben! Wir senden dir in Kürze eine Bestätigung per E-Mail.",
    },
    sustainability: {
      title: "Guter Kaffee, gutes Gewissen",
      text: "Jede Lieferung erfolgt per Fahrrad — nicht per Van, nicht per Auto, sondern per Rad. Das bedeutet null Abgasemissionen für jedes Päckchen Kaffee, das dich erreicht. Wir glauben, dass großartiger Kaffee nicht die Welt kosten sollte. Indem wir unsere Lieferkette lokal halten, in kleinen Chargen rösten und mit Muskelkraft liefern, schaffen wir ein Kaffeeerlebnis, das besser für Leipzig und besser für den Planeten ist.",
      stat1: "0g CO₂",
      stat1Label: "pro Lieferung",
      stat2: "100%",
      stat2Label: "mit dem Fahrrad",
      stat3: "Am selben Tag",
      stat3Label: "von der Röstung bis zur Tür",
    },
    about: {
      title: "Über uns",
      text: "Wir sind ein kleines Team von Kaffeeliebhabern in Leipzig, die überzeugt sind, dass Frische alles verändert. Der meiste Kaffee, den man kauft, wurde vor Wochen oder Monaten geröstet. Unserer wurde heute Morgen geröstet. Wir verbinden diese kompromisslose Frische mit Fahrradlieferung, weil uns unsere Stadt genauso am Herzen liegt wie unser Kaffee. Jeder Tritt in die Pedale ist eine bewusste Entscheidung — für sauberere Luft, ruhigere Straßen und eine verbundenere Gemeinschaft.",
      tagline: "Fresh. Local. Sustainable.",
    },
    footer: {
      tagline:
        "Frisch gerösteter Spezialitätenkaffee, per Fahrrad geliefert in Leipzig.",
      quickLinks: "Schnelllinks",
      contact: "Kontakt",
      hours: "Lieferzeiten",
      hoursDetail: "Montag – Samstag, 8:00 – 20:00",
      copyright: "© 2026 Frische Tasse. Alle Rechte vorbehalten.",
      madeWith: "Mit Liebe gemacht in Leipzig",
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}

export default translations;
