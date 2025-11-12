'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { matchProfile } from '@/data/profiles'

type Language = 'da' | 'en'

interface ResultPageProps {
  answers: { questionId: number; answerId: string }[]
  language: Language
}

export default function ResultPage({ answers, language }: ResultPageProps) {
  const [loading, setLoading] = useState(true)
  const [confettiDone, setConfettiDone] = useState(false)
  const profile = matchProfile(answers)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
      // Trigger confetti
      if (typeof window !== 'undefined') {
        import('canvas-confetti').then((confetti) => {
          confetti.default({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.4 },
            colors: ['#C60C30', '#003366', '#FF0000'],
          })
          
          setTimeout(() => {
            setConfettiDone(true)
          }, 3000)
        })
      }
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const text = {
    da: {
      yourProfile: '👏 Her er din DanCham-profil:',
      whoYouAre: 'HVEM DU ER',
      whatYouGet: 'HVAD DANCHAM GIVER DIG',
      whoYouMeet: 'MEDLEMMER DU VIL MØDE',
      nextSteps: 'ANBEFALEDE FØRSTE SKRIDT',
      membership: '💼 DIT MEDLEMSKAB',
      basedOnProfile: 'Baseret på din profil anbefaler vi:',
      perYear: 'per år',
      joinNow: 'Tilmeld Dig Nu →',
      special: '🎁 Special: Første event gratis!',
      share: 'DEL DIT RESULTAT MED ANDRE',
      shareSubtitle: 'Viser dine kontakter hvem du er i dansk-indonesisk business-netværk',
      copyLink: '🔗 Kopiér Link',
      copied: '✓ Kopieret!',
      shareLinkedIn: 'Share på LinkedIn',
      email: '📧 Email'
    },
    en: {
      yourProfile: '👏 Here is your DanCham profile:',
      whoYouAre: 'WHO YOU ARE',
      whatYouGet: 'WHAT DANCHAM GIVES YOU',
      whoYouMeet: 'MEMBERS YOU WILL MEET',
      nextSteps: 'RECOMMENDED FIRST STEPS',
      membership: '💼 YOUR MEMBERSHIP',
      basedOnProfile: 'Based on your profile we recommend:',
      perYear: 'per year',
      joinNow: 'Join Now →',
      special: '🎁 Special: First event free!',
      share: 'SHARE YOUR RESULT WITH OTHERS',
      shareSubtitle: 'Show your contacts who you are in Danish-Indonesian business network',
      copyLink: '🔗 Copy Link',
      copied: '✓ Copied!',
      shareLinkedIn: 'Share on LinkedIn',
      email: '📧 Email'
    }
  }

  if (loading) {
    return <LoadingScreen language={language} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-dancham-navy via-dancham-red to-indonesian-red text-white py-20 px-4 relative overflow-hidden">
        {confettiDone && <FloatingConfetti />}
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Profile Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 1 }}
            className="mb-6 sm:mb-8"
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full flex items-center justify-center text-4xl sm:text-6xl shadow-2xl mx-auto">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  {profile.icon}
                </motion.span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="px-4"
          >
            <p className="text-base sm:text-xl mb-2">{text[language].yourProfile}</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              {language === 'da' ? profile.nameDA : profile.nameEN}
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90">
              {language === 'da' ? profile.taglineDA : profile.taglineEN}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-8 sm:py-12 space-y-8 sm:space-y-12">
        {/* Who You Are */}
        <WhoYouAreSection profile={profile} language={language} text={text[language]} />
        
        {/* What You Get */}
        <BenefitsSection profile={profile} language={language} text={text[language]} />
        
        {/* Who You'll Meet */}
        <WhoYouMeetSection profile={profile} language={language} text={text[language]} />
        
        {/* Next Steps */}
        <NextStepsSection profile={profile} language={language} text={text[language]} />
        
        {/* Membership */}
        <MembershipSection profile={profile} language={language} text={text[language]} />
        
        {/* Social Sharing */}
        <SocialShareSection profileName={language === 'da' ? profile.nameDA : profile.nameEN} language={language} text={text[language]} />
      </div>
    </div>
  )
}

// Loading Screen
function LoadingScreen({ language }: { language: Language }) {
  const [funFact, setFunFact] = useState(0)
  
  const funFactsDA = [
    "DanCham blev grundlagt i 1984",
    "Vi holder 12+ events om året",
    "50-100 aktive medlemmer",
    "Connected til alle Nordiske chambers",
  ]
  
  const funFactsEN = [
    "DanCham was founded in 1984",
    "We hold 12+ events per year",
    "50-100 active members",
    "Connected to all Nordic chambers",
  ]
  
  const funFacts = language === 'da' ? funFactsDA : funFactsEN
  const analyzingText = language === 'da' ? 'Analyserer dine svar...' : 'Analyzing your answers...'
  const funFactsLabel = language === 'da' ? 'Fun facts mens du venter:' : 'Fun facts while you wait:'

  useEffect(() => {
    const interval = setInterval(() => {
      setFunFact(prev => (prev + 1) % funFacts.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [funFacts.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-dancham-navy to-dancham-red flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="text-8xl mb-8"
        >
          🤝
        </motion.div>
        
        <h2 className="text-2xl font-bold text-white mb-4">
          {analyzingText}
        </h2>
        
        <div className="max-w-md mx-auto mb-8">
          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
            />
          </div>
        </div>
        
        <div className="text-white">
          <p className="text-sm mb-2">{funFactsLabel}</p>
          <motion.p
            key={funFact}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-lg font-semibold"
          >
            &ldquo;{funFacts[funFact]}&rdquo;
          </motion.p>
        </div>
      </div>
    </div>
  )
}

// Who You Are Section
function WhoYouAreSection({ profile, language, text }: { profile: any; language: Language; text: any }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg"
    >
      <div className="border-b-4 border-dancham-red pb-2 mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-dancham-navy">{text.whoYouAre}</h2>
      </div>
      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
        {language === 'da' ? profile.whoYouAreDA : profile.whoYouAreEN}
      </p>
    </motion.section>
  )
}

// Benefits Section
function BenefitsSection({ profile, language, text }: { profile: any; language: Language; text: any }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const benefits = language === 'da' ? profile.benefitsDA : profile.benefitsEN

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg"
    >
      <div className="border-b-4 border-dancham-red pb-2 mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-dancham-navy">{text.whatYouGet}</h2>
      </div>
      <ul className="space-y-3 sm:space-y-4">
        {benefits.map((benefit: string, index: number) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="flex items-start gap-2 sm:gap-3"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.2, type: 'spring' }}
              className="text-dancham-red text-xl sm:text-2xl flex-shrink-0"
            >
              ✓
            </motion.span>
            <span className="text-gray-700 text-sm sm:text-base md:text-lg">{benefit}</span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  )
}

// Who You'll Meet Section
function WhoYouMeetSection({ profile, language, text }: { profile: any; language: Language; text: any }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg"
    >
      <div className="border-b-4 border-dancham-red pb-2 mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-dancham-navy">{text.whoYouMeet}</h2>
      </div>
      
      {/* Avatar Grid */}
      <div className="flex justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
        {['👔', '💼', '🎯', '🌏', '🤝', '💡', '🚀', '📊'].map((emoji, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, rotate: 0 }}
            animate={inView ? { scale: 1, rotate: 15 } : {}}
            transition={{ delay: index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.2, rotate: 0 }}
            className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-dancham-red to-indonesian-red rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-lg cursor-pointer"
          >
            {emoji}
          </motion.div>
        ))}
      </div>
      
      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
        {language === 'da' ? profile.youWillMeetDA : profile.youWillMeetEN}
      </p>
    </motion.section>
  )
}

// Next Steps Section
function NextStepsSection({ profile, language, text }: { profile: any; language: Language; text: any }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const nextSteps = language === 'da' ? profile.nextStepsDA : profile.nextStepsEN
  
  const ctaText = {
    da: { events: '📅 Se Kommende Events', intro: '💬 Book Intro-Samtale', info: '📧 Få Mere Info' },
    en: { events: '📅 See Upcoming Events', intro: '💬 Book Intro Call', info: '📧 Get More Info' }
  }

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-dancham-navy to-dancham-red text-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg"
    >
      <div className="border-b-4 border-white pb-2 mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{text.nextSteps}</h2>
      </div>
      
      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        {nextSteps.map((step: string, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="flex items-start gap-3 sm:gap-4 bg-white/10 rounded-lg p-3 sm:p-4"
          >
            <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-white text-dancham-red rounded-full flex items-center justify-center text-sm sm:text-base font-bold">
              {index + 1}
            </span>
            <p className="text-sm sm:text-base md:text-lg">{step}</p>
          </motion.div>
        ))}
      </div>
      
      {/* CTA Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-dancham-red font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:shadow-xl transition-all text-sm sm:text-base"
        >
          {ctaText[language].events}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/20 border-2 border-white text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-white/30 transition-all text-sm sm:text-base"
        >
          {ctaText[language].intro}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/20 border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white/30 transition-all"
        >
          {ctaText[language].info}
        </motion.button>
      </div>
    </motion.section>
  )
}

// Membership Section
function MembershipSection({ profile, language, text }: { profile: any; language: Language; text: any }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [count, setCount] = useState(0)
  const price = profile.recommendedMembership === 'corporate' ? 5000000 : 2000000
  
  const membershipNames = {
    da: { corporate: 'CORPORATE MEMBER', individual: 'INDIVIDUAL MEMBER' },
    en: { corporate: 'CORPORATE MEMBER', individual: 'INDIVIDUAL MEMBER' }
  }
  
  const benefits = {
    da: ['Adgang til alle events', 'Member directory', 'Newsletter & updates', 'WhatsApp community'],
    en: ['Access to all events', 'Member directory', 'Newsletter & updates', 'WhatsApp community']
  }

  useEffect(() => {
    if (inView) {
      let start = 0
      const duration = 1500
      const increment = price / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= price) {
          setCount(price)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      
      return () => clearInterval(timer)
    }
  }, [inView, price])

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border-4 border-dancham-red"
    >
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-dancham-navy mb-2">{text.membership}</h2>
        <p className="text-sm sm:text-base text-gray-600">{text.basedOnProfile}</p>
      </div>
      
      <div className="bg-gradient-to-br from-dancham-red to-indonesian-red text-white rounded-xl p-4 sm:p-6 md:p-8 shadow-xl">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-center">
          {profile.recommendedMembership === 'corporate' 
            ? membershipNames[language].corporate 
            : membershipNames[language].individual}
        </h3>
        
        <ul className="space-y-2 mb-4 sm:mb-6">
          {benefits[language].map((benefit, i) => (
            <li key={i} className="flex items-center gap-2 text-sm sm:text-base">✓ {benefit}</li>
          ))}
        </ul>
        
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            IDR {count.toLocaleString('id-ID')}
          </p>
          <p className="text-white/80 text-sm sm:text-base">{text.perYear}</p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-white text-dancham-red font-bold py-3 sm:py-4 rounded-lg text-base sm:text-lg hover:shadow-xl transition-all"
        >
          {text.joinNow}
        </motion.button>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.5, type: 'spring' }}
          className="mt-3 sm:mt-4 text-center bg-white/20 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base"
        >
          {text.special}
        </motion.div>
      </div>
    </motion.section>
  )
}

// Social Share Section
function SocialShareSection({ profileName, language, text }: { profileName: string; language: Language; text: any }) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 text-center"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-dancham-navy mb-3 sm:mb-4">
        {text.share}
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
        {text.shareSubtitle}
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopyLink}
          className="bg-dancham-navy text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-opacity-90 transition-all"
        >
          {copied ? text.copied : text.copyLink}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition-all"
        >
          {text.shareLinkedIn}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-700 transition-all"
        >
          {text.email}
        </motion.button>
      </div>
    </motion.section>
  )
}

// Floating Confetti
function FloatingConfetti() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null
  
  const width = typeof window !== 'undefined' ? window.innerWidth : 1920
  const height = typeof window !== 'undefined' ? window.innerHeight : 1080
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          initial={{
            x: Math.random() * width,
            y: -50,
            rotate: 0,
          }}
          animate={{
            y: height + 50,
            rotate: 360,
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        >
          {['🎉', '🎊', '⭐', '✨'][Math.floor(Math.random() * 4)]}
        </motion.div>
      ))}
    </div>
  )
}
