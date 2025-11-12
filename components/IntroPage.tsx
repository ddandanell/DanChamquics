'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

type Language = 'da' | 'en'

interface IntroPageProps {
  onStart: () => void
  language: Language
  setLanguage: (lang: Language) => void
}

export default function IntroPage({ onStart, language, setLanguage }: IntroPageProps) {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setShowContent(true)
  }, [])

  const text = {
    da: {
      headline: "Hvad kan DanCham gøre for dig?",
      subtitle: "6 spørgsmål · 2 minutter · Dit unikke match",
      cta: "🚀 Start Din Rejse",
      scroll: "Scroll for at se hvordan det virker",
      previewCards: [
        "6 Smarte Spørgsmål",
        "Din Personlige Profil",
        "Konkrete Næste Skridt"
      ]
    },
    en: {
      headline: "What can DanCham do for you?",
      subtitle: "6 questions · 2 minutes · Your unique match",
      cta: "🚀 Start Your Journey",
      scroll: "Scroll to see how it works",
      previewCards: [
        "6 Smart Questions",
        "Your Personal Profile",
        "Concrete Next Steps"
      ]
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Language Selector - Fixed Top Right */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50">
        <div className="flex gap-1 sm:gap-2 bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setLanguage('da')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
              language === 'da'
                ? 'bg-dancham-navy text-white shadow-lg'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            🇩🇰 DA
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
              language === 'en'
                ? 'bg-dancham-navy text-white shadow-lg'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            🇬🇧 EN
          </button>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-8">
        {/* DanCham Logo */}
        <motion.div 
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src="/image.png" 
            alt="DanCham Logo" 
            width={300} 
            height={100} 
            className="w-48 sm:w-64 md:w-80 h-auto"
            priority
          />
        </motion.div>

        {/* Headline with Typewriter Effect */}
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dancham-navy mb-3 sm:mb-4 px-2">
              <TypewriterText text={text[language].headline} />
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.8 }}
              className="text-base sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 px-2"
            >
              {text[language].subtitle}
            </motion.p>

            {/* CTA Button with Glow Effect */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 4, duration: 0.5 }}
              onClick={onStart}
              className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-dancham-red text-white text-lg sm:text-xl font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                animate={{
                  opacity: [0, 0.2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <span className="relative flex items-center gap-2">
                {text[language].cta}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, duration: 0.8 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-gray-500 text-sm"
              >
                <div className="flex flex-col items-center gap-2">
                  <span>{text[language].scroll}</span>
                  <div className="flex gap-1">
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                    >
                      ↓
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                    >
                      ↓
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                    >
                      ↓
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Preview Section */}
      <div className="relative z-10 bg-gray-50 py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <PreviewCard
              icon="🎯"
              title={text[language].previewCards[0]}
              delay={0}
            />
            <PreviewCard
              icon="💡"
              title={text[language].previewCards[1]}
              delay={0.2}
            />
            <PreviewCard
              icon="🤝"
              title={text[language].previewCards[2]}
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Flag Merge Component
function FlagMerge() {
  return (
    <div className="relative w-48 h-24 sm:w-64 sm:h-32">
      {/* Danish Flag */}
      <motion.div
        className="absolute left-0 w-16 h-12 sm:w-24 sm:h-16 bg-dancham-red rounded-lg shadow-2xl flex items-center justify-center text-2xl sm:text-4xl"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        🇩🇰
      </motion.div>

      {/* Indonesian Flag */}
      <motion.div
        className="absolute right-0 w-16 h-12 sm:w-24 sm:h-16 bg-indonesian-red rounded-lg shadow-2xl flex items-center justify-center text-2xl sm:text-4xl"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        🇮🇩
      </motion.div>

      {/* DanCham Logo (appears after merge) */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6, type: 'spring' }}
      >
        <motion.div
          className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full shadow-2xl flex items-center justify-center text-4xl sm:text-6xl"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🤝
        </motion.div>
      </motion.div>
    </div>
  )
}

// Typewriter Effect
function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('')
  
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)
    
    return () => clearInterval(interval)
  }, [text])
  
  return <span>{displayText}</span>
}

// Floating Particles
function FloatingParticles() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-20"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        >
          {i % 2 === 0 ? '🇩🇰' : '🇮🇩'}
        </motion.div>
      ))}
    </div>
  )
}

// Preview Card
function PreviewCard({ icon, title, delay }: { icon: string; title: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
    >
      <motion.div
        className="text-4xl sm:text-6xl mb-3 sm:mb-4"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: delay,
        }}
      >
        {icon}
      </motion.div>
      <h3 className="text-dancham-navy text-base sm:text-lg md:text-xl font-bold">{title}</h3>
    </motion.div>
  )
}
