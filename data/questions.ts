export type QuestionOption = {
  id: string
  icon: string
  titleDA: string
  titleEN: string
  subtitleDA?: string
  subtitleEN?: string
  direction: string
}

export type Question = {
  id: number
  titleDA: string
  titleEN: string
  iconHeader: string
  options: QuestionOption[]
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    titleDA: "Hvad er dit største fokus i dit professionelle liv lige nu?",
    titleEN: "What is your main focus in your professional life right now?",
    iconHeader: "🎯",
    options: [
      {
        id: "growth",
        icon: "🎯",
        titleDA: "Vækst & Ekspansion",
        titleEN: "Growth & Expansion",
        subtitleDA: "Jeg vil vokse - flere kunder, større marked, nye muligheder",
        subtitleEN: "I want to grow - more customers, bigger market, new opportunities",
        direction: "Business development, sales focus, expansion"
      },
      {
        id: "learning",
        icon: "🧠",
        titleDA: "Læring & Indsigt",
        titleEN: "Learning & Insight",
        subtitleDA: "Jeg vil forstå markedet bedre og lære fra erfarne folk",
        subtitleEN: "I want to understand the market better and learn from experienced people",
        direction: "Knowledge seeking, market intelligence, mentorship"
      },
      {
        id: "networking",
        icon: "🤝",
        titleDA: "Netværk & Relationer",
        titleEN: "Network & Relationships",
        subtitleDA: "Jeg vil møde de rigtige mennesker og bygge værdifulde forbindelser",
        subtitleEN: "I want to meet the right people and build valuable connections",
        direction: "Relationship-building, social networking, collaboration"
      },
      {
        id: "community",
        icon: "🏠",
        titleDA: "Fællesskab & Tilhørsforhold",
        titleEN: "Community & Belonging",
        subtitleDA: "Jeg vil være del af et community hvor jeg føler mig hjemme",
        subtitleEN: "I want to be part of a community where I feel at home",
        direction: "Social belonging, expat support, cultural bridge"
      }
    ]
  },
  {
    id: 2,
    titleDA: "Hvordan beskriver du din forbindelse til Danmark og Indonesien?",
    titleEN: "How do you describe your connection to Denmark and Indonesia?",
    iconHeader: "🌏",
    options: [
      {
        id: "danish-roots",
        icon: "🇩🇰",
        titleDA: "Dansk Rødder",
        titleEN: "Danish Roots",
        subtitleDA: "Jeg er dansk eller har stærke danske rødder - Indonesien er mit arbejdsmarked",
        subtitleEN: "I'm Danish or have strong Danish roots - Indonesia is my workplace",
        direction: "Expat, Danish identity, need for Danish community"
      },
      {
        id: "indonesian",
        icon: "🌏",
        titleDA: "Indonesisk Med Dansk Forbindelse",
        titleEN: "Indonesian With Danish Connection",
        subtitleDA: "Jeg er indonesier der arbejder med, for eller omkring danske interesser",
        subtitleEN: "I'm Indonesian working with, for, or around Danish interests",
        direction: "Local perspective, cultural bridge, Indonesian professional"
      },
      {
        id: "cross-cultural",
        icon: "🤝",
        titleDA: "Cross-Cultural Navigator",
        titleEN: "Cross-Cultural Navigator",
        subtitleDA: "Jeg arbejder mellem begge verdener - forstår og bruger begge kulturer",
        subtitleEN: "I work between both worlds - understand and use both cultures",
        direction: "Bicultural, translator, international mindset"
      },
      {
        id: "curious",
        icon: "💡",
        titleDA: "Nysgerrig Udefra",
        titleEN: "Curious Outsider",
        subtitleDA: "Jeg er interesseret i mulighederne mellem Danmark og Indonesien",
        subtitleEN: "I'm interested in the opportunities between Denmark and Indonesia",
        direction: "Explorer, opportunity seeker, learning phase"
      }
    ]
  },
  {
    id: 3,
    titleDA: "Hvilken situation beskriver dig bedst?",
    titleEN: "Which situation describes you best?",
    iconHeader: "💼",
    options: [
      {
        id: "employed",
        icon: "🏢",
        titleDA: "Jeg Arbejder i en Virksomhed",
        titleEN: "I Work in a Company",
        subtitleDA: "Ansat i en organisation - søger professionel udvikling og netværk",
        subtitleEN: "Employed in an organization - seeking professional development and network",
        direction: "Corporate, career, employees in all sizes"
      },
      {
        id: "business-owner",
        icon: "💼",
        titleDA: "Jeg Driver Min Egen Business",
        titleEN: "I Run My Own Business",
        subtitleDA: "Ejer, medstifter eller leder - søger vækst og nye muligheder",
        subtitleEN: "Owner, co-founder or leader - seeking growth and new opportunities",
        direction: "Entrepreneur, SME owner, business leader"
      },
      {
        id: "institutional",
        icon: "🎯",
        titleDA: "Jeg Repræsenterer Dansk-Indonesiske Interesser",
        titleEN: "I Represent Danish-Indonesian Interests",
        subtitleDA: "Arbejder for ambassade, trade council, organisation eller dansk initiative",
        subtitleEN: "Work for embassy, trade council, organization or Danish initiative",
        direction: "Institutional, diplomatic, official representation"
      },
      {
        id: "transition",
        icon: "🚀",
        titleDA: "Jeg Er i Transition",
        titleEN: "I'm in Transition",
        subtitleDA: "Mellem jobs, starter noget nyt, eller udforskende nye retninger",
        subtitleEN: "Between jobs, starting something new, or exploring new directions",
        direction: "Career change, startup phase, opportunity exploration"
      }
    ]
  },
  {
    id: 4,
    titleDA: "Når du tænker på værdien af et business-netværk - hvad betyder mest?",
    titleEN: "When you think about the value of a business network - what matters most?",
    iconHeader: "🎓",
    options: [
      {
        id: "tangible-results",
        icon: "💰",
        titleDA: "Konkrete Resultater",
        titleEN: "Tangible Results",
        subtitleDA: "Jeg vil se håndgribelige resultater - kunder, partnere, deals, muligheder",
        subtitleEN: "I want to see tangible results - customers, partners, deals, opportunities",
        direction: "ROI-focused, results-oriented, business development"
      },
      {
        id: "guidance",
        icon: "🧭",
        titleDA: "Navigering & Guidance",
        titleEN: "Navigation & Guidance",
        subtitleDA: "Jeg vil have hjælp til at navigere - markedsindsigt, råd, erfaringer fra andre",
        subtitleEN: "I want help navigating - market insights, advice, experiences from others",
        direction: "Learning, mentorship, market understanding"
      },
      {
        id: "authentic-relations",
        icon: "🤝",
        titleDA: "Autentiske Relationer",
        titleEN: "Authentic Relationships",
        subtitleDA: "Jeg vil møde mennesker jeg kan stole på og bygge langsigtede relationer med",
        subtitleEN: "I want to meet people I can trust and build long-term relationships with",
        direction: "Trust, genuine connections, long-term thinking"
      },
      {
        id: "belonging",
        icon: "🌏",
        titleDA: "Følelsen Af At Høre Til",
        titleEN: "Feeling Of Belonging",
        subtitleDA: "Jeg vil være del af noget større - et community hvor jeg føler mig forstået",
        subtitleEN: "I want to be part of something bigger - a community where I feel understood",
        direction: "Belonging, expat support, social dimension"
      }
    ]
  },
  {
    id: 5,
    titleDA: "Hvordan tænker du på dit engagement i netværk?",
    titleEN: "How do you think about your engagement in networks?",
    iconHeader: "⏱️",
    options: [
      {
        id: "action-taker",
        icon: "🎯",
        titleDA: "Jeg Er Her For At Gøre Ting",
        titleEN: "I'm Here To Make Things Happen",
        subtitleDA: "Jeg vil se action hurtigt - være aktiv, deltage, få ting til at ske",
        subtitleEN: "I want to see action quickly - be active, participate, make things happen",
        direction: "Activist, engaged, driver, high-energy"
      },
      {
        id: "slow-networker",
        icon: "🌱",
        titleDA: "Jeg Tror På Slow Networking",
        titleEN: "I Believe In Slow Networking",
        subtitleDA: "Jeg vil bygge gradvist - lære folk at kende over tid, dybde over bredde",
        subtitleEN: "I want to build gradually - get to know people over time, depth over breadth",
        direction: "Patient, relationship builder, quality focus"
      },
      {
        id: "giver-first",
        icon: "🔄",
        titleDA: "Jeg Giver Først, Modtager Senere",
        titleEN: "I Give First, Receive Later",
        subtitleDA: "Jeg tror på at give værdi først - hjælpe andre åbner døre for mig",
        subtitleEN: "I believe in giving value first - helping others opens doors for me",
        direction: "Giver mindset, reciprocity, community builder"
      },
      {
        id: "figuring-out",
        icon: "🧭",
        titleDA: "Jeg Er Stadig Ved At Finde Ud Af Det",
        titleEN: "I'm Still Figuring It Out",
        subtitleDA: "Jeg er ny i dette og finder ud af hvordan det fungerer for mig",
        subtitleEN: "I'm new to this and figuring out how it works for me",
        direction: "Beginner, learner, explorer, needs guidance"
      }
    ]
  },
  {
    id: 6,
    titleDA: "Hvad er vigtigst for dig i et dansk-indonesisk business-netværk?",
    titleEN: "What's most important to you in a Danish-Indonesian business network?",
    iconHeader: "🎪",
    options: [
      {
        id: "bicultural-focus",
        icon: "🤝",
        titleDA: "Forståelse For Begge Kulturer",
        titleEN: "Understanding Of Both Cultures",
        subtitleDA: "Jeg vil være i et miljø der forstår både dansk og indonesisk business-kultur",
        subtitleEN: "I want to be in an environment that understands both Danish and Indonesian business culture",
        direction: "Cultural understanding, bicultural value, niche positioning"
      },
      {
        id: "quality-over-quantity",
        icon: "🎯",
        titleDA: "Kvalitet Over Kvantitet",
        titleEN: "Quality Over Quantity",
        subtitleDA: "Jeg foretrækker et mindre, tæt community fremfor store masse-events",
        subtitleEN: "I prefer a smaller, close community over large mass events",
        direction: "Intimate, quality focus, genuine connections"
      },
      {
        id: "professional-social",
        icon: "💼",
        titleDA: "Professionelt Men Socialt",
        titleEN: "Professional But Social",
        subtitleDA: "Jeg vil have business-netværk der også har en social, menneskelig side",
        subtitleEN: "I want business networking that also has a social, human side",
        direction: "Balance, holistic approach, not purely transactional"
      },
      {
        id: "danish-ecosystem",
        icon: "🌏",
        titleDA: "Access Til Det Danske Økosystem",
        titleEN: "Access To The Danish Ecosystem",
        subtitleDA: "Jeg vil have adgang til danske virksomheder, Trade Council, og dansk business-netværk",
        subtitleEN: "I want access to Danish companies, Trade Council, and Danish business network",
        direction: "Institutional access, official connections, Danish gateway"
      }
    ]
  },
  {
    id: 7,
    titleDA: "Hvilken del af Indonesien er du interesseret i eller placeret i?",
    titleEN: "Which part of Indonesia are you interested in or located in?",
    iconHeader: "📍",
    options: [
      {
        id: "jakarta",
        icon: "🏙️",
        titleDA: "Jakarta",
        titleEN: "Jakarta",
        subtitleDA: "Hovedstaden og business-centrum",
        subtitleEN: "Capital city and business hub",
        direction: "Jakarta, capital, business center"
      },
      {
        id: "surabaya",
        icon: "🏭",
        titleDA: "Surabaya",
        titleEN: "Surabaya",
        subtitleDA: "Øst Java - industri og handel",
        subtitleEN: "East Java - industry and trade",
        direction: "Surabaya, East Java, industrial"
      },
      {
        id: "bandung",
        icon: "🏔️",
        titleDA: "Bandung",
        titleEN: "Bandung",
        subtitleDA: "Vest Java - tech og kreativ industri",
        subtitleEN: "West Java - tech and creative industry",
        direction: "Bandung, West Java, tech hub"
      },
      {
        id: "bali",
        icon: "🏝️",
        titleDA: "Bali",
        titleEN: "Bali",
        subtitleDA: "Turisme, hospitality og digital nomader",
        subtitleEN: "Tourism, hospitality and digital nomads",
        direction: "Bali, tourism, lifestyle"
      },
      {
        id: "semarang",
        icon: "🚢",
        titleDA: "Semarang",
        titleEN: "Semarang",
        subtitleDA: "Central Java - havn og logistik",
        subtitleEN: "Central Java - port and logistics",
        direction: "Semarang, Central Java, logistics"
      },
      {
        id: "medan",
        icon: "🌴",
        titleDA: "Medan",
        titleEN: "Medan",
        subtitleDA: "Nord Sumatra - handel og landbrug",
        subtitleEN: "North Sumatra - trade and agriculture",
        direction: "Medan, Sumatra, agriculture"
      },
      {
        id: "makassar",
        icon: "⚓",
        titleDA: "Makassar",
        titleEN: "Makassar",
        subtitleDA: "Syd Sulawesi - maritime og handel",
        subtitleEN: "South Sulawesi - maritime and trade",
        direction: "Makassar, Sulawesi, maritime"
      },
      {
        id: "palembang",
        icon: "🛢️",
        titleDA: "Palembang",
        titleEN: "Palembang",
        subtitleDA: "Syd Sumatra - energi og ressourcer",
        subtitleEN: "South Sumatra - energy and resources",
        direction: "Palembang, Sumatra, energy"
      },
      {
        id: "yogyakarta",
        icon: "🏛️",
        titleDA: "Yogyakarta",
        titleEN: "Yogyakarta",
        subtitleDA: "Kulturelt centrum og uddannelse",
        subtitleEN: "Cultural center and education",
        direction: "Yogyakarta, culture, education"
      },
      {
        id: "balikpapan",
        icon: "🏗️",
        titleDA: "Balikpapan",
        titleEN: "Balikpapan",
        subtitleDA: "Øst Kalimantan - olie og gas",
        subtitleEN: "East Kalimantan - oil and gas",
        direction: "Balikpapan, Kalimantan, oil"
      },
      {
        id: "batam",
        icon: "🏭",
        titleDA: "Batam",
        titleEN: "Batam",
        subtitleDA: "Riau Islands - produktion og shipping",
        subtitleEN: "Riau Islands - manufacturing and shipping",
        direction: "Batam, manufacturing, shipping"
      },
      {
        id: "bogor",
        icon: "🌿",
        titleDA: "Bogor",
        titleEN: "Bogor",
        subtitleDA: "Vest Java - landbrug og forskning",
        subtitleEN: "West Java - agriculture and research",
        direction: "Bogor, agriculture, research"
      },
      {
        id: "malang",
        icon: "🏞️",
        titleDA: "Malang",
        titleEN: "Malang",
        subtitleDA: "Øst Java - turisme og tech",
        subtitleEN: "East Java - tourism and tech",
        direction: "Malang, tourism, tech"
      },
      {
        id: "manado",
        icon: "🐠",
        titleDA: "Manado",
        titleEN: "Manado",
        subtitleDA: "Nord Sulawesi - marine og turisme",
        subtitleEN: "North Sulawesi - marine and tourism",
        direction: "Manado, marine, diving"
      },
      {
        id: "banjarmasin",
        icon: "🛶",
        titleDA: "Banjarmasin",
        titleEN: "Banjarmasin",
        subtitleDA: "Syd Kalimantan - flodhandel",
        subtitleEN: "South Kalimantan - river trade",
        direction: "Banjarmasin, river, trade"
      },
      {
        id: "pekanbaru",
        icon: "🌾",
        titleDA: "Pekanbaru",
        titleEN: "Pekanbaru",
        subtitleDA: "Riau - palmeolie og landbrug",
        subtitleEN: "Riau - palm oil and agriculture",
        direction: "Pekanbaru, palm oil, agriculture"
      },
      {
        id: "denpasar",
        icon: "🌺",
        titleDA: "Denpasar",
        titleEN: "Denpasar",
        subtitleDA: "Bali - hovedby og kultur",
        subtitleEN: "Bali - main city and culture",
        direction: "Denpasar, Bali, culture"
      },
      {
        id: "pontianak",
        icon: "🌉",
        titleDA: "Pontianak",
        titleEN: "Pontianak",
        subtitleDA: "Vest Kalimantan - grænsehandel",
        subtitleEN: "West Kalimantan - border trade",
        direction: "Pontianak, border, trade"
      },
      {
        id: "lombok",
        icon: "🏖️",
        titleDA: "Lombok",
        titleEN: "Lombok",
        subtitleDA: "Øturisme og udvikling",
        subtitleEN: "Island tourism and development",
        direction: "Lombok, tourism, island"
      },
      {
        id: "other",
        icon: "🗺️",
        titleDA: "Anden By / Flere Steder",
        titleEN: "Other City / Multiple Locations",
        subtitleDA: "Jeg er interesseret i flere områder eller en anden by",
        subtitleEN: "I'm interested in multiple areas or another city",
        direction: "Other, multiple, flexible"
      }
    ]
  }
]
