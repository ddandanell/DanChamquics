'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export type LeadData = {
  firstName: string
  email: string
  phone?: string
  wantsEventInfo: boolean
  wantsIntroCall: boolean
}

type Language = 'da' | 'en'

interface LeadCaptureProps {
  onSubmit: (data: LeadData) => void
  language: Language
}

export default function LeadCapture({ onSubmit, language }: LeadCaptureProps) {
  const [formData, setFormData] = useState<LeadData>({
    firstName: '',
    email: '',
    phone: '',
    wantsEventInfo: false,
    wantsIntroCall: false,
  })
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const text = {
    da: {
      title: 'Få dit personlige resultat nu',
      subtitle: 'Vi sender også en kopi til din email så du kan vende tilbage',
      firstName: 'Fornavn',
      email: 'Email',
      phone: 'Telefon (valgfri)',
      phoneHelper: '💬 Så vi kan invitere dig på WhatsApp',
      eventInfo: 'Ja, send mig info om DanCham events',
      introCall: 'Ja, jeg vil gerne booke en intro-samtale (15 min)',
      submit: '📧 Se Mit Resultat →',
      privacy: '🔒 Vi respekterer din inbox. Ingen spam.',
      errors: {
        firstNameRequired: 'Fornavn er påkrævet',
        emailRequired: 'Email er påkrævet',
        emailInvalid: 'Indtast en gyldig email'
      }
    },
    en: {
      title: 'Get your personal result now',
      subtitle: 'We\'ll also send a copy to your email so you can return',
      firstName: 'First name',
      email: 'Email',
      phone: 'Phone (optional)',
      phoneHelper: '💬 So we can invite you on WhatsApp',
      eventInfo: 'Yes, send me info about DanCham events',
      introCall: 'Yes, I would like to book an intro call (15 min)',
      submit: '📧 See My Result →',
      privacy: '🔒 We respect your inbox. No spam.',
      errors: {
        firstNameRequired: 'First name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Enter a valid email'
      }
    }
  }

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newErrors: { [key: string]: string } = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = text[language].errors.firstNameRequired
    }
    
    if (!formData.email.trim()) {
      newErrors.email = text[language].errors.emailRequired
    } else if (!validateEmail(formData.email)) {
      newErrors.email = text[language].errors.emailInvalid
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    onSubmit(formData)
  }

  const handleChange = (field: keyof LeadData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dancham-navy to-dancham-red flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12"
      >
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-6xl mb-4"
          >
            👉
          </motion.div>
          
          <h2 className="text-3xl font-bold text-dancham-navy mb-2">
            {text[language].title}
          </h2>
          
          <p className="text-gray-600">
            {text[language].subtitle}
          </p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {text[language].firstName}
            </label>
            <motion.input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              onFocus={() => setFocusedField('firstName')}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                errors.firstName
                  ? 'border-red-500 shake'
                  : focusedField === 'firstName'
                  ? 'border-dancham-red shadow-lg'
                  : 'border-gray-300'
              }`}
              placeholder={text[language].firstName}
              animate={errors.firstName ? { x: [-10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.4 }}
            />
            {errors.firstName && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.firstName}
              </motion.p>
            )}
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {text[language].email} *
            </label>
            <motion.input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                errors.email
                  ? 'border-red-500'
                  : focusedField === 'email'
                  ? 'border-dancham-red shadow-lg'
                  : 'border-gray-300'
              }`}
              placeholder={language === 'da' ? 'din@email.com' : 'your@email.com'}
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.email}
              </motion.p>
            )}
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {text[language].phone}
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                focusedField === 'phone'
                  ? 'border-dancham-red shadow-lg'
                  : 'border-gray-300'
              }`}
              placeholder="+62 ..."
            />
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
              {text[language].phoneHelper}
            </p>
          </motion.div>

          {/* Checkboxes */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-3"
          >
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={formData.wantsEventInfo}
                onChange={(e) => handleChange('wantsEventInfo', e.target.checked)}
                className="mt-1 w-5 h-5 text-dancham-red rounded focus:ring-2 focus:ring-dancham-red"
              />
              <span className="text-gray-700 group-hover:text-dancham-navy transition-colors">
                {text[language].eventInfo}
              </span>
            </label>
            
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={formData.wantsIntroCall}
                onChange={(e) => handleChange('wantsIntroCall', e.target.checked)}
                className="mt-1 w-5 h-5 text-dancham-red rounded focus:ring-2 focus:ring-dancham-red"
              />
              <span className="text-gray-700 group-hover:text-dancham-navy transition-colors">
                {text[language].introCall}
              </span>
            </label>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-dancham-red text-white font-bold py-4 rounded-lg text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {text[language].submit}
          </motion.button>

          {/* Privacy Notice */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-sm text-gray-500 flex items-center justify-center gap-2"
          >
            {text[language].privacy}
          </motion.p>
        </form>
      </motion.div>
    </div>
  )
}
