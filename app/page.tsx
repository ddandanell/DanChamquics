'use client'

import { useState } from 'react'
import IntroPage from '@/components/IntroPage'
import QuizFlow from '@/components/QuizFlow'
import LeadCapture from '@/components/LeadCapture'
import ResultPage from '@/components/ResultPage'

export type Answer = {
  questionId: number
  answerId: string
}

export type LeadData = {
  firstName: string
  email: string
  phone?: string
  wantsEventInfo: boolean
  wantsIntroCall: boolean
}

export type Language = 'da' | 'en'

export default function Home() {
  const [stage, setStage] = useState<'intro' | 'quiz' | 'result'>('intro')
  const [answers, setAnswers] = useState<Answer[]>([])
  const [language, setLanguage] = useState<Language>('da')

  const handleStartQuiz = () => {
    setStage('quiz')
  }

  const handleQuizComplete = (quizAnswers: Answer[]) => {
    setAnswers(quizAnswers)
    setStage('result')
  }

  return (
    <main className="min-h-screen">
      {stage === 'intro' && <IntroPage onStart={handleStartQuiz} language={language} setLanguage={setLanguage} />}
      {stage === 'quiz' && <QuizFlow onComplete={handleQuizComplete} language={language} />}
      {stage === 'result' && <ResultPage answers={answers} language={language} />}
    </main>
  )
}
