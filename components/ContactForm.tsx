'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

type Language = 'da' | 'en'

interface ContactFormProps {
  onSubmit: (name: string, email: string) => void
  language: Language
  setLanguage: (lang: Language) => void
}

export default function ContactForm({ onSubmit, language, setLanguage }: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const text = {
    da: {
      title: "Næsten færdig! 🎉",
      subtitle: "Indtast dine oplysninger for at se dit personlige resultat",
      nameLabel: "Dit navn",
      namePlaceholder: "Indtast dit fulde navn",
      emailLabel: "Din email",
      emailPlaceholder: "din@email.com",
      button: "Se Mit Resultat →",
      errorName: "Indtast venligst dit navn",
      errorEmail: "Indtast venligst en gyldig email"
    },
    en: {
      title: "Almost done! 🎉",
      subtitle: "Enter your information to see your personalized result",
      nameLabel: "Your name",
      namePlaceholder: "Enter your full name",
      emailLabel: "Your email",
      emailPlaceholder: "your@email.com",
      button: "Show My Result →",
      errorName: "Please enter your name",
      errorEmail: "Please enter a valid email"
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError(text[language].errorName)
      return
    }

    if (!email.trim() || !email.includes('@')) {
      setError(text[language].errorEmail)
      return
    }

    onSubmit(name, email)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dancham-navy via-dancham-navy to-dancham-red flex items-center justify-center px-4 py-8">
      {/* Language Selector - Fixed Top Right */}
      <div className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50">
        <div className="flex gap-1 sm:gap-2 bg-white/10 backdrop-blur-md rounded-full p-1">
          <button
            onClick={() => setLanguage('da')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
              language === 'da'
                ? 'bg-white text-dancham-navy shadow-lg'
                : 'text-white hover:bg-white/20'
            }`}
          >
            🇩🇰 DA
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
              language === 'en'
                ? 'bg-white text-dancham-navy shadow-lg'
                : 'text-white hover:bg-white/20'
            }`}
          >
            🇬🇧 EN
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dancham-navy mb-2">
            {text[language].title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            {text[language].subtitle}
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {text[language].nameLabel}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={text[language].namePlaceholder}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-dancham-navy focus:outline-none transition-colors text-base"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {text[language].emailLabel}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={text[language].emailPlaceholder}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-dancham-navy focus:outline-none transition-colors text-base"
            />
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
            >
              {error}
            </motion.div>
          )}

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            type="submit"
            className="w-full bg-dancham-red text-white font-bold py-3 sm:py-4 rounded-lg text-base sm:text-lg hover:bg-red-700 transition-colors duration-300 hover:scale-105 transform"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {text[language].button}
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}
