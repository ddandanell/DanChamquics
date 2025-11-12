# DanCham Membership Quiz

An interactive, beautifully animated quiz application to help users discover their perfect DanCham membership profile.

## 🎯 Features

- **6 Smart Questions** - Comprehensive profiling across multiple dimensions
- **8 Unique Profiles** - Personalized results based on answers
- **Epic Animations** - Framer Motion, confetti, smooth transitions
- **Fully Responsive** - Mobile-first design with touch interactions
- **Accessibility** - Keyboard navigation, screen reader support, reduced motion support
- **Lead Capture** - Built-in form with validation
- **Social Sharing** - Share your profile with others

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the quiz.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Canvas Confetti** - Celebration effects
- **React Intersection Observer** - Scroll animations

## 📁 Project Structure

```
/app
  - page.tsx          # Main app entry
  - layout.tsx        # Root layout
  - globals.css       # Global styles

/components
  - IntroPage.tsx     # Landing page with flag animation
  - QuizFlow.tsx      # Quiz with 6 questions
  - LeadCapture.tsx   # Email/phone capture form
  - ResultPage.tsx    # Personalized result display

/data
  - questions.ts      # All 6 questions with answers
  - profiles.ts       # All 8 profiles with matching logic
```

## 🎭 Profiles

1. **The Danish Expat Connector** - Danish roots seeking community
2. **The Growth Entrepreneur** - Business owner focused on ROI
3. **The Indonesian Bridge Builder** - Cultural bridge between DK/ID
4. **The Corporate Career Climber** - Professional seeking mentorship
5. **The Young Professional Explorer** - Early career, learning phase
6. **The Institutional Connector** - Embassy/Trade Council representative
7. **The Veteran Guide** - Experienced professional giving back
8. **The Curious Newcomer** - New to Danish-Indonesian business

## 🌟 Key Animations

- Flag merge animation on intro
- Typewriter effect for headlines
- Confetti on quiz progress & completion
- Smooth page transitions
- Scroll-triggered content reveals
- Floating particles background
- Profile badge spin & float
- Counter animations

## 📱 Mobile Optimizations

- Touch-friendly interactions
- Haptic feedback (where supported)
- Reduced particle effects
- Optimized animation performance
- Swipe gestures

## ♿ Accessibility

- Respects `prefers-reduced-motion`
- Full keyboard navigation
- ARIA labels
- Screen reader announcements
- High contrast focus indicators
- WCAG AA compliant colors

## 📝 License

This project is proprietary to DanCham (Danish Chamber of Commerce in Indonesia).

## 🤝 Contributing

For questions or contributions, contact the DanCham team.
