'use client'

import { useState } from 'react'
import IntroPage from '@/components/IntroPage'
import QuizFlow from '@/components/QuizFlow'
import ContactForm from '@/components/ContactForm'
import ResultPage from '@/components/ResultPage'

export type Answer = {
  questionId: number
  answerId: string
}

export type ContactData = {
  name: string
  email: string
}

export type Language = 'da' | 'en'

export default function Home() {
  const [stage, setStage] = useState<'intro' | 'quiz' | 'contact' | 'result'>('intro')
  const [answers, setAnswers] = useState<Answer[]>([])
  const [contactData, setContactData] = useState<ContactData>({ name: '', email: '' })
  const [language, setLanguage] = useState<Language>('da')

  const handleStartQuiz = () => {
    setStage('quiz')
  }

  const handleQuizComplete = (quizAnswers: Answer[]) => {
    setAnswers(quizAnswers)
    setStage('contact')
  }

  const handleContactSubmit = (name: string, email: string) => {
    setContactData({ name, email })
    setStage('result')
  }

  return (
    <main className="min-h-screen">
      {stage === 'intro' && <IntroPage onStart={handleStartQuiz} language={language} setLanguage={setLanguage} />}
      {stage === 'quiz' && <QuizFlow onComplete={handleQuizComplete} language={language} />}
      {stage === 'contact' && <ContactForm onSubmit={handleContactSubmit} language={language} />}
      {stage === 'result' && <ResultPage answers={answers} contactData={contactData} language={language} />}
    </main>
  )
}
