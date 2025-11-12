export type ProfileType = 
  | 'danish-expat-connector'
  | 'growth-entrepreneur'
  | 'indonesian-bridge-builder'
  | 'corporate-career-climber'
  | 'young-professional-explorer'
  | 'institutional-connector'
  | 'veteran-guide'
  | 'curious-newcomer'

export type Profile = {
  id: ProfileType
  icon: string
  nameDA: string
  nameEN: string
  taglineDA: string
  taglineEN: string
  whoYouAreDA: string
  whoYouAreEN: string
  benefitsDA: string[]
  benefitsEN: string[]
  youWillMeetDA: string
  youWillMeetEN: string
  nextStepsDA: string[]
  nextStepsEN: string[]
  recommendedMembership: 'individual' | 'corporate'
  matchingCriteria: {
    q1?: string[]
    q2?: string[]
    q3?: string[]
    q4?: string[]
    q5?: string[]
    q6?: string[]
  }
}

export const profiles: Profile[] = [
  {
    id: 'danish-expat-connector',
    icon: '🇩🇰🤝🌏',
    nameDA: 'The Danish Expat Connector',
    nameEN: 'The Danish Expat Connector',
    taglineDA: 'Du søger både professionelt netværk og en følelse af hjemme',
    taglineEN: 'You seek both professional network and a feeling of home',
    whoYouAreDA: 'Du er dansker i Indonesien der vil have både professionelt netværk og en følelse af hjemme. Du ved at kvalitet og tillid bygges over tid.',
    whoYouAreEN: 'You are Danish in Indonesia who wants both professional network and a feeling of home. You know that quality and trust are built over time.',
    benefitsDA: [
      'Et dansk-talende community hvor du kan være dig selv',
      'Events der blander business og socialt (ikke bare stive møder)',
      'Access til både danske expats og lokale der forstår begge verdener',
      'Et "safety net" når du har brug for råd eller bare en dansk samtale',
      'WhatsApp gruppe med nyheder og spontane meet-ups'
    ],
    benefitsEN: [
      'A Danish-speaking community where you can be yourself',
      'Events that mix business and social (not just stiff meetings)',
      'Access to both Danish expats and locals who understand both worlds',
      'A "safety net" when you need advice or just a Danish conversation',
      'WhatsApp group with news and spontaneous meet-ups'
    ],
    youWillMeetDA: 'Andre danske expats i alle aldre, lokale der arbejder med danske firmaer, skandinaviske kolleger fra andre chambers, folk der har været her i årevis og kan guide dig.',
    youWillMeetEN: 'Other Danish expats of all ages, locals working with Danish companies, Scandinavian colleagues from other chambers, people who have been here for years and can guide you.',
    nextStepsDA: [
      'Kom til næste Chamber Networking Night - vores månedlige social + business event',
      'Tal med andre danske medlemmer om deres erfaringer',
      'Overvej corporate eller individual membership (vi har flere niveauer)',
      'Bliv en del af WhatsApp gruppen hvor vi deler nyheder og spontane meet-ups'
    ],
    nextStepsEN: [
      'Come to the next Chamber Networking Night - our monthly social + business event',
      'Talk to other Danish members about their experiences',
      'Consider corporate or individual membership (we have multiple levels)',
      'Join the WhatsApp group where we share news and spontaneous meet-ups'
    ],
    recommendedMembership: 'individual',
    matchingCriteria: {
      q2: ['danish-roots'],
      q4: ['belonging', 'authentic-relations'],
      q5: ['slow-networker', 'giver-first'],
      q6: ['bicultural-focus', 'professional-social']
    }
  },
  {
    id: 'growth-entrepreneur',
    icon: '🚀💼📈',
    nameDA: 'The Growth Entrepreneur',
    nameEN: 'The Growth Entrepreneur',
    taglineDA: 'Du driver din virksomhed og tid er penge',
    taglineEN: 'You run your business and time is money',
    whoYouAreDA: 'Du driver din egen virksomhed og tid er penge. Du vil netværk der konverterer til faktiske muligheder - ikke bare small talk.',
    whoYouAreEN: 'You run your own business and time is money. You want networking that converts to actual opportunities - not just small talk.',
    benefitsDA: [
      'Direkte adgang til beslutningstagere i både danske og indonesiske firmaer',
      'Trade Council connections der kan åbne døre internationalt',
      'Procurement managers og GMs med reel købekraft',
      'Referrals fra medlemmer der stoler på dig efter at lære dig at kende',
      'Market intelligence: hvem gør hvad, hvilke projekter kommer, hvor er mulighederne'
    ],
    benefitsEN: [
      'Direct access to decision-makers in both Danish and Indonesian companies',
      'Trade Council connections that can open doors internationally',
      'Procurement managers and GMs with real purchasing power',
      'Referrals from members who trust you after getting to know you',
      'Market intelligence: who does what, which projects are coming, where are the opportunities'
    ],
    youWillMeetDA: 'Corporate buyers, andre entrepreneurs (nogle komplementære, andre potentielle partnere), investors der leder efter deals, supply chain leads, GM\'er der har budget-magt.',
    youWillMeetEN: 'Corporate buyers, other entrepreneurs (some complementary, others potential partners), investors looking for deals, supply chain leads, GMs with budget authority.',
    nextStepsDA: [
      'Kom til event MEN kom forberedt - vid præcist hvem du vil møde',
      'Hav din 30-sekunders intro klar (hvad du gør, hvad du søger - ikke salesy)',
      'Fokuser på 5 kvalitetssamtaler i stedet for 20 overfladiske',
      'Følg op dagen efter mens du er fresh in mind',
      'Medlemskab betaler sig tilbage hvis bare én samtale fører til én mulighed'
    ],
    nextStepsEN: [
      'Come to event BUT come prepared - know exactly who you want to meet',
      'Have your 30-second intro ready (what you do, what you seek - not salesy)',
      'Focus on 5 quality conversations instead of 20 superficial ones',
      'Follow up the day after while you\'re fresh in mind',
      'Membership pays for itself if just one conversation leads to one opportunity'
    ],
    recommendedMembership: 'corporate',
    matchingCriteria: {
      q1: ['growth'],
      q3: ['business-owner'],
      q4: ['tangible-results'],
      q5: ['action-taker']
    }
  },
  {
    id: 'indonesian-bridge-builder',
    icon: '🌉🌏🇩🇰',
    nameDA: 'The Indonesian Bridge Builder',
    nameEN: 'The Indonesian Bridge Builder',
    taglineDA: 'Du bygger bro mellem to kulturer',
    taglineEN: 'You build bridges between two cultures',
    whoYouAreDA: 'Du er indonesier der arbejder med danske interesser, eller du navigerer mellem begge verdener. Du forstår værdien af at bygge bro mellem kulturer.',
    whoYouAreEN: 'You are Indonesian working with Danish interests, or you navigate between both worlds. You understand the value of building bridges between cultures.',
    benefitsDA: [
      'Et miljø hvor din unikke bicultural position værdsættes højt',
      'Mulighed for at være cultural translator (det har MEGET værdi!)',
      'Netværk på begge sider - danske der søger lokal indsigt + lokale der vil forstå dansk kultur',
      'Anerkendelse af at du kan se ting andre ikke ser',
      'Platform til at dele dine kulturelle observationer (folk ELSKER det)'
    ],
    benefitsEN: [
      'An environment where your unique bicultural position is highly valued',
      'Opportunity to be a cultural translator (that has LOTS of value!)',
      'Network on both sides - Danes seeking local insight + locals wanting to understand Danish culture',
      'Recognition that you can see things others cannot',
      'Platform to share your cultural observations (people LOVE it)'
    ],
    youWillMeetDA: 'Danske expats der kæmper med at forstå hvordan ting fungerer her, danske HQ-folk der besøger og har brug for lokal guidance, andre bicultural professionals som dig, cultural trainers, HR folk der håndterer cross-cultural teams.',
    youWillMeetEN: 'Danish expats struggling to understand how things work here, Danish HQ people visiting who need local guidance, other bicultural professionals like you, cultural trainers, HR people managing cross-cultural teams.',
    nextStepsDA: [
      'Kom til event og vær autentisk dig selv',
      'Del dine observationer om kulturforskelle (både direction: DK→ID og ID→DK)',
      'Tilbyd at hjælpe andre med cultural navigation',
      'Byg dit personlige brand som cultural bridge-builder',
      'Det er en niche der har stor efterspørgsel!'
    ],
    nextStepsEN: [
      'Come to event and be authentically yourself',
      'Share your observations about cultural differences (both directions: DK→ID and ID→DK)',
      'Offer to help others with cultural navigation',
      'Build your personal brand as cultural bridge-builder',
      'It\'s a niche with great demand!'
    ],
    recommendedMembership: 'individual',
    matchingCriteria: {
      q2: ['indonesian', 'cross-cultural'],
      q4: ['authentic-relations'],
      q5: ['giver-first'],
      q6: ['bicultural-focus']
    }
  },
  {
    id: 'corporate-career-climber',
    icon: '🏢📊⬆️',
    nameDA: 'The Corporate Career Climber',
    nameEN: 'The Corporate Career Climber',
    taglineDA: 'Du ved at karriere accelereres gennem netværk',
    taglineEN: 'You know that careers accelerate through networking',
    whoYouAreDA: 'Du arbejder i en større organisation og ved at karriere accelereres gennem netværk. Du søger mentorer, role models, og strategiske forbindelser.',
    whoYouAreEN: 'You work in a larger organization and know that careers accelerate through networking. You seek mentors, role models, and strategic connections.',
    benefitsDA: [
      'Access til senior leaders i både danske og indonesiske firmaer',
      'Mentorskab fra folk der har gået karrierevejen før dig',
      'Indsigt i hvordan andre companies tackler challenges (lær uden at skifte job)',
      'Mulighed for at blive synlig for decision-makers og headhuntere',
      'Adgang til jobs der aldrig slås op offentligt (mange fills gennem netværk)'
    ],
    benefitsEN: [
      'Access to senior leaders in both Danish and Indonesian companies',
      'Mentorship from people who have walked the career path before you',
      'Insight into how other companies tackle challenges (learn without changing jobs)',
      'Opportunity to become visible to decision-makers and headhunters',
      'Access to jobs that are never posted publicly (many filled through networking)'
    ],
    youWillMeetDA: 'CFOs, Country Managers, Regional Directors, HR Leaders, andre corporate professionals på vej op, folk der kan åbne døre for dit næste karriereskridt.',
    youWillMeetEN: 'CFOs, Country Managers, Regional Directors, HR Leaders, other corporate professionals on the way up, people who can open doors for your next career step.',
    nextStepsDA: [
      'Kom til Chamber Night og identificér 2-3 seniore du vil lære fra',
      'Spørg: "Hvad ville du ønske du vidste på mit niveau?"',
      'Følg op og bed om 20 min coffee chat',
      'Lyt mere end du taler - byg ægte relationer',
      'Overvej membership (det er en investering i din karriere)'
    ],
    nextStepsEN: [
      'Come to Chamber Night and identify 2-3 seniors you want to learn from',
      'Ask: "What do you wish you knew at my level?"',
      'Follow up and ask for a 20 min coffee chat',
      'Listen more than you talk - build genuine relationships',
      'Consider membership (it\'s an investment in your career)'
    ],
    recommendedMembership: 'individual',
    matchingCriteria: {
      q1: ['networking', 'learning'],
      q3: ['employed'],
      q4: ['guidance', 'authentic-relations'],
      q5: ['slow-networker']
    }
  },
  {
    id: 'young-professional-explorer',
    icon: '🌱💡🎯',
    nameDA: 'The Young Professional Explorer',
    nameEN: 'The Young Professional Explorer',
    taglineDA: 'Du er ved at finde ud af hvordan networking fungerer for dig',
    taglineEN: 'You are figuring out how networking works for you',
    whoYouAreDA: 'Du er yngre (eller yngre i dit career journey) og ved at netværk er vigtigt - men du er stadig ved at finde ud af hvordan du fitter ind.',
    whoYouAreEN: 'You are younger (or younger in your career journey) and know that networking is important - but you are still figuring out how you fit in.',
    benefitsDA: [
      'Et safe space til at lære networking uden pressure',
      'Mentorskab fra senior professionals (mange vil hjælpe!)',
      'Læring du ikke får på jobbet: hvordan man bygger karriere strategisk',
      'Community af andre young professionals i samme situation',
      'Billigere membership rate for unge (vi vil gerne hjælpe dig i gang)'
    ],
    benefitsEN: [
      'A safe space to learn networking without pressure',
      'Mentorship from senior professionals (many want to help!)',
      'Learning you don\'t get at work: how to build careers strategically',
      'Community of other young professionals in the same situation',
      'Cheaper membership rate for young people (we want to help you get started)'
    ],
    youWillMeetDA: 'Alt fra CEOs til andre i 20-30\'erne. De seniore husker at de var unge engang. De fleste er faktisk åbne hvis du approacher ordentligt (vær nysgerrig, ikke desperate).',
    youWillMeetEN: 'Everything from CEOs to others in their 20-30s. The seniors remember being young once. Most are actually open if you approach properly (be curious, not desperate).',
    nextStepsDA: [
      'Kom til et event - bare for at se hvordan det fungerer',
      'Forbered 2-3 smarte spørgsmål (folk elsker at hjælpe hvis du viser ægte interesse)',
      'Lyt mere end du taler',
      'Følg op med tak og evt. konkrete follow-up spørgsmål',
      'Young professional rate gør det affordable at starte tidligt'
    ],
    nextStepsEN: [
      'Come to an event - just to see how it works',
      'Prepare 2-3 smart questions (people love to help if you show genuine interest)',
      'Listen more than you talk',
      'Follow up with thanks and possibly concrete follow-up questions',
      'Young professional rate makes it affordable to start early'
    ],
    recommendedMembership: 'individual',
    matchingCriteria: {
      q1: ['learning', 'community'],
      q3: ['transition', 'employed'],
      q5: ['figuring-out'],
      q6: ['professional-social']
    }
  },
  {
    id: 'institutional-connector',
    icon: '🏛️🤝🌐',
    nameDA: 'The Institutional Connector',
    nameEN: 'The Institutional Connector',
    taglineDA: 'Du forbinder mennesker og faciliterer samarbejde',
    taglineEN: 'You connect people and facilitate collaboration',
    whoYouAreDA: 'Du arbejder for ambassade, Trade Council, eller en dansk organisation. Du er en del af det officielle økosystem og søger at connecte rigtige mennesker.',
    whoYouAreEN: 'You work for embassy, Trade Council, or a Danish organization. You are part of the official ecosystem and seek to connect the right people.',
    benefitsDA: [
      'Direct line til dansk business community i Indonesien',
      'Platform til at promovere danske initiativer og events',
      'Pulse på hvad der faktisk sker on the ground (ikke bare rapporter)',
      'Mulighed for at facilitere connections mellem danske og indonesiske firmaer',
      'Complement til dit officielle arbejde gennem uformelt netværk'
    ],
    benefitsEN: [
      'Direct line to Danish business community in Indonesia',
      'Platform to promote Danish initiatives and events',
      'Pulse on what actually happens on the ground (not just reports)',
      'Opportunity to facilitate connections between Danish and Indonesian companies',
      'Complement to your official work through informal network'
    ],
    youWillMeetDA: 'Danske virksomheder du skal supportere, indonesiske partnere der søger danske connections, andre Nordic chambers, diplomatic community, decision-makers på begge sider.',
    youWillMeetEN: 'Danish companies you should support, Indonesian partners seeking Danish connections, other Nordic chambers, diplomatic community, decision-makers on both sides.',
    nextStepsDA: [
      'Koordinér med DanCham ledelse om collaboration',
      'Deltag i events for at møde de virksomheder du skal hjælpe',
      'Overvej institutional membership',
      'Brug DanCham som kanal til at nå dansk business community'
    ],
    nextStepsEN: [
      'Coordinate with DanCham leadership about collaboration',
      'Attend events to meet the companies you should help',
      'Consider institutional membership',
      'Use DanCham as channel to reach Danish business community'
    ],
    recommendedMembership: 'corporate',
    matchingCriteria: {
      q3: ['institutional'],
      q4: ['authentic-relations'],
      q5: ['giver-first'],
      q6: ['danish-ecosystem']
    }
  },
  {
    id: 'veteran-guide',
    icon: '🏆🧭📚',
    nameDA: 'The Veteran Guide',
    nameEN: 'The Veteran Guide',
    taglineDA: 'Du har erfaring og vil give tilbage',
    taglineEN: 'You have experience and want to give back',
    whoYouAreDA: 'Du har været her længe, set det meste, og ved hvordan tingene fungerer. Dit netværk er din største asset, og du vil gerne give tilbage.',
    whoYouAreEN: 'You have been here a long time, seen most things, and know how things work. Your network is your biggest asset, and you want to give back.',
    benefitsDA: [
      'Peers at sammenligne strategiske noter med (de challenges du face er unikke)',
      'Mulighed for at mentorere næste generation (surprisingly rewarding!)',
      'Adgang til fresh perspectives fra yngre medlemmer',
      'Strategic partnerships med andre veteraner',
      'Holder dig relevant og opdateret i et skiftende marked'
    ],
    benefitsEN: [
      'Peers to compare strategic notes with (the challenges you face are unique)',
      'Opportunity to mentor the next generation (surprisingly rewarding!)',
      'Access to fresh perspectives from younger members',
      'Strategic partnerships with other veterans',
      'Keeps you relevant and updated in a changing market'
    ],
    youWillMeetDA: 'Andre veteraner der forstår kompleksiteten, yngre talenter der søger din guidance, decision-makers på dit niveau, folk der transition til næste fase.',
    youWillMeetEN: 'Other veterans who understand the complexity, younger talents seeking your guidance, decision-makers at your level, people transitioning to the next phase.',
    nextStepsDA: [
      'Kom til event og del dine erfaringer generøst',
      'Find 1-2 yngre folk at mentorere (det giver mere end du tror)',
      'Connect med andre veteraner om fælles strategic challenges',
      'Din viden og netværk er ekstremt værdifuld - brug det aktivt'
    ],
    nextStepsEN: [
      'Come to event and share your experiences generously',
      'Find 1-2 younger people to mentor (it gives more than you think)',
      'Connect with other veterans about common strategic challenges',
      'Your knowledge and network are extremely valuable - use it actively'
    ],
    recommendedMembership: 'corporate',
    matchingCriteria: {
      q1: ['networking'],
      q4: ['authentic-relations'],
      q5: ['giver-first', 'slow-networker'],
      q6: ['quality-over-quantity']
    }
  },
  {
    id: 'curious-newcomer',
    icon: '🆕👀🗺️',
    nameDA: 'The Curious Newcomer',
    nameEN: 'The Curious Newcomer',
    taglineDA: 'Du er ny og vil lære hvordan det fungerer',
    taglineEN: 'You are new and want to learn how it works',
    whoYouAreDA: 'Du er relativt ny til dansk-indonesisk business (eller business networking generelt). Alt er nyt og du vil gerne forstå hvordan det fungerer.',
    whoYouAreEN: 'You are relatively new to Danish-Indonesian business (or business networking in general). Everything is new and you want to understand how it works.',
    benefitsDA: [
      'Massiv shortcut på læringskurven (lær fra andres fejl!)',
      'Praktiske svar på konkrete spørgsmål (ikke teoretisk bullshit)',
      'Cultural dos and don\'ts fra folk der lærte det hårde vej',
      'Realistic view af markedet (ikke poleret marketing)',
      'Trygt miljø til at stille "dumme" spørgsmål'
    ],
    benefitsEN: [
      'Massive shortcut on the learning curve (learn from others\' mistakes!)',
      'Practical answers to concrete questions (not theoretical bullshit)',
      'Cultural dos and don\'ts from people who learned the hard way',
      'Realistic view of the market (not polished marketing)',
      'Safe environment to ask "dumb" questions'
    ],
    youWillMeetDA: 'Veteraner der husker at være ny og gerne deler erfaringer, andre relativt nye (I er i samme båd!), lokale der kan forklare kontekst, expats der navigerer kulturforskelle.',
    youWillMeetEN: 'Veterans who remember being new and happily share experiences, other relatively new people (you\'re in the same boat!), locals who can explain context, expats navigating cultural differences.',
    nextStepsDA: [
      'Kom til et event med en notesbog (mentalt eller fysisk)',
      'Stil spørgsmål som: "Hvad ville du ønske du vidste da du startede her?"',
      'Lyt og absorber',
      'Følg op med dem der giver de bedste insights',
      'Om et par år kan DU være den der guider de nye!'
    ],
    nextStepsEN: [
      'Come to an event with a notebook (mental or physical)',
      'Ask questions like: "What do you wish you knew when you started here?"',
      'Listen and absorb',
      'Follow up with those who give the best insights',
      'In a couple of years YOU can be the one guiding the new ones!'
    ],
    recommendedMembership: 'individual',
    matchingCriteria: {
      q1: ['learning'],
      q2: ['curious'],
      q5: ['figuring-out'],
      q6: ['bicultural-focus', 'professional-social']
    }
  }
]

export function matchProfile(answers: { questionId: number; answerId: string }[]): Profile {
  let bestMatch: Profile = profiles[0]
  let highestScore = 0

  profiles.forEach(profile => {
    let score = 0
    
    answers.forEach(answer => {
      const questionKey = `q${answer.questionId}` as keyof typeof profile.matchingCriteria
      const criteria = profile.matchingCriteria[questionKey]
      
      if (criteria && criteria.includes(answer.answerId)) {
        score += 1
      }
    })

    if (score > highestScore) {
      highestScore = score
      bestMatch = profile
    }
  })

  return bestMatch
}
