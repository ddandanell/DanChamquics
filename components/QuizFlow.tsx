'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { quizQuestions, type Question } from '@/data/questions'
import confetti from 'canvas-confetti'

type Language = 'da' | 'en'

interface QuizFlowProps {
  onComplete: (answers: { questionId: number; answerId: string }[]) => void
  language: Language
  setLanguage: (lang: Language) => void
}

export default function QuizFlow({ onComplete, language, setLanguage }: QuizFlowProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ questionId: number; answerId: string }[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward')

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  const text = {
    da: {
      question: 'Spørgsmål',
      of: 'af',
      back: 'Tilbage',
      next: 'Næste',
      seeResult: 'Se Mit Resultat'
    },
    en: {
      question: 'Question',
      of: 'of',
      back: 'Back',
      next: 'Next',
      seeResult: 'See My Result'
    }
  }

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId)
    
    // Micro confetti on selection
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#C60C30', '#003366', '#FF0000'],
    })
  }

  const handleNext = () => {
    if (!selectedAnswer) return

    const newAnswers = [...answers]
    const existingIndex = newAnswers.findIndex(a => a.questionId === question.id)
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex] = { questionId: question.id, answerId: selectedAnswer }
    } else {
      newAnswers.push({ questionId: question.id, answerId: selectedAnswer })
    }
    
    setAnswers(newAnswers)
    setSelectedAnswer(null)
    setDirection('forward')

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      
      // Progress confetti
      confetti({
        particleCount: 20,
        angle: 90,
        spread: 45,
        origin: { x: progress / 100, y: 0 },
        colors: ['#C60C30'],
      })
    } else {
      // Quiz complete - BIG confetti!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C60C30', '#003366', '#FF0000'],
      })
      
      setTimeout(() => {
        onComplete(newAnswers)
      }, 1000)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setDirection('backward')
      setCurrentQuestion(currentQuestion - 1)
      
      // Restore previous answer
      const prevAnswer = answers.find(a => a.questionId === quizQuestions[currentQuestion - 1].id)
      setSelectedAnswer(prevAnswer?.answerId || null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dancham-navy to-dancham-red flex items-center justify-center px-3 sm:px-4 py-4 sm:py-8">
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

      <div className="max-w-3xl w-full">
        {/* Progress Bar */}
        <ProgressBar 
          progress={progress} 
          currentQuestion={currentQuestion + 1} 
          total={quizQuestions.length} 
          language={language}
        />

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ 
              opacity: 0, 
              x: direction === 'forward' ? 100 : -100 
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ 
              opacity: 0, 
              x: direction === 'forward' ? -100 : 100 
            }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 mt-4 sm:mt-6 md:mt-8"
          >
            {/* Question Header */}
            <div className="text-center mb-6 sm:mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4"
              >
                {question.iconHeader}
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-dancham-navy mb-2 px-2"
              >
                {language === 'da' ? question.titleDA : question.titleEN}
              </motion.h2>
            </div>

            {/* Answer Options */}
            <div className="space-y-3 sm:space-y-4">
              {question.options.map((option, index) => (
                <motion.button
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  onClick={() => handleAnswerSelect(option.id)}
                  className={`w-full text-left p-4 sm:p-5 md:p-6 rounded-xl border-2 transition-all duration-300 ${
                    selectedAnswer === option.id
                      ? 'border-dancham-red bg-dancham-red text-white shadow-lg scale-105'
                      : 'border-gray-200 bg-white hover:border-dancham-red hover:shadow-md hover:scale-102'
                  }`}
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="text-2xl sm:text-3xl flex-shrink-0">{option.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 sm:mb-2">
                        {selectedAnswer === option.id && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-lg sm:text-xl"
                          >
                            ✓
                          </motion.span>
                        )}
                        <h3 className="font-bold text-base sm:text-lg">
                          {language === 'da' ? option.titleDA : option.titleEN}
                        </h3>
                      </div>
                      {option.subtitleDA && (
                        <p className={`text-xs sm:text-sm ${selectedAnswer === option.id ? 'text-white/90' : 'text-gray-600'}`}>
                          {language === 'da' ? option.subtitleDA : option.subtitleEN}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 gap-3">
              <motion.button
                whileHover={{ x: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBack}
                disabled={currentQuestion === 0}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all ${
                  currentQuestion === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-dancham-navy hover:bg-gray-100'
                }`}
              >
                {text[language].back} ←
              </motion.button>

              <motion.button
                whileHover={{ x: 3, scale: selectedAnswer ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                disabled={!selectedAnswer}
                className={`px-5 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-bold transition-all ${
                  selectedAnswer
                    ? 'bg-dancham-red text-white hover:bg-red-700 shadow-lg animate-pulse-glow'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <span className="hidden sm:inline">
                  {currentQuestion === quizQuestions.length - 1 ? text[language].seeResult : text[language].next} →
                </span>
                <span className="sm:hidden">
                  {currentQuestion === quizQuestions.length - 1 ? '✓' : '→'}
                </span>
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

// Progress Bar Component
function ProgressBar({ progress, currentQuestion, total, language }: { progress: number; currentQuestion: number; total: number; language: Language }) {
  const text = {
    da: { question: 'Spørgsmål', of: 'af', start: 'START', result: 'RESULTAT' },
    en: { question: 'Question', of: 'of', start: 'START', result: 'RESULT' }
  }
  
  return (
    <div className="bg-white rounded-full p-3 sm:p-4 shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs sm:text-sm font-semibold text-dancham-navy">
          {text[language].question} <motion.span key={currentQuestion} initial={{ scale: 1.5 }} animate={{ scale: 1 }}>{currentQuestion}</motion.span> {text[language].of} {total}
        </span>
        <span className="text-xs sm:text-sm font-semibold text-dancham-red">{Math.round(progress)}%</span>
      </div>
      
      <div className="h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-dancham-red to-indonesian-red rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>
      
      {/* Journey Line - Hidden on mobile */}
      <div className="hidden sm:flex items-center justify-between mt-4">
        <span className="text-xs text-gray-500">{text[language].start}</span>
        <div className="flex-1 mx-4 relative">
          <div className="h-1 bg-gray-200 rounded-full">
            <motion.div
              className="h-full bg-dancham-red rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-dancham-red rounded-full border-2 border-white shadow-lg"
            animate={{ left: `${progress}%` }}
            transition={{ duration: 0.6 }}
          />
        </div>
        <span className="text-xs text-gray-500">{text[language].result}</span>
      </div>
    </div>
  )
}
